
const ferrari = { 
    modelo: 'F40',
    velmax: 324
}

const volvo = {
    modelo: 'v40',
    velMax:200
}

console.log(ferrari.__proto__)//retorna o atributo do pai caso exista

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)// forma de acessar o objeto global

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto)

console.log(Object.prototype, MeuObjeto.prototype)
