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
#  -DMZ_BZIP2=OFF
emcmake cmake -DCMAKE_BUILD_TYPE=$BUILD_TYPE -S $DIR/engine.core -B $DIR/bin-emscripten -DMZ_FETCH_LIBS=ON -DMZ_LZMA=OFF -DMZ_ZSTD=OFF -DMZ_OPENSSL=OFF -DMZ_BZIP2=OFF -DTIDY_COUNT=60
# 
cd $DIR/bin-emscripten
make
