class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }

}

class cicloFincanceiro{
    constructor(mes,ano){
        this.mes =mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach( l => this.lancamentos.push(l))
        
    }
    sumario(){
        let valorconsolidado = 0
        this.lancamentos.forEach(l=>{
            valorconsolidado += l.valor
        })
        return valorconsolidado
    }
}

const salario =  new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)

const contas =  new cicloFincanceiro(6,2018)
contas.addLancamentos(salario,contaDeLuz)
console.log(contas.sumario())