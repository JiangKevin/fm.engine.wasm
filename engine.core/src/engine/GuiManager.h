//
//  Author: Shervin Aflatooni
//

#pragma once

#include "Entity.h"
#include "Window.h"
#include <chrono>
#include <imgui.h>

class GuiManager
{
public:
    GuiManager( const glm::vec2& drawableSize, const glm::vec2& displaySize, SDL_Window* sdlWindow );
    ~GuiManager( void );

    void render( Entity* sceneGraph );
    void tick( Window* window, std::chrono::microseconds delta );

    void addInputCharactersUTF8( const char* text );
    void setKeyEvent( int key, bool keydown );

    void togglePropertyEditor( void );
private:
    void        createDeviceObjects( void );
    void        invalidateDeviceObjects( void );
    static void renderDrawLists( ImDrawData* draw_data );

    bool showProps;

    SDL_Window* m_sdlWindow;
    //
    int width, height;
};
