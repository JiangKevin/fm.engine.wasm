cmake_minimum_required(VERSION 3.11)

project($ENV{app_name}
  LANGUAGES CXX
  VERSION 1.0.0
)
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY $ENV{dev_root}/outLibs)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY $ENV{dev_root}/outLibs)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY $ENV{website}/$ENV{app_name})

#
if(EMSCRIPTEN)
  # Copy the index.html file.
  configure_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/html/index.html
    $ENV{website}/$ENV{app_name}/index.html
    COPYONLY
  )
  configure_file(
    ${CMAKE_CURRENT_SOURCE_DIR}/html/gtag.js
    $ENV{website}/$ENV{app_name}/gtag.js
    COPYONLY
  )
endif()

# app source
file(GLOB app_src
  ${CMAKE_CURRENT_SOURCE_DIR}/src/*.cpp
)

#
# add_subdirectory(dependencies/minizip-ng)

# build wasm
add_executable($ENV{app_name}
  ${app_src}
)

#
SET(CMAKE_CXX_FLAGS "-s USE_SDL=2 -std=c++14 -O3")

# link flag
# --memoryprofiler
set(CMAKE_EXE_LINKER_FLAGS
  ${CMAKE_EXE_LINKER_FLAGS} "--preload-file $ENV{dev_root}/apps/hmi/assets@assets --emrun -s TOTAL_MEMORY=2048MB -s INITIAL_MEMORY=1024MB -s USE_ICU=1 -s USE_ZLIB=1 -s USE_SQLITE3=1 -l GLEW -l idbfs.js -l websocket.js -s USE_SDL=2 -s ALLOW_MEMORY_GROWTH=1 -s FETCH=1 -l embind -s FULL_ES2=1  -s FULL_ES3=1  -s USE_GLFW=3 -sSTACK_SIZE=200MB -s DEMANGLE_SUPPORT=1 -s STACK_OVERFLOW_CHECK=1"
)
# add_definitions(-DASSET_DIR="assets/")
add_definitions(-DEMSCRIPTEN)

# DEFINE
target_compile_definitions($ENV{app_name} PUBLIC
  EMSCRIPTEN
)

#
# INCLUDE
target_include_directories($ENV{app_name} PUBLIC
  $ENV{dev_root}/apps/$ENV{app_name}/src

  #
  $ENV{dev_root}/engine.core/src/engine
  $ENV{dev_root}/engine.core/src/engine/components
  $ENV{dev_root}/engine.core/src/engine/fm

  # glm
  $ENV{dev_root}/engine.core/dependencies/glm
  $ENV{dev_root}/engine.core/dependencies/glm/glm
  $ENV{dev_root}/engine.core/dependencies/glm/glm/detail
  $ENV{dev_root}/engine.core/dependencies/glm/glm/gtc
  $ENV{dev_root}/engine.core/dependencies/glm/glm/gtx

  # bullet3
  $ENV{dev_root}/engine.core/dependencies/bullet3/src

  # assimp
  $ENV{dev_root}/engine.core/dependencies/assimp/code
  $ENV{dev_root}/engine.core/dependencies/assimp/include

  # imgui
  $ENV{dev_root}/engine.core/dependencies/imgui

  # minizip-ng
  $ENV{dev_root}/engine.core/dependencies/minizip-ng
)

#
# target_link_libraries($ENV{app_name} PRIVATE MINIZIP::minizip)
target_link_libraries($ENV{app_name} PUBLIC

  # engine
  $ENV{dev_root}/outLibs/libengine.a

  # imgui
  $ENV{dev_root}/outLibs/libimgui.a

  # assimp
  $ENV{dev_root}/outLibs/libassimp.a

  #
  $ENV{dev_root}/outLibs/libBulletCollision.a
  $ENV{dev_root}/outLibs/libBulletDynamics.a
  $ENV{dev_root}/outLibs/libBulletFileLoader.a
  $ENV{dev_root}/outLibs/libBulletSoftBody.a
  $ENV{dev_root}/outLibs/libBulletWorldImporter.a
  $ENV{dev_root}/outLibs/libBulletXmlWorldImporter.a
  $ENV{dev_root}/outLibs/libConvexDecomposition.a
  $ENV{dev_root}/outLibs/libGIMPACTUtils.a
  $ENV{dev_root}/outLibs/libHACD.a
  $ENV{dev_root}/outLibs/libLinearMath.a
  $ENV{dev_root}/outLibs/libminizip.a
)

# #
# add_custom_command(TARGET $ENV{app_name} PRE_BUILD
#   COMMAND ${CMAKE_COMMAND} -E copy_directory
#   ${CMAKE_CURRENT_SOURCE_DIR}/assets
#   $<TARGET_FILE_DIR:$ENV{app_name}>/assets
# )