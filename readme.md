# WebAssembly Exercise

## Requirements

- Git
- Docker
- Docker Compose

## Getting Started

Clone the repository.

```sh
git clone git@github.com:vitor-mariano/webassembly-exercise.git
cd webassembly-exercise
```

Install the dependencies.

```sh
docker-compose run --rm web yarn
```

Run the development server.

```sh
docker-compose up
```

Now you can access the application typing `http://localhost:1234` in the browser.

## Development

You must enter the development container to have access to all commands from the development environment.

```sh
docker-compose run --rm web bash
```

### Compiling C and C++ files

Use the `yarn compile` command to generate wasm files from C or C++ files.

```sh
yarn compile [input file] -o [output file]
```

For example

```sh
yarn compile src/main.cpp -o src/compiled/main.wasm
```
