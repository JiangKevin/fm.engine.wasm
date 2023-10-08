#!/bin/bash
#
# reset
# clear
#
set -e

BUILD_TYPE=${BUILD_TYPE:-Release}
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mkdir -p $DIR/bin-emscripten
mkdir -p $DIR/bin-emscripten/bin/
cp $DIR/engine.core/src/example/html/index.html $DIR/bin-emscripten/bin/
#

emcmake cmake -DCMAKE_BUILD_TYPE=$BUILD_TYPE -S $DIR/engine.core -B $DIR/bin-emscripten
# 
cd $DIR/bin-emscripten
make
