Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0 ; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray;
}

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

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)
