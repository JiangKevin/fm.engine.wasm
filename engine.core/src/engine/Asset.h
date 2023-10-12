//
//  Author: Shervin Aflatooni
//

#pragma once

#include "EngineIOStream.h"
#include <string>

class Asset
{
public:
    Asset( const std::string& fileName, bool fromHttp = false );
    ~Asset( void );

    const char* read( void ) const;

    EngineIOStream* getIOStream( void ) const;
private:
    char*           m_buffer;
    EngineIOStream* m_ioStream;
    size_t          m_fileSize;
};
