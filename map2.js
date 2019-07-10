const carrinho = [ '{ "nome": "Borracha", "preco": 3.45}', 
                    '{ "nome": "Caderno", "preco": 3.45}', 
                    '{ "nome": "Kit de Lápis", "preco": 3.45}', 
                    '{ "nome": "Caneta", "preco": 3.45}'
                ]

let preco = []
// Retornar um array apenas com os precos
for (var i = 0; i < carrinho.length; i++) {
    var counter = carrinho[i];
    preco.push((JSON.parse(carrinho[i])).nome)
    console.log((JSON.parse(carrinho[i])).nome);
}
console.log(preco)

const paraObjeto = json => JSON.parse(json)// converte o texto em objeto
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
