cmake_minimum_required(VERSION 3.11)

project($ENV{app_name}
  LANGUAGES CXX
  VERSION 1.0.0
)
set(CMAKE_CXX_STANDARD 14)
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
  ${CMAKE_SOURCE_DIR}/src/*.cpp
)

#
add_executable($ENV{app_name} ${app_src})

#
# INCLUDE
target_include_directories($ENV{app_name} PUBLIC
  $ENV{dev_root}/engine.core/src/engine
  $ENV{dev_root}/engine.core/src/engine/components

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
)

#
SET(CMAKE_CXX_FLAGS "-s USE_SDL=2 -std=c++14 -O3 -s USE_GLFW=3")

# link flag
set(CMAKE_EXE_LINKER_FLAGS
  ${CMAKE_EXE_LINKER_FLAGS} "--preload-file $ENV{dev_root}/apps/hmi/assets@assets --emrun"
)
add_definitions(-DASSET_DIR="assets/")
add_definitions(-DEMSCRIPTEN)
# DEFINE
target_compile_definitions($ENV{app_name} PUBLIC
  EMSCRIPTEN
)

# set_property(DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR} PROPERTY VS_STARTUP_PROJECT $ENV{app_name})
#
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
)

#
add_custom_command(TARGET $ENV{app_name} PRE_BUILD
  COMMAND ${CMAKE_COMMAND} -E copy_directory
  ${CMAKE_CURRENT_SOURCE_DIR}/assets
  $<TARGET_FILE_DIR:$ENV{app_name}>/assets
)