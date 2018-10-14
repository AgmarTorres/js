// Função é um bloco de código nomeado, recebe parâmetros de entrada

//função sem retorno
function imprimiSoma(a, b){
    console.log(a+b)
}

imprimiSoma(1,2)

imprimiSoma(1)
imprimiSoma(1,2,3,4,5,6)

//Função com retorno

function Soma(a = 1,b = 1 ){// se  não passar nada ele vai assumir o valor de 1
    return a+b;
}

console.log(Soma(2,3));