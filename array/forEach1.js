const aprovados=  [ 'Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){ //  os parâmetros podem ser descritos como  nome, indece e array( são os padrões do forEach)
    console.log(indice+') '+nome )
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

