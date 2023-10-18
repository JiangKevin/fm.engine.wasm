#include "mainGame.h"
#include "Component.h"
#include "fm/uuid_generate.h"
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>
#include <vector>
using namespace uuid;
//
void MainGame::update( Input* input, std::chrono::microseconds delta )
{
    Game::update( input, delta );
    if ( topOrFront )
    {
        getEngine()->getGLManager()->setActiveCamera( top_camera );
    }
    else
    {
        getEngine()->getGLManager()->setActiveCamera( primary_camera );
    }
    // 移动
    if ( m_top_lar_velocity != 0 )
    {
        affiliated_actor->getTransform().translate( glm::rotate( affiliated_actor->getTransform().getRotation(), glm::vec3( m_top_lar_velocity, 0.0f, 0.0f ) ) );
    }
    if ( m_top_uad_velocity != 0 )
    {
        affiliated_actor->getTransform().translate( glm::rotate( affiliated_actor->getTransform().getRotation(), glm::vec3( 0.0f, m_top_uad_velocity, 0.0f ) ) );
    }
    if ( is_zoom )
    {
        top_camera->zoom( m_top_pam_velocity );
    }
}

void MainGame::init( GLManager* glManager )
{
    /* 期初原生ui与input */
    init_input();
    //
    auto brickMat  = std::make_shared< Material >( std::make_shared< Texture >( Asset( "bricks2.jpg" ) ), std::make_shared< Texture >( Asset( "bricks2_normal.jpg" ) ), std::make_shared< Texture >( Asset( "bricks2_specular.png" ) ) );
    auto planeMesh = Plane::getMesh();

    // ground
    {
        auto plane = std::make_shared< Entity >( "ground 1" );
        plane->addComponent< MeshRenderer >( planeMesh, brickMat );
        plane->getTransform().setPosition( glm::vec3( -5, -2, 0 ) ).setScale( glm::vec3( 10, 1, 10 ) );
        plane->addComponent< BoxCollider >( glm::vec3( 5, 0, 5 ), 0 );
        addToScene( plane );
    }
    {
        auto plane = std::make_shared< Entity >( "ground 2" );
        plane->addComponent< MeshRenderer >( planeMesh, brickMat );
        plane->getTransform().setPosition( glm::vec3( 5, -2, 0 ) ).setScale( glm::vec3( 10, 1, 10 ) );
        plane->addComponent< BoxCollider >( glm::vec3( 5, 0, 5 ), 0 );
        addToScene( plane );
    }
    {
        auto plane = std::make_shared< Entity >();
        plane->updateTag( "ground 3" );
        plane->addComponent< MeshRenderer >( planeMesh, brickMat );
        plane->getTransform().setPosition( glm::vec3( -5, -2, 10 ) ).setScale( glm::vec3( 10, 1, 10 ) );
        plane->addComponent< BoxCollider >( glm::vec3( 5, 0, 5 ), 0 );

        addToScene( plane );
    }
    {
        auto plane = std::make_shared< Entity >();
        plane->updateTag( "ground 4" );
        plane->addComponent< MeshRenderer >( planeMesh, brickMat );
        plane->getTransform().setPosition( glm::vec3( 5, -2, 10 ) ).setScale( glm::vec3( 10, 1, 10 ) );
        plane->addComponent< BoxCollider >( glm::vec3( 5, 0, 5 ), 0 );

        addToScene( plane );
    }

    // 第二视角
    affiliated_actor = std::make_shared< Entity >( "affiliated_actor" );
    affiliated_actor->addComponent< OrthoCamera >( 10, 3, 0.05f, 1000.0f );
    affiliated_actor->getTransform().setPosition( glm::vec3( 0, 10, 0 ) );
    affiliated_actor->getTransform().setRotation( glm::vec3( 1, 0, 0 ), 180 );
    affiliated_actor->addComponent< PointLight >( glm::vec3( 1.0f, 1.0f, 1.0f ), 2.8f, std::make_shared< Attenuation >( 0, 0, 0.2 ) );
    addToScene( affiliated_actor );

    // 主角视角
    MeshLoader main_actor( "monkey3.obj" );
    main_actor.entity_creat( "monkey3", "monkey3.obj" );
    main_actor.getEntity()->addComponent< PerspectiveCamera >( glm::pi< float >() / 2.0f, getEngine()->getWindow()->getWidth() / ( float )getEngine()->getWindow()->getHeight(), 0.8f, 100.0f );
    main_actor.getEntity()->addComponent< FreeMove >();
    main_actor.getEntity()->addComponent< FreeLook >();
    main_actor.getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 5 ) ).setScale( glm::vec3( 0.8, 0.8, 0.8 ) );
    main_actor.getEntity()->addComponent< SpotLight >( glm::vec3( 1.0f, 1.0f, 1.0f ), 2.8f, 0.7f, std::make_shared< Attenuation >( 0, 0, 0.2 ) );
    addToScene( main_actor.getEntity() );
    // 期初
    init_model();
    //
    primary_camera = main_actor.getEntity()->getComponent< PerspectiveCamera >();
    top_camera     = affiliated_actor->getComponent< OrthoCamera >();

    getEngine()->getGLManager()->setActiveCamera( primary_camera );
}

void MainGame::render( GLManager* glManager )
{
    Game::render( glManager );
    /* from http 中的model构建 */
    create_model_in_render();
}
