#include "coolGame.h"
#include "mainGame.h"
//
int main( int argc, char* argv[] )
{
    // CoolGame game;
    MainGame game;
    Engine   gameEngine( &game );

    gameEngine.start();

    return 0;
}
