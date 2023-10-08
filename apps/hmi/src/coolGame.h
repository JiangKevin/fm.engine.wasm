#pragma once
//
#include "Engine.h"
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

class CoolGame : public Game
{
public:
    virtual void init( GLManager* glManager );
    virtual void update( Input* input, std::chrono::microseconds delta );

    std::shared_ptr< PerspectiveCamera > primary_camera;
    std::shared_ptr< PerspectiveCamera > primary_camera2;
};