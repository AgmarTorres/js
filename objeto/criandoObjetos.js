//usando a notação literal 
const obj1 = {}
console.log(obj1)


//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = {}
console.log( obj2)

//funções construtoras
function  Produto (nome,preco, desc){
    this.nome = nome; // this torna o atributo público
    this.getPrecoComDesconto = () =>{
        return preco * (1- desc)
    }
}

const p1 = new Produto('Caneta', 7.99,0.15)
const p2 = new Produto('Notebook',2998.99, 0.25)
console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 -faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7890, 4)
const f2 = criarFuncionario('Maria',800.99, 5)
console.log(f1.getSalario())
console.log(f2.getSalario())


//Object.create

const filha = Object.create(null)
filha.nome= 'Ana'
console.log(filha)

//Uma função famora que retorna Objeto

const fromJSON =  JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)