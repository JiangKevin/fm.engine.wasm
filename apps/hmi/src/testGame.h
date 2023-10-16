#pragma once
//
#include "Engine.h"
#include "GuiManager.h"
#include "Logger.h"
#include "Mesh.h"
#include "MeshLoader.h"
#include "Plane.h"
#include "Texture.h"
#include "components/BoxCollider.h"
#include "components/DirectionalLight.h"
#include "components/FreeLook.h"
#include "components/FreeMove.h"
#include "components/MeshRenderer.h"
#include "components/OrthoCamera.h"
#include "components/PerspectiveCamera.h"
#include "components/PointLight.h"
#include "components/SphereCollider.h"
#include "components/SpotLight.h"
#include <SDL_main.h>
//
using namespace std;
//
struct mesh_model
{
    string _tag;
    string _meshcache_tag;
    // shared_ptr< MeshLoader > _ml;
    MeshLoader* _ml;
};
//
class TestGame : public Game
{
public:
    virtual void init( GLManager* glManager );
    virtual void update( Input* input, std::chrono::microseconds delta );
    virtual void render( GLManager* glManager );

    std::shared_ptr< PerspectiveCamera > primary_camera;
    std::shared_ptr< SpotLight >         s_light;
    // std::shared_ptr< PerspectiveCamera > primary_camera2;
public:
    std::vector< mesh_model > _model_array;
    void                      init_model();
    void                      add_model( const std::string file, bool fromHttp = false, std::string extension = "obj" );
};