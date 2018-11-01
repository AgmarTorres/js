let dobro =  function (a){
    return 2 * a
}

//arrow sempre é anonima
dobro = (a) =>{
    return 2 * a
}


dobro = a => 2 * a //return está implicito

console.log(dobro(Math.PI));

let ola = function(){
    return 'olá'
}

ola = () => 'Olá'

ola = _ =>'Olá'

console.log(ola())
