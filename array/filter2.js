Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0 ; i< this.length; i++){
        if(callback(this[i],i, this)){
            newArray.push(this[i])
        }
    }
    return newArray;   
}

const produtos = [
    {nome:'notebook', preco: 24999, fragil: true},
    {nome:'iPad Pro', preco: 1200, fragil: true},
    {nome:'Copo de Vidro', preco: 12.49, fragil: true},
    {nome:'Copo de plástico', preco: 5.10, fragil: false}
]
/*
console.log(produtos.filter2(function(p){
return p.preco>  2400  
}))

console.log(produtos.filter2(function(p){
    return (p.fragil == true && p.preco > 6)
}))
*/

const caro  = produto => produto.preco >= 500

const fragil = produto=>produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))