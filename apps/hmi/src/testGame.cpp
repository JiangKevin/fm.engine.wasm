#include "testGame.h"
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>
#include <vector>
//
void TestGame::update( Input* input, std::chrono::microseconds delta )
{
    Game::update( input, delta );
}

void TestGame::init( GLManager* glManager )
{

    char  cwd[ 100 ];
    char* ret;
    // chdir( "assets" );
    mkdir( "temp", 0777 );
    ret = getcwd( cwd, sizeof( cwd ) );
    assert( ret == cwd );
    log_info( "Current working dir: %s", cwd );

    // 隐藏原生ui
    auto m_gui = getEngine()->getWindow()->getGuiManager();
    m_gui->togglePropertyEditor();
    // 获取输入
    auto input = getEngine()->getWindow()->getInput();
    //
    auto brickMat  = std::make_shared< Material >( std::make_shared< Texture >( Asset( "bricks2.jpg" ) ), std::make_shared< Texture >( Asset( "bricks2_normal.jpg" ) ), std::make_shared< Texture >( Asset( "bricks2_specular.png" ) ) );
    auto planeMesh = Plane::getMesh();
    // ground
    {
        auto plane = std::make_shared< Entity >();
        plane->updateTag( "ground 1" );
        plane->addComponent< MeshRenderer >( planeMesh, brickMat );
        plane->getTransform().setPosition( glm::vec3( -5, -2, 0 ) ).setScale( glm::vec3( 10, 1, 10 ) );
        plane->addComponent< BoxCollider >( glm::vec3( 5, 0, 5 ), 0 );
        addToScene( plane );
    }
    {
        auto plane = std::make_shared< Entity >();
        plane->updateTag( "ground 2" );
        plane->addComponent< MeshRenderer >( planeMesh, brickMat );
        plane->getTransform().setPosition( glm::vec3( 5, -2, 0 ) ).setScale( glm::vec3( 10, 1, 10 ) );
        plane->addComponent< BoxCollider >( glm::vec3( 5, 0, 5 ), 0 );
        addToScene( plane );
    }
    //
    MeshLoader money( "monkey", true, this, "obj" );
    // money.getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 8 ) );
    // money.getEntity()->addComponent< PerspectiveCamera >( glm::pi< float >() / 2.0f, getEngine()->getWindow()->getWidth() / ( float )getEngine()->getWindow()->getHeight(), 0.05f, 100.0f );
    // money.getEntity()->addComponent< SphereCollider >( 1, 1 );
    // addToScene( money.getEntity() );
    // MeshLoader money5( "monkey", true, this, "obj" );
    //
    MeshLoader money2( "AncientUgandan.obj" );
    money2.getEntity()->addComponent< PerspectiveCamera >( glm::pi< float >() / 2.0f, getEngine()->getWindow()->getWidth() / ( float )getEngine()->getWindow()->getHeight(), 0.8f, 100.0f );
    money2.getEntity()->addComponent< FreeMove >();
    money2.getEntity()->addComponent< FreeLook >();
    // money2.getEntity()->addComponent< SphereCollider >( 1, 1 );
    money2.getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 5 ) ).setScale( glm::vec3( 0.8, 0.8, 0.8 ) );
    money2.getEntity()->addComponent< SpotLight >( glm::vec3( 1.0f, 1.0f, 1.0f ), 2.8f, 0.7f, std::make_shared< Attenuation >( 0, 0, 0.2 ) );
    addToScene( money2.getEntity() );

    primary_camera = money2.getEntity()->getComponent< PerspectiveCamera >();
    getEngine()->getGLManager()->setActiveCamera( primary_camera );
}
