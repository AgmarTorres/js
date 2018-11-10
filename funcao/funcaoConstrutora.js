function Carro(velocidadeMaxima = 200, delta = 50){
    //atributo privado
    let velocidade = 0
    //método publico
    this.acelerar = function(){
        if ( velocidade + delta <= velocidadeMaxima){
            velocidade += delta
        }else{
            velocidade = velocidadeMaxima
        }
    }

    //método public
    this.getVelocidadeAtual = function(){
        return velocidade;
    }

}

const car = new Carro()
car.acelerar()
console.log(car.getVelocidadeAtual())

const ferrari= new Carro(350, 200)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)

console.log(typeof ferrari)
