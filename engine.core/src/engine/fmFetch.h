#pragma once
#include "Game.h"
#include "components/SphereCollider.h"
#include <assimp/Importer.hpp>
#include <assimp/postprocess.h>
#include <emscripten/fetch.h>
#include <stdio.h>
#include <string.h>
/**/
using namespace std;
/**/
enum fetch_reponse_type
{
    FETCH_TEXT,
    FETCH_JSON,
    FETCH_BUFFER,
    FETCH_BLOB,
    FETCH_BLOB_IMAGE,
    FETCH_SVG
};
/**/
enum node_draw_type
{
    DRAW_FACE,
    DRAW_VERTICE,
    DRAW_WIREFRAME
};
/**/
struct blob_node
{
    Game*             game_ptr;
    Assimp::Importer* importer;
    MeshLoader*       ml_ptr;
    bool              isload              = false;
    node_draw_type    draw_type           = DRAW_FACE;
    bool              isTexRepeat         = true;
    string            url                 = "AncientUgandan.obj";
    string            mould_file_type     = "OBJ";
    string            uuid                = "";
    int               assimpOptimizeFlags = aiProcess_Triangulate | aiProcess_GenSmoothNormals | aiProcess_FlipUVs | aiProcess_CalcTangentSpace;
};
/**/
struct blob_image
{
    string                     url = "AncientUgandan.png";
    std::shared_ptr< Texture > texture_ptr;
};
/**/
struct fecthRequest
{
    fetch_reponse_type dataType;
    blob_node*         bn_ptr;
    blob_image*        bi_ptr;
};
/**/
void downloadSucceeded( emscripten_fetch_t* fetch )
{
    char* str_blob = ( char* )malloc( fetch->numBytes * sizeof( char ) );
    memcpy( str_blob, fetch->data, fetch->numBytes );
    /**/
    fecthRequest* user_data = ( fecthRequest* )fetch->userData;
    if ( user_data->dataType == FETCH_BLOB )
    {
        if ( user_data->bn_ptr->mould_file_type == "OBJ" )
        {
            // const aiScene*   scene = importer.ReadFile( file, aiProcess_Triangulate | aiProcess_GenSmoothNormals | aiProcess_FlipUVs | aiProcess_CalcTangentSpace );
            const aiScene* scene = user_data->bn_ptr->importer->ReadFileFromMemory( ( char* )str_blob, fetch->numBytes, user_data->bn_ptr->assimpOptimizeFlags );
            if ( ! scene )
            {
                log_err( "Failed to load mesh: %s", user_data->bn_ptr->url.c_str() );
            }
            else
            {
                // 加载场景资源
                user_data->bn_ptr->ml_ptr->loadScene( scene, user_data->bn_ptr->url, true );
                // /**/
                // // 添加默认的坐标与碰撞信息
                // user_data->bn_ptr->ml_ptr->getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 8 ) );
                // user_data->bn_ptr->ml_ptr->getEntity()->addComponent< SphereCollider >( 1, 1 );
                // user_data->bn_ptr->game_ptr->addToScene( user_data->bn_ptr->ml_ptr->getEntity() );
            }
        }
    }
    /**/
    if ( user_data->dataType == FETCH_BLOB_IMAGE )
    {
    }
    /**/
    free( str_blob );
    /**/
    emscripten_fetch_close( fetch );
}

void downloadFailed( emscripten_fetch_t* fetch )
{
    emscripten_fetch_close( fetch );
}

void create_http_fetch( fecthRequest* arg )
{
    emscripten_fetch_attr_t attr;
    emscripten_fetch_attr_init( &attr );
    strcpy( attr.requestMethod, "GET" );
    attr.attributes = EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE;
    attr.onsuccess  = downloadSucceeded;
    attr.onerror    = downloadFailed;
    /*将自定义的变量注入结构体*/
    attr.userData = arg;
    /**/
    if ( arg->dataType == FETCH_BLOB )
    {
        emscripten_fetch( &attr, arg->bn_ptr->url.c_str() );
    }
    /**/
    if ( arg->dataType == FETCH_BLOB_IMAGE )
    {
        emscripten_fetch( &attr, arg->bi_ptr->url.c_str() );
    }
}
