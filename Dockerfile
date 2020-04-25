FROM node:latest

WORKDIR /home/node/app

ADD . ./

RUN yarn

RUN cd .. && \
    git clone https://github.com/emscripten-core/emsdk.git && \
    cd emsdk && \
    ./emsdk install latest && \
    ./emsdk activate latest && \
    echo "PATH=\"\$PATH:/home/node/emsdk:/home/node/emsdk/upstream/emscripten\"" >> /etc/bash.bashrc && \
    cd ../app
