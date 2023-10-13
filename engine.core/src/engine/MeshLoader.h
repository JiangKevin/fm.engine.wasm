//
//  Author: Shervin Aflatooni
//

#pragma once

#include "Entity.h"
#include "Game.h"
#include "Material.h"
#include "Mesh.h"
#include "Texture.h"
#include <assimp/scene.h>
#include <map>
#include <string>
#include <vector>

struct MeshRendererData
{
    std::shared_ptr< Mesh >     mesh;
    std::shared_ptr< Material > material;
};

class MeshLoader
{
public:
    MeshLoader( const std::string file, bool fromHttp = false, Game* gamePtr = nullptr, std::string extension = "obj" );
    ~MeshLoader( void );
    std::shared_ptr< Entity > getEntity( void ) const;
    /**/
    void loadScene( const aiScene* scene, std::string tag = "", bool fromHttp = false, std::string extension = "obj", std::string mid_folder = "monkey" );
    /**/
    Game* game_ptr;
private:
    std::string                                                     m_fileName;
    std::shared_ptr< Entity >                                       m_entity;
    static std::map< std::string, std::vector< MeshRendererData > > sceneMeshRendererDataCache;
};
