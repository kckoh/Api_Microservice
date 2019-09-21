FROM gitpod/workspace-mongodb

# Get the emsdk repo
RUN git clone https://github.com/emscripten-core/emsdk.git & cd emsdk & git pull & ./emsdk install latest & ./emsdk activate latest & source ./emsdk_env.sh

