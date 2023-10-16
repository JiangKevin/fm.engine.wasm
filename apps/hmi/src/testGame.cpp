#include "testGame.h"
#include "fm/uuid_generate.h"
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>
#include <vector>
using namespace uuid;
//
void TestGame::update( Input* input, std::chrono::microseconds delta )
{
    Game::update( input, delta );
}

void TestGame::init( GLManager* glManager )
{
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
    //
    MeshLoader money2( "AncientUgandan.obj" );
    money2.entity_creat( "AncientUgandan", "AncientUgandan.obj" );
    money2.getEntity()->addComponent< PerspectiveCamera >( glm::pi< float >() / 2.0f, getEngine()->getWindow()->getWidth() / ( float )getEngine()->getWindow()->getHeight(), 0.8f, 100.0f );
    money2.getEntity()->addComponent< FreeMove >();
    money2.getEntity()->addComponent< FreeLook >();
    money2.getEntity()->getTransform().setPosition( glm::vec3( 0, 0, 5 ) ).setScale( glm::vec3( 0.8, 0.8, 0.8 ) );
    money2.getEntity()->addComponent< SpotLight >( glm::vec3( 1.0f, 1.0f, 1.0f ), 2.8f, 0.7f, std::make_shared< Attenuation >( 0, 0, 0.2 ) );
    addToScene( money2.getEntity() );
    //
    init_model();

    //
    primary_camera = money2.getEntity()->getComponent< PerspectiveCamera >();
    getEngine()->getGLManager()->setActiveCamera( primary_camera );
}

void TestGame::render( GLManager* glManager )
{
    Game::render( glManager );
    //
    for ( int i = 0; i < _model_array.size(); i++ )
    {
        // debug( "Render i= %d ,is_load = %d ,is_created= %d", i, _model_array[ i ]._ml->is_load, _model_array[ i ]._ml->is_created );
        if ( ( _model_array[ i ]._ml->is_load == true ) && ( _model_array[ i ]._ml->is_created == false ) )
        {
            _model_array[ i ]._ml->is_created == true;
            _model_array[ i ]._ml->entity_creat( _model_array[ i ]._tag, _model_array[ i ]._meshcache_tag, true );
            addToScene( _model_array[ i ]._ml->getEntity() );
        }
        // debug( "Render i= %d ,is_load = %d ,is_created= %d", i, _model_array[ i ]._ml->is_load, _model_array[ i ]._ml->is_created );
    }
}

void TestGame::init_model()
{
    add_model( "AncientUgandan", true, "obj" );
    add_model( "AncientUgandan", true, "obj" );
    add_model( "monkey", true, "obj" );
    add_model( "AncientUgandan", true, "obj" );
    add_model( "monkey", true, "obj" );
}
void TestGame::add_model( const std::string file, bool fromHttp, std::string extension )
{
    // auto       ml = make_shared< MeshLoader >( file, fromHttp, extension );
    MeshLoader* ml = new MeshLoader( file, fromHttp, extension );

    mesh_model mm;
    mm._tag           = file + "-" + "HTTP-" + generate_uuid_v4();
    mm._meshcache_tag = "/temp/" + file + "/" + file + "." + extension;
    mm._ml            = ml;
    _model_array.push_back( mm );
}