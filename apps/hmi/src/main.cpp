#include "coolGame.h"
#include "test.h"
//
int main( int argc, char* argv[] )
{
    testGame game;
    Engine   gameEngine( &game );

    gameEngine.start();

    return 0;
}
