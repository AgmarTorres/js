//par nome/valor

const saudacao =  'Opa'// contexto léxico

function exec(){
    const saudacao  = 'Fallaaaaa'//contexto lexico 2
    return saudacao
}

//Objetos são grupos aninahados de pares nome/valor

const cliente = {
     nome:'Pdro',
     idade: 32,
     peso:90,
     endereco:{
         logradouro: 'Rua Muito Legal',
         numero: 123
     }
}

console.log(saudacao)
console.log(exec())

