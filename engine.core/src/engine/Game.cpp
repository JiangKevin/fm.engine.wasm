//
//  Author: Shervin Aflatooni
//

#include "Game.h"

Game::Game( void )
{
    this->rootScene = std::make_shared< Entity >();
    this->rootScene->updateTag( "root" );
}

Game::~Game( void ) {}

void Game::setEngine( Engine* engine )
{
    this->engine = engine;
}

Engine* Game::getEngine( void ) const
{
    return engine;
}

void Game::init( GLManager* glManager ) {}

void Game::addToScene( std::shared_ptr< Entity > entity )
{
    rootScene->addChild( entity );
}

void Game::update( Input* input, std::chrono::microseconds delta )
{
    rootScene->updateAll( input, delta );
}

void Game::render( GLManager* glManager )
{
    glManager->renderScene( rootScene.get() );
}
