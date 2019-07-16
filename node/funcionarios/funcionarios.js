const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios')

const filtrarChines = f => f.pais ==='China'

const filtrarMulheres = f => f.genero === 'F'
const filtrarSalarios = (funcionario, funcionarioAtual) =>{
  //  console.log(funcionario)
    return funcionario.salario < funcionarioAtual.salario ? funcionario :funcionarioAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    const func = funcionarios.filter(filtrarChines)
    .filter(filtrarMulheres)
    .reduce(filtrarSalarios)
    console.log(func)
})


  
  //var filtered = funcionarios.filter(isBigEnough);