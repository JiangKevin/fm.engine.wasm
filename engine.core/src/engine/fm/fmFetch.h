#pragma once
#include "Game.h"
#include "Logger.h"
#include "components/SphereCollider.h"
#include "fm/wasm_minizip.h"
#include "zlib.h"
#include <assert.h>
#include <assimp/Importer.hpp>
#include <assimp/postprocess.h>
#include <emscripten/fetch.h>
#include <emscripten/wasmfs.h>
#include <errno.h>
#include <fcntl.h>
#include <iostream>
#include <signal.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>

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
    FETCH_SVG,
    FETCH_ZIP
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
    string            fileName            = "monkey3";
    string            mould_file_type     = "obj";
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
void create_file( const char* path, const char* buffer, int size, int mode )
{
    int fd = open( path, O_WRONLY | O_CREAT | O_EXCL, mode );
    assert( fd >= 0 );
    int err = write( fd, buffer, size );
    close( fd );
}
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
    /**/
    fecthRequest* user_data = ( fecthRequest* )fetch->userData;
    /**/
    if ( user_data->dataType == FETCH_ZIP )
    {
        char  cwd[ 100 ];
        char* ret;
        int   result;
        // 验证 /temp文件夹是否存在，不存在就创建
        result = access( "/temp", F_OK );
        if ( result != 0 )
        {
            mkdir( "temp", 0777 );
            ret = getcwd( cwd, sizeof( cwd ) );
            assert( ret == cwd );
            debug( "Current working dir: %s", cwd );
        }
        //
        char zip_name_no_ext[ 100 ] = "";
        sprintf( zip_name_no_ext, "/temp/%s.zip", user_data->bn_ptr->fileName.c_str() );
        //
        char out_folder[ 100 ]      = "";
        char inZipPath[ 100 ]       = "";
        char model_file_name[ 100 ] = "";
        sprintf( out_folder, "/temp/%s", user_data->bn_ptr->fileName.c_str() );
        sprintf( inZipPath, "/temp/%s.zip", user_data->bn_ptr->fileName.c_str() );
        const char* cmd_par[] = { "./fm_zip", "-x", "-o", "-d", out_folder, inZipPath };
        int         is_zip_ok;
        result = access( zip_name_no_ext, F_OK );
        // 如果temp中不存在下载的文件，创建zip，并解压缩到相应文件夹下
        if ( result != 0 )
        {
            // 如果temp中不存在下载的文件，创建zip，并解压缩到相应文件夹下
            create_file( zip_name_no_ext, fetch->data, fetch->numBytes, 0777 );
            is_zip_ok = zip_tool_entrance( 6, cmd_par );
        }
        //
        if ( is_zip_ok == 0 )
        {
            //
            sprintf( model_file_name, "/temp/%s/%s.%s", user_data->bn_ptr->fileName.c_str(), user_data->bn_ptr->fileName.c_str(), user_data->bn_ptr->mould_file_type.c_str() );
            result = access( model_file_name, F_OK );
            if ( result == 0 )
            {
                debug( "The model file（%s） is in the corresponding folder", model_file_name );
                CustomIOSystem* cisys_ptr = new CustomIOSystem( true );
                // cisys_ptr->plush();
                user_data->bn_ptr->importer->SetIOHandler( cisys_ptr );
            }
            else
            {
                debug( "Unzip file(%s) is noe ok !!!!", model_file_name );
            }
            //
            const aiScene* scene = user_data->bn_ptr->importer->ReadFile( model_file_name, user_data->bn_ptr->assimpOptimizeFlags );
            //
            if ( ! scene )
            {
                log_err( "Failed to load mesh: %s", model_file_name );
            }
            else
            {
                debug( "Load mesh: %s from Fetch fileSystem", model_file_name );
                // 加载场景资源
                if ( user_data->bn_ptr->ml_ptr )
                {
                    user_data->bn_ptr->ml_ptr->loadScene( scene, model_file_name, true, user_data->bn_ptr->mould_file_type, user_data->bn_ptr->fileName.c_str() );
                    /**/
                    // 添加默认的坐标与碰撞信息
                    user_data->bn_ptr->ml_ptr->getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 0 ) );
                    user_data->bn_ptr->ml_ptr->getEntity()->addComponent< SphereCollider >( 1, 1 );
                    user_data->bn_ptr->game_ptr->addToScene( user_data->bn_ptr->ml_ptr->getEntity() );
                }
            }
        }
        // // 释放内存
        // free( out_folder );
        // free( inZipPath );
        free( cmd_par );
    }
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
    /**/
    if ( arg->dataType == FETCH_ZIP )
    {
        emscripten_fetch( &attr, arg->bn_ptr->url.c_str() );
    }
}
