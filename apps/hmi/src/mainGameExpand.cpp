#include "fm/uuid_generate.h"
#include "mainGame.h"
#include <assimp/postprocess.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>
#include <vector>
using namespace uuid;
using namespace std;
/**/
void MainGame::init_model()
{
    add_model( "AncientUgandan", true, "obj" );
    add_model( "AncientUgandan", true, "obj" );
    add_model( "monkey", true, "obj" );
    add_model( "AncientUgandan", true, "obj" );
    add_model( "monkey", true, "obj" );
    //
    int fbx_flags = aiProcess_CalcTangentSpace | aiProcess_GenNormals | aiProcess_Triangulate | aiProcess_SortByPType;
    add_model( "cgaxr", true, "fbx", fbx_flags );
}
/**/
void MainGame::init_input()
{
    // 隐藏原生ui
    _native_ui = getEngine()->getWindow()->getGuiManager();
    _native_ui->togglePropertyEditor();
    // 获取输入
    _input = getEngine()->getWindow()->getInput();
    _input->registerKeyToAction( SDLK_SPACE, "fire" );
    _input->registerKeyToAction( SDLK_c, "swapCamera" );

    _input->registerKeysToAxis( SDLK_KP_4, SDLK_KP_6, -0.1f, 0.1f, "top_leftAndRight" );
    _input->registerKeysToAxis( SDLK_KP_2, SDLK_KP_8, -0.1f, 0.1f, "top_upAndDown" );
    _input->registerKeyToAction( SDLK_KP_PLUS, "zoom_plus" );
    _input->registerKeyToAction( SDLK_KP_MINUS, "zoom_minus" );
    //
    _input->bindAction( "fire", IE_PRESSED,
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

    _input->bindAction( "swapCamera", IE_PRESSED,
                        [ this ]()
                        {
                            topOrFront = ! topOrFront;
                        } );
    _input->bindAxis( "top_leftAndRight",
                      [ this ]( float value )
                      {
                          m_top_lar_velocity = value;
                      } );
    _input->bindAxis( "top_upAndDown",
                      [ this ]( float value )
                      {
                          m_top_uad_velocity = value;
                      } );

    _input->bindAction( "zoom_plus", IE_PRESSED,
                        [ this ]()
                        {
                            if ( m_top_pam_velocity > 1 )
                            {
                                is_zoom = true;
                                m_top_pam_velocity += 1.0f;
                            }
                        } );
    _input->bindAction( "zoom_minus", IE_PRESSED,
                        [ this ]()
                        {
                            if ( m_top_pam_velocity > 2 )
                            {
                                is_zoom = true;
                                m_top_pam_velocity -= 1.0f;
                            }
                        } );
    _input->bindAction( "zoom_minus", IE_RELEASED,
                        [ this ]()
                        {
                            is_zoom = false;
                        } );
}

/**/
void MainGame::add_model( const std::string file, bool fromHttp, std::string extension, int optimizeFlags )
{
    MeshLoader* ml = new MeshLoader( file, fromHttp, extension, optimizeFlags );

    mesh_model mm;
    mm._tag           = file + "-" + "HTTP-" + generate_uuid_v4();
    mm._meshcache_tag = "/temp/" + file + "/" + file + "." + extension;
    mm._ml            = ml;
    _model_array.push_back( mm );
}
/**/
void MainGame::create_model_in_render()
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
/**/
void MainGame::execution_input_in_update()
{
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
/**/
void MainGame::init_template_game_element()
{
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

    // 初始化相机
    primary_camera = main_actor.getEntity()->getComponent< PerspectiveCamera >();
    top_camera     = affiliated_actor->getComponent< OrthoCamera >();
    // 切换至默认相机
    getEngine()->getGLManager()->setActiveCamera( primary_camera );
}