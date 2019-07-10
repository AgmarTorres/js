const produtos = [
    {nome:'notebook', preco: 24999, fragil: true},
    {nome:'iPad Pro', preco: 1200, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de plástico', preco: 5.10, fragil: false}
]

console.log(produtos.filter(function(p){
return p.preco>  2400  
}))

console.log(produtos.filter(function(p){
    return (p.fragil == true && p.preco > 6)
}))


const caro  = produto => produto.preco >= 500

const fragil = produto=>produto.fragil 

console.log(produtos.filter(caro).filter(fragil))