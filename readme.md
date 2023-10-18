# Engine

zsh ./engine.core/scripts/cmake-emscripten.sh

# Apps

zsh apps/hmi/make.sh

# Website

python3 host.py

# log
修改(engine.core/CMakeLists.txt)的add_definitions(-DDEBUG)设置项
add_definitions(-DASSIMP_BUILD_DEBUG)
