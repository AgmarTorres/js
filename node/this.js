console.log( this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função ...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
    this.perigo = '___' //rretorna para global

}

logThis()
this.perigo = '___' // acessando em modulo exports

//this aponta pra module.exports

