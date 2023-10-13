#
# reset
# clear
#
EMCC_AUTODEBUG=1
export dev_root="/Users/kevin.jiang/Dev/src/github-res/fm.engine.wasm"
export website="/Users/kevin.jiang/Dev/src/github-res/fm.engine.wasm/website"
export app_name="hmi"
#
mkdir -p $dev_root/bin-emscripten/apps/$app_name
#
emcmake cmake -B $dev_root/bin-emscripten/apps/$app_name -S ./apps/$app_name
#
cd $dev_root/bin-emscripten/apps/$app_name
#
make

# export website="/Users/kevin.jiang/Dev/src/github-res/fm.smk/website/apps/"
