//
//  Author: Shervin Aflatooni
//

#pragma once

#include <assimp/IOSystem.hpp>

class CustomIOSystem : public Assimp::IOSystem
{
public:
    CustomIOSystem( bool fromHttp = false );
    ~CustomIOSystem( void );

    bool              ComparePaths( const char* one, const char* second ) const;
    bool              Exists( const char* pFile ) const;
    char              getOsSeparator( void ) const;
    Assimp::IOStream* Open( const char* pFile, const char* pMode );
    void              Close( Assimp::IOStream* pFile );
private:
    bool is_fromHttp = false;
};
