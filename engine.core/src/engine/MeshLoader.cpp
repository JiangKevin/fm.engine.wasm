//
//  Author: Shervin Aflatooni
//

#include "MeshLoader.h"
#include "CustomIOSystem.h"
#include "FBXImporter.h"
#include "Logger.h"
#include "components/MeshRenderer.h"
#include "fmFetch.h"
#include <algorithm>
#include <assimp/Importer.hpp>
#include <assimp/postprocess.h>

// TODO: need to come back and refactor this, make it load on a seperate thread.
std::map< std::string, std::vector< MeshRendererData > > MeshLoader::sceneMeshRendererDataCache;

MeshLoader::MeshLoader( const std::string file, bool fromHttp, Game* gamePtr )
{
    /**/
    game_ptr = gamePtr;
    /**/
    m_fileName = file;

    if ( MeshLoader::sceneMeshRendererDataCache[ m_fileName ].size() > 0 )
    {
        m_entity = std::make_shared< Entity >();
        m_entity->updateTag( m_fileName );
        for ( auto meshRenderData : MeshLoader::sceneMeshRendererDataCache[ m_fileName ] )
        {
            m_entity->addComponent< MeshRenderer >( meshRenderData.mesh, meshRenderData.material );
        }
    }
    else
    {
        std::string extension = "";
        if ( m_fileName.find_last_of( "." ) != std::string::npos )
        {
            extension = m_fileName.substr( m_fileName.find_last_of( "." ) );
        }
        // 转换为大写
        transform( extension.begin(), extension.end(), extension.begin(),
                   []( unsigned char c )
                   {
                       return toupper( c );
                   } );
        // 打印文件名扩展名
        printf( "From wasm: file extension = %s \n", extension.c_str() );
        log_info( "Loading mesh: %s", file.c_str() );
        // 验证来源
        if ( fromHttp == false )
        {
            Assimp::Importer importer;
            importer.SetIOHandler( new CustomIOSystem() );
            const aiScene* scene = importer.ReadFile( file, aiProcess_Triangulate | aiProcess_GenSmoothNormals | aiProcess_FlipUVs | aiProcess_CalcTangentSpace );
            //
            if ( ! scene )
            {
                log_err( "Failed to load mesh: %s", file.c_str() );
            }
            else
            {
                loadScene( scene, file );
            }
        }
        else
        {
            /**/
            Assimp::Importer* importer = new Assimp::Importer();
            blob_node*        bn_ptr   = new blob_node();
            bn_ptr->game_ptr           = game_ptr;
            bn_ptr->ml_ptr             = this;
            bn_ptr->url                = m_fileName;
            bn_ptr->importer           = importer;
            bn_ptr->mould_file_type    = "OBJ";
            /**/
            fecthRequest* mRequest = new fecthRequest();
            mRequest->bn_ptr       = bn_ptr;
            mRequest->dataType     = FETCH_BLOB;
            /***/
            create_http_fetch( mRequest );
        }
    }
}

MeshLoader::~MeshLoader( void ) {}

std::shared_ptr< Entity > MeshLoader::getEntity( void ) const
{
    return m_entity;
}

void MeshLoader::loadScene( const aiScene* scene, std::string tag )
{
    m_entity = std::make_shared< Entity >();
    m_entity->updateTag( tag );
    for ( int i = 0; i < scene->mNumMeshes; i++ )
    {
        const aiMesh* model = scene->mMeshes[ i ];

        std::vector< Vertex >       vertices;
        std::vector< unsigned int > indices;

        const aiVector3D aiZeroVector( 0.0f, 0.0f, 0.0f );
        for ( unsigned int i = 0; i < model->mNumVertices; i++ )
        {
            const aiVector3D* pPos      = &( model->mVertices[ i ] );
            const aiVector3D* pNormal   = &( model->mNormals[ i ] );
            const aiVector3D* pTexCoord = model->HasTextureCoords( 0 ) ? &( model->mTextureCoords[ 0 ][ i ] ) : &aiZeroVector;
            const aiVector3D* pTangent  = model->HasTangentsAndBitangents() ? &( model->mTangents[ i ] ) : &aiZeroVector;

            Vertex vert( glm::vec3( pPos->x, pPos->y, pPos->z ), glm::vec2( pTexCoord->x, pTexCoord->y ), glm::vec3( pNormal->x, pNormal->y, pNormal->z ), glm::vec3( pTangent->x, pTangent->y, pTangent->z ) );

            vertices.push_back( vert );
        }

        for ( unsigned int i = 0; i < model->mNumFaces; i++ )
        {
            const aiFace& face = model->mFaces[ i ];
            indices.push_back( face.mIndices[ 0 ] );
            indices.push_back( face.mIndices[ 1 ] );
            indices.push_back( face.mIndices[ 2 ] );
        }

        const aiMaterial* pMaterial = scene->mMaterials[ model->mMaterialIndex ];
        log_info( "tex num: %i", model->mMaterialIndex );

        std::shared_ptr< Texture > diffuseMap;
        std::shared_ptr< Texture > normalMap;
        std::shared_ptr< Texture > specularMap;

        aiString Path;

        if ( pMaterial->GetTextureCount( aiTextureType_DIFFUSE ) > 0 && pMaterial->GetTexture( aiTextureType_DIFFUSE, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            diffuseMap = std::make_shared< Texture >( Asset( Path.data ) );
        }
        else
        {
            diffuseMap = std::make_shared< Texture >( Asset( "default_normal.jpg" ) );
        }

        if ( pMaterial->GetTextureCount( aiTextureType_HEIGHT ) > 0 && pMaterial->GetTexture( aiTextureType_HEIGHT, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            normalMap = std::make_shared< Texture >( Asset( Path.data ) );
        }
        else
        {
            normalMap = std::make_shared< Texture >( Asset( "default_normal.jpg" ) );
        }

        if ( pMaterial->GetTextureCount( aiTextureType_SPECULAR ) > 0 && pMaterial->GetTexture( aiTextureType_SPECULAR, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            specularMap = std::make_shared< Texture >( Asset( Path.data ) );
        }
        else
        {
            specularMap = std::make_shared< Texture >( Asset( "default_specular.jpg" ) );
        }

        MeshRendererData meshRenderData;
        meshRenderData.mesh     = std::make_shared< Mesh >( m_fileName + std::string( model->mName.C_Str() ), &vertices[ 0 ], vertices.size(), &indices[ 0 ], indices.size() );
        meshRenderData.material = std::make_shared< Material >( diffuseMap, normalMap, specularMap );

        MeshLoader::sceneMeshRendererDataCache[ m_fileName ].push_back( meshRenderData );
        m_entity->addComponent< MeshRenderer >( meshRenderData.mesh, meshRenderData.material );
    }
}
