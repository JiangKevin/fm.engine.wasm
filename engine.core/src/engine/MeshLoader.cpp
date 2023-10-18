//
//  Author: Shervin Aflatooni
//

#include "MeshLoader.h"
#include "CustomIOSystem.h"
#include "Logger.h"
#include "components/MeshRenderer.h"
#include "fm/fmFetch.h"
#include "fm/uuid_generate.h"
#include <algorithm>
#include <assimp/Importer.hpp>
#include <assimp/postprocess.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>

//
using namespace uuid;
// TODO: need to come back and refactor this, make it load on a seperate thread.
std::map< std::string, std::vector< MeshRendererData > > MeshLoader::sceneMeshRendererDataCache;

MeshLoader::MeshLoader( const std::string file, bool fromHttp, std::string extension, int optimizeFlags )
{
    /**/
    // game_ptr = gamePtr;
    /**/
    string real_filename;
    if ( fromHttp == false )
    {
        m_fileName    = file;
        real_filename = file;
    }
    else
    {
        m_fileName    = file + "." + extension;
        real_filename = file + "." + extension;
    }
    // 验证来源
    if ( fromHttp == false )
    {
        // int flags = aiProcess_Triangulate | aiProcess_GenSmoothNormals | aiProcess_FlipUVs | aiProcess_CalcTangentSpace;
        // debug( "optimizeFlags = %d", flags );
        debug( "Loading mesh: %s From fileSystem", file.c_str() );
        Assimp::Importer importer;
        importer.SetIOHandler( new CustomIOSystem() );
        const aiScene* scene = importer.ReadFile( file, optimizeFlags );
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
        debug( "Loading mesh: %s From http", file.c_str() );
        debug( "Request ml_ptl %u From http", this );
        /**/
        auto importer = std::make_shared< Assimp::Importer >();
        auto bn_ptr   = std::make_shared< blob_node >();
        // bn_ptr->game_ptr        = game_ptr;
        bn_ptr->ml_ptr              = this;
        bn_ptr->url                 = "./assets/" + file + ".zip";
        bn_ptr->fileName            = file;
        bn_ptr->importer            = importer;
        bn_ptr->mould_file_type     = extension;
        bn_ptr->assimpOptimizeFlags = optimizeFlags;
        /**/
        fecthRequest* mRequest = new fecthRequest();
        mRequest->bn_ptr       = bn_ptr;
        mRequest->dataType     = FETCH_ZIP;
        /***/
        create_http_fetch( mRequest );
    }
}

MeshLoader::~MeshLoader( void ) {}

std::shared_ptr< Entity > MeshLoader::getEntity( void ) const
{
    return m_entity;
}
void MeshLoader::loadScene_new( const aiScene* scene, std::string tag, bool fromHttp, std::string extension, std::string mid_folder )
{
    debug( "Mid_folder: %s ", mid_folder.c_str() );

    //
    for ( int i = 0; i < scene->mNumMeshes; i++ )
    {
        const aiMesh*               model = scene->mMeshes[ i ];
        std::vector< Vertex >       vertices;
        std::vector< unsigned int > indices;

        const aiVector3D aiZeroVector( 0.0f, 0.0f, 0.0f );
        for ( unsigned int i = 0; i < model->mNumVertices; i++ )
        {
            debug("vertice %d : pos( %d , %d , %d )",i,model->mVertices[ i ].x,model->mVertices[ i ].y,model->mVertices[ i ].z);
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
        debug( "Tex num: %s : %i", tag.c_str(), model->mMaterialIndex );
        /**/
        std::shared_ptr< Texture > diffuseMap;
        std::shared_ptr< Texture > normalMap;
        std::shared_ptr< Texture > specularMap;
        aiString                   Path;
        char                       new_path[ 2048 ] = "";
        /**/
        //
        if ( pMaterial->GetTextureCount( aiTextureType_DIFFUSE ) > 0 && pMaterial->GetTexture( aiTextureType_DIFFUSE, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            if ( fromHttp == false )  // From filesystem
            {
                debug( "DiffuseMap tex path: %s From filesystem", Path.data );
                diffuseMap = std::make_shared< Texture >( Asset( Path.data ) );
            }
            else
            {
                debug( "DiffuseMap tex path: %s From Http", Path.data );
                sprintf( new_path, "/temp/%s/%s", mid_folder.c_str(), Path.data );
                diffuseMap = std::make_shared< Texture >( Asset( new_path, true ) );
            }
        }
        else
        {
            debug( "DiffuseMap tex path: %s for default", Path.data );
            diffuseMap = std::make_shared< Texture >( Asset( "default_normal.jpg" ) );
        }
        /**/
        if ( pMaterial->GetTextureCount( aiTextureType_HEIGHT ) > 0 && pMaterial->GetTexture( aiTextureType_HEIGHT, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            if ( fromHttp == false )  // From filesystem
            {
                debug( "NormalMap tex path: %s From filesystem", Path.data );
                normalMap = std::make_shared< Texture >( Asset( Path.data ) );
            }
            else
            {
                debug( "NormalMap tex path: %s From http", Path.data );
                sprintf( new_path, "/temp/%s/%s", mid_folder.c_str(), Path.data );
                normalMap = std::make_shared< Texture >( Asset( new_path, true ) );
            }
        }
        else
        {
            debug( "NormalMap tex path: %s for default", Path.data );
            normalMap = std::make_shared< Texture >( Asset( "default_normal.jpg" ) );
        }
        /**/
        if ( pMaterial->GetTextureCount( aiTextureType_SPECULAR ) > 0 && pMaterial->GetTexture( aiTextureType_SPECULAR, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            if ( fromHttp == false )  // From filesystem
            {
                debug( "SpecularMap tex path: %s From filesystem", Path.data );
                specularMap = std::make_shared< Texture >( Asset( Path.data ) );
            }
            else
            {
                debug( "SpecularMap tex path: %s From http", Path.data );
                sprintf( new_path, "/temp/%s/%s", mid_folder.c_str(), Path.data );
                specularMap = std::make_shared< Texture >( Asset( new_path, true ) );
            }
        }
        else
        {
            debug( "SpecularMap tex path: %s for default", Path.data );
            specularMap = std::make_shared< Texture >( Asset( "default_specular.jpg" ) );
        }
        //
        MeshRendererData meshRenderData;
        //
        if ( ( vertices.size() > 0 ) && ( indices.size() > 0 ) )
        {
            meshRenderData.mesh     = std::make_shared< Mesh >( tag + std::string( model->mName.C_Str() ), &vertices[ 0 ], vertices.size(), &indices[ 0 ], indices.size() );
            meshRenderData.material = std::make_shared< Material >( diffuseMap, normalMap, specularMap );
            //
            debug( "SceneMeshRendererDataCache[%s] size(%d) at use http", tag.c_str(), MeshLoader::sceneMeshRendererDataCache[ tag ].size() );
            if ( MeshLoader::sceneMeshRendererDataCache[ tag ].size() == 0 )
            {
                debug( "Add SceneMeshRendererDataCache[%s] at use http", tag.c_str() );
                MeshLoader::sceneMeshRendererDataCache[ tag ].push_back( meshRenderData );
            }
        }
    }
}
void MeshLoader::loadScene( const aiScene* scene, std::string tag, bool fromHttp, std::string extension, std::string mid_folder )
{
    debug( "Mid_folder: %s ", mid_folder.c_str() );

    //
    for ( int i = 0; i < scene->mNumMeshes; i++ )
    {
        const aiMesh*               model = scene->mMeshes[ i ];
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
        debug( "Tex num: %s : %i", tag.c_str(), model->mMaterialIndex );
        /**/
        std::shared_ptr< Texture > diffuseMap;
        std::shared_ptr< Texture > normalMap;
        std::shared_ptr< Texture > specularMap;
        aiString                   Path;
        char                       new_path[ 2048 ] = "";
        /**/
        //
        if ( pMaterial->GetTextureCount( aiTextureType_DIFFUSE ) > 0 && pMaterial->GetTexture( aiTextureType_DIFFUSE, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            if ( fromHttp == false )  // From filesystem
            {
                debug( "DiffuseMap tex path: %s From filesystem", Path.data );
                diffuseMap = std::make_shared< Texture >( Asset( Path.data ) );
            }
            else
            {
                debug( "DiffuseMap tex path: %s From Http", Path.data );
                sprintf( new_path, "/temp/%s/%s", mid_folder.c_str(), Path.data );
                diffuseMap = std::make_shared< Texture >( Asset( new_path, true ) );
            }
        }
        else
        {
            debug( "DiffuseMap tex path: %s for default", Path.data );
            diffuseMap = std::make_shared< Texture >( Asset( "default_normal.jpg" ) );
        }
        /**/
        if ( pMaterial->GetTextureCount( aiTextureType_HEIGHT ) > 0 && pMaterial->GetTexture( aiTextureType_HEIGHT, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            if ( fromHttp == false )  // From filesystem
            {
                debug( "NormalMap tex path: %s From filesystem", Path.data );
                normalMap = std::make_shared< Texture >( Asset( Path.data ) );
            }
            else
            {
                debug( "NormalMap tex path: %s From http", Path.data );
                sprintf( new_path, "/temp/%s/%s", mid_folder.c_str(), Path.data );
                normalMap = std::make_shared< Texture >( Asset( new_path, true ) );
            }
        }
        else
        {
            debug( "NormalMap tex path: %s for default", Path.data );
            normalMap = std::make_shared< Texture >( Asset( "default_normal.jpg" ) );
        }
        /**/
        if ( pMaterial->GetTextureCount( aiTextureType_SPECULAR ) > 0 && pMaterial->GetTexture( aiTextureType_SPECULAR, 0, &Path, NULL, NULL, NULL, NULL, NULL ) == AI_SUCCESS )
        {
            if ( fromHttp == false )  // From filesystem
            {
                debug( "SpecularMap tex path: %s From filesystem", Path.data );
                specularMap = std::make_shared< Texture >( Asset( Path.data ) );
            }
            else
            {
                debug( "SpecularMap tex path: %s From http", Path.data );
                sprintf( new_path, "/temp/%s/%s", mid_folder.c_str(), Path.data );
                specularMap = std::make_shared< Texture >( Asset( new_path, true ) );
            }
        }
        else
        {
            debug( "SpecularMap tex path: %s for default", Path.data );
            specularMap = std::make_shared< Texture >( Asset( "default_specular.jpg" ) );
        }
        //
        MeshRendererData meshRenderData;
        //
        if ( ( vertices.size() > 0 ) && ( indices.size() > 0 ) )
        {
            meshRenderData.mesh     = std::make_shared< Mesh >( tag + std::string( model->mName.C_Str() ), &vertices[ 0 ], vertices.size(), &indices[ 0 ], indices.size() );
            meshRenderData.material = std::make_shared< Material >( diffuseMap, normalMap, specularMap );
            //
            debug( "SceneMeshRendererDataCache[%s] size(%d) at use http", tag.c_str(), MeshLoader::sceneMeshRendererDataCache[ tag ].size() );
            if ( MeshLoader::sceneMeshRendererDataCache[ tag ].size() == 0 )
            {
                debug( "Add SceneMeshRendererDataCache[%s] at use http", tag.c_str() );
                MeshLoader::sceneMeshRendererDataCache[ tag ].push_back( meshRenderData );
            }
        }
    }
}

void MeshLoader::entity_creat( std::string tag, std::string meshcache_tag, bool fromHttp )
{
    //
    string o_tag;
    if ( fromHttp )
    {
        // o_tag = tag + "-" + "HTTP-" + generate_uuid_v4();
        o_tag = tag;
    }
    else
    {
        o_tag = tag + "-" + "FILE-" + generate_uuid_v4();
    }
    debug( "Tag: %s , %s", o_tag.c_str(), meshcache_tag.c_str() );
    if ( m_entity == nullptr )
    {
        // debug( "m_entity==nullptr" );
        m_entity = std::make_shared< Entity >();
        m_entity->updateTag( o_tag );
    }
    //
    for ( auto i = MeshLoader::sceneMeshRendererDataCache.begin(); i != MeshLoader::sceneMeshRendererDataCache.end(); ++i )
    {
        debug( "SceneMeshRendererDataCache: -> %s", i->first.c_str() );
    }
    //
    for ( auto meshRenderData : MeshLoader::sceneMeshRendererDataCache[ meshcache_tag ] )
    {
        m_entity->addComponent< MeshRenderer >( meshRenderData.mesh, meshRenderData.material );
        is_created = true;
    }
}