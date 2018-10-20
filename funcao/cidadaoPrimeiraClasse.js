// Função em JS é First-Class Object (Citizens)
//Highter-order function

//criar em forma literal
//bloco ada função é obrigatório
function fun1(){
}

//função anônima e armazenando em uma constante
const fun2 = function(){}

//Armazenar em uma variável
const array = [function(a,b){return a+b; }, fun1, fun2]

console.log(array[0](2,3));

//Armazenar em atributo de objeto
const obj= {}
obj.falar = function() {  return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
    fun()
}

run(function(){ console.log("Executando ...")})

// Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)