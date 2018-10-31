let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this=== param) // this continua apontando para um afunção global?
comparaComThisArrow(global) // não é global em um arraow function
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow(obj) // bind vence arrow function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

