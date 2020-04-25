import myModule, {
  get_sqrt as getSqrt,
  get_message as getMessage,
} from "./compiled/main.wasm";

const memory = new Uint8Array(myModule.memory.buffer);

console.log("getSqrt(3): ", getSqrt(3));

console.log("getMessage(): char* ", getMessage());

let message = "";

for (let index = getMessage(); memory[index]; index++) {
  message += String.fromCharCode(memory[index]);
}

console.log("getMessage() dereference: ", message);
