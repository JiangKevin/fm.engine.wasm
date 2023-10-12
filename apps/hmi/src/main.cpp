#include "coolGame.h"
#include "testGame.h"
//
int main( int argc, char* argv[] )
{
    TestGame game;
    Engine   gameEngine( &game );

    gameEngine.start();

    return 0;
}
