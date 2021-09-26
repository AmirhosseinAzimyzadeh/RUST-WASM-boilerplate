use wasm_bindgen::prelude::wasm_bindgen;
extern crate wasm_bindgen;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(message: &str);
}

// add this annotation to make sure that
// this function is available to the index.js
#[wasm_bindgen]
pub fn hello_from_rust() {
    log("hello from rust file !");
}
