const pessoa={
    nome: 'Rebeca',
    idade: 2,
    peso: 12
}

console.log(Object.keys(pessoa))

console.log(Object.values(pessoa))

console.log(Object.entries(pessoa))//item por array
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]} : ${element[1]}`)
});

Object.entries(pessoa).forEach( ([chave, valor]) => { //destructering
    console.log(`${chave} : ${valor}`)
});


Object.defineProperty(pessoa, 'dataNascimento',{//qual entidade, nome do atributo que será criado
    enumerable: true,
    writable:false,
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '02/02/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object. assign (ECMANScript 2015)
const dest = {a : 1 }
const o1 = {b : 2 }
const o2 = {c : 3, a:4 }
const obj = Object.assign(dest, o1,o2) // um objeto com a concatenação de outros objestos

console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)

