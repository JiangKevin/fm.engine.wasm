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
}

void MainGame::init( GLManager* glManager )
{
    // 隐藏原生ui
    auto m_gui = getEngine()->getWindow()->getGuiManager();
    m_gui->togglePropertyEditor();
    // 获取输入
    auto input = getEngine()->getWindow()->getInput();
    input->registerKeyToAction( SDLK_SPACE, "fire" );
    input->registerKeyToAction( SDLK_c, "swapCamera" );

    input->registerKeysToAxis( SDLK_KP_4, SDLK_KP_6, -1.f, 1.f, "top_leftAndRight" );
    input->registerKeysToAxis( SDLK_KP_2, SDLK_KP_8, -1.f, 1.f, "top_upAndDown" );
    //
    input->bindAction( "fire", IE_PRESSED,
                       [ this ]()
                       {
                           MeshLoader cube( "cube.obj" );
                           cube.entity_creat( "cube", "cube.obj" );
                           cube.getEntity()->getTransform().setPosition( primary_camera->getParent()->getPosition() );
                           cube.getEntity()->addComponent< BoxCollider >( glm::vec3( 0.5, 0.5, 0.5 ), 50 );
                           addToScene( cube.getEntity() );
                           auto dir = primary_camera->getParent()->getDirection();
                           cube.getEntity()->getComponent< BoxCollider >()->applyCentralImpulse( glm::vec3( dir.x * 500.0f, dir.y * 500.0f, dir.z * 500.0f ) );
                       } );

    input->bindAction( "swapCamera", IE_PRESSED,
                       [ this ]()
                       {
                           topOrFront = ! topOrFront;
                       } );
    input->bindAxis( "top_leftAndRight",
                     [ this ]( float value )
                     {
                         debug( "adsfadsf %f", value );
                         m_top_lar_velocity = value;
                     } );
    input->bindAxis( "top_upAndDown",
                     [ this ]( float value )
                     {
                         m_top_uad_velocity = value;
                     } );
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
    /**/
    create_model();
}

void MainGame::init_model()
{
    add_model( "AncientUgandan", true, "obj" );
    add_model( "AncientUgandan", true, "obj" );
    add_model( "monkey", true, "obj" );
    add_model( "AncientUgandan", true, "obj" );
    add_model( "monkey", true, "obj" );
}
void MainGame::add_model( const std::string file, bool fromHttp, std::string extension )
{
    MeshLoader* ml = new MeshLoader( file, fromHttp, extension );

    mesh_model mm;
    mm._tag           = file + "-" + "HTTP-" + generate_uuid_v4();
    mm._meshcache_tag = "/temp/" + file + "/" + file + "." + extension;
    mm._ml            = ml;
    _model_array.push_back( mm );
}

void MainGame::create_model()
{
    for ( int i = 0; i < _model_array.size(); i++ )
    {
        if ( ( _model_array[ i ]._ml->is_load == true ) && ( _model_array[ i ]._ml->is_created == false ) )
        {
            _model_array[ i ]._ml->is_created = true;
            _model_array[ i ]._ml->entity_creat( _model_array[ i ]._tag, _model_array[ i ]._meshcache_tag, true );
            _model_array[ i ]._ml->getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 0 ) );
            _model_array[ i ]._ml->getEntity()->addComponent< SphereCollider >( 1, 1 );
            addToScene( _model_array[ i ]._ml->getEntity() );
        }
    }
}