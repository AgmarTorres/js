Array.prototype.forEach2 = function(callback){
    for(let i = 0; i<this.length; i++){
        callback(this[i],i, this)// valoratual, indice, array
    }
}


const aprovados=  [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){ //  os parâmetros podem ser descritos como  nome, indece e array( são os padrões do forEach)
    console.log(indice+') '+nome )
})

aprovados.forEach(function(nome, indice){ //  os parâmetros podem ser descritos como  nome, indece e array( são os padrões do forEach)
    console.log(indice+') '+nome )
})