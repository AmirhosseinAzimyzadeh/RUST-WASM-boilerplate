console.log("RUST - WASM");

const rustProgram = import('./pkg/index.js');

rustProgram
  .then((c) => { c.hello_from_rust(); })
  .catch(console.error);