//
//  Author: Shervin Aflatooni
//

#pragma once

#include <fstream>
#ifdef ASSET_DIR
    #undef ASSET_DIR
#endif
#define ASSET_DIR "assets/"
#ifdef ANDROID
    #include "AndroidAssetManager.h"
#endif

enum origin
{
    Origin_SET,
    Origin_CUR,
    Origin_END
};

class EngineIOStream
{
public:
    EngineIOStream( const std::string& fileName ,bool fromHttp=false);
    ~EngineIOStream( void );

    size_t read( void* pvBuffer, size_t pSize, size_t pCount );
    size_t write( const void* pvBuffer, size_t pSize, size_t pCount );
    bool   seek( size_t pOffset, origin pOrigin );
    size_t tell( void ) const;
    size_t fileSize( void ) const;
    void   flush( void );

    std::string getFileName( void );
private:
    std::string m_fileName;

#ifndef ANDROID
    std::fstream* m_file;
#else
    AAsset* m_file;
#endif
};
