//
//  Author: Shervin Aflatooni
//

#pragma once

#include "Input.h"
#include "settings.h"
#include <SDL.h>
#include <glm/glm.hpp>
#include <memory>
#include <string>

#if _WIN32
    // https://stackoverflow.com/questions/4845410/error-lnk2019-unresolved-external-symbol-main-referenced-in-function-tmainc
    #undef main
#endif

class GuiManager;

class Window
{
public:
    Window( void );
    ~Window( void );

    void init( void );

    void tick( void );
    void swapBuffer( void );
    int  poll_event( SDL_Event* event );

    int       getWidth( void ) const;
    int       getHeight( void ) const;
    glm::vec4 getViewport( void ) const;
    glm::vec2 getDisplaySize( void ) const;
    glm::vec2 getDrawableSize( void ) const;

    GuiManager* getGuiManager( void ) const;

    static const char* getClipboardText();
    static void        setClipboardText( const char* text );

    void makeCurrentContext( void ) const;

    Input*      getInput( void );
    SDL_Window* getSDLWindow( void );

    bool shouldQuit( void ) const;

    void drawCursor( bool enabled );

    void setFullscreen( uint32_t flag );
    void toggleFullscreen( void );
private:
    SDL_Window*                   m_window;
    SDL_GLContext                 m_glContext;
    std::unique_ptr< GuiManager > m_guiManager;

    int m_width, m_height;

    Input m_input;

    bool m_quit;
    bool m_fullscreen;
};
