#include "coolGame.h"
// 
int main( int argc, char* argv[] )
{
    CoolGame game;
    Engine   gameEngine( &game );

    gameEngine.start();

    return 0;
}
