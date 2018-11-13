function criarProduto(nome ,  preco){
    const desconto = 0.05
    return {
        nome:`${nome}`,
        preco:`${preco}`
    }
}
function criarProduto2(nome ,  preco){
    const desconto = 0.05
    return {
        nome,
        preco,
        desconto
    }
}
const prod1 = criarProduto('Coca-cola', 5)
console.log(prod1)

const prod2 = criarProduto('Coca-cola', 5)
console.log(prod2)