//
//  Author: Shervin Aflatooni
//

#include "CustomIOSystem.h"
#include "CustomIOStream.h"
#include "Logger.h"
#include <stdio.h>
#include <string>

CustomIOSystem::CustomIOSystem( bool fromHttp )
{
    is_fromHttp = fromHttp;
}
CustomIOSystem::~CustomIOSystem( void ) {}

bool CustomIOSystem::ComparePaths( const char* one, const char* second ) const
{
    if ( strcmp( one, second ) == 0 )
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool CustomIOSystem::Exists( const char* pFile ) const
{
    log_info( "CustomIOSystem::Exists file(%s),http(%d)", pFile, is_fromHttp );
#ifndef ANDROID
    // TODO: FIX THIS IN WINDOWS
    // if(access(("../assets/" + std::string(pFile)).c_str(), F_OK) != -1) {
    //  return true;
    //} else {
    //  return false;
    //}
    return true;
#else
    return true;
#endif
}

char CustomIOSystem::getOsSeparator( void ) const
{
    return '/';
}

Assimp::IOStream* CustomIOSystem::Open( const char* pFile, const char* pMode )
{
    log_info( "CustomIOSystem::open file(%s),Mode(%s),http(%d)", pFile, pMode, is_fromHttp );
    return new CustomIOStream( pFile, pMode, is_fromHttp );
}

void CustomIOSystem::Close( Assimp::IOStream* pFile )
{
    delete pFile;
}
