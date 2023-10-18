#include "fm/uuid_generate.h"
#include "mainGame.h"
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
void MainGame::add_model( const std::string file, bool fromHttp, std::string extension )
{
    MeshLoader* ml = new MeshLoader( file, fromHttp, extension );

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