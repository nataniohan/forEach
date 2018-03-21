const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice){
    console.log(`${nome}. ${indice+1}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))