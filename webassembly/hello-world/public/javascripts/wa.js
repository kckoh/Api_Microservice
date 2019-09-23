let add;
function loadwasm(filename){
    return fetch(filename)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then (module => {return new WebAssembly.Instance(module) } )
}

loadwasm('test.wasm')
.then(instance => {
    add = instance.exports._Z3addii
})