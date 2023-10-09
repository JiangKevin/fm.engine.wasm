#pragma once
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
    MeshLoader*    ml_ptr;
    bool           isload              = false;
    node_draw_type draw_type           = DRAW_FACE;
    bool           isTexRepeat         = true;
    string         url                 = "./assets/AncientUgandan.obj";
    string         mould_file_type     = "OBJ";
    string         uuid                = "";
    int            assimpOptimizeFlags = 0;
};

/**/
struct fecthRequest
{
    fetch_reponse_type dataType;
    blob_node*         bn_ptr;
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
    }
    if ( user_data->dataType == FETCH_SVG )
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
}
