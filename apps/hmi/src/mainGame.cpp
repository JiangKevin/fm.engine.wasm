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
    /**/
    Game::update( input, delta );
    /**/
    execution_input_in_update();
}

void MainGame::init( GLManager* glManager )
{
    /* 期初原生ui与input */
    init_input();
    /* 期初模板元素 */
    init_template_game_element();
    /* 期初http 模型 */
    init_model();
}

void MainGame::render( GLManager* glManager )
{
    Game::render( glManager );
    /* from http 中的model构建 */
    create_model_in_render();
}
