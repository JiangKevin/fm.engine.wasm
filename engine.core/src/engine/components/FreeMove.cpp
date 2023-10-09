//
//  Author: Shervin Aflatooni
//

#include "FreeMove.h"
#include "../Engine.h"
#include "../Transform.h"

FreeMove::FreeMove( bool moveForwards, float speed )
{
    m_speed            = speed;
    m_moveForwards     = moveForwards;
    m_sprinting        = false;
    m_forwardsVelocity = 0;
    m_strafeVelocity   = 0;
    m_rotateVelocity   = 0;

    setProperty( "speed", FLOAT, &m_speed, 0, 20 );
    setProperty( "forwards velocity", FLOAT, &m_forwardsVelocity, -1, 1 );
    setProperty( "strafe velocity", FLOAT, &m_strafeVelocity, -1, 1 );
    setProperty( "ratate velocity", FLOAT, &m_rotateVelocity, -1, 1 );
    setProperty( "forwards", BOOLEAN, &m_moveForwards );
    setProperty( "sprinting", BOOLEAN, &m_sprinting );
}

FreeMove::~FreeMove( void ) {}

void FreeMove::registerWithEngine( Engine* engine )
{
    auto input = engine->getWindow()->getInput();
    input->registerKeyToAction( SDLK_LSHIFT, "sprint" );
    input->registerKeyToAction( SDLK_f, "switch_move" );
    input->registerKeysToAxis( SDLK_w, SDLK_s, -1.f, 1.f, "forwards" );
    input->registerKeysToAxis( SDLK_a, SDLK_d, -1.f, 1.f, "strafe" );
    input->registerKeysToAxis( SDLK_LEFT, SDLK_RIGHT, -1.f, 1.f, "rotates" );
    input->bindAction( "switch_move", IE_PRESSED,
                       [ this ]()
                       {
                           m_moveForwards = ! m_moveForwards;
                       } );
    input->bindAction( "sprint", IE_PRESSED,
                       [ this ]()
                       {
                           m_sprinting = true;
                       } );
    input->bindAction( "sprint", IE_RELEASED,
                       [ this ]()
                       {
                           m_sprinting = false;
                       } );

    input->bindAxis( "forwards",
                     [ this ]( float value )
                     {
                         m_forwardsVelocity = value;
                     } );
    input->bindAxis( "strafe",
                     [ this ]( float value )
                     {
                         m_strafeVelocity = value;
                     } );
    input->bindAxis( "rotates",
                     [ this ]( float value )
                     {
                         m_rotateVelocity = value;
                     } );
}

void FreeMove::deregisterFromEngine( Engine* engine )
{
    auto input = engine->getWindow()->getInput();
    input->unbindAction( "sprint" );
    input->unbindAction( "switch_move" );
    input->unbindAxis( "forwards" );
    input->unbindAxis( "strafe" );
    input->unbindAxis( "rotates" );
}

void FreeMove::update( Input* input, std::chrono::microseconds delta )
{
    float moveAmount = m_speed * std::chrono::duration_cast< std::chrono::duration< float > >( delta ).count();

    if ( m_sprinting )
    {
        moveAmount *= 4.0f;
    }

    if ( m_forwardsVelocity != 0 )
    {
        if ( m_moveForwards )
        {
            Move( glm::rotate( m_parentEntity->getTransform().getRotation(), glm::vec3( 0.0f, 0.0f, m_forwardsVelocity ) ), moveAmount );
        }
        else
        {
            Move( glm::rotate( m_parentEntity->getTransform().getRotation(), glm::vec3( 0.0f, m_forwardsVelocity, 0.0f ) ), moveAmount );
        }
    }

    if ( m_strafeVelocity != 0 )
    {
        Move( glm::rotate( m_parentEntity->getTransform().getRotation(), glm::vec3( m_strafeVelocity, 0.0f, 0.0f ) ), moveAmount );
    }

    if ( m_rotateVelocity != 0 )
    {
        m_parentEntity->getTransform().setRotation( glm::angleAxis( -m_rotateVelocity * moveAmount, glm::vec3( 0, 1, 0 ) ) * m_parentEntity->getTransform().getRotation() );
    }
}

void FreeMove::Move( const glm::vec3& direction, float amount )
{
    m_parentEntity->getTransform().translate( direction * amount );
}
