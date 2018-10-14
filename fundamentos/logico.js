function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1|| trabalho2
    const comprarTV = trabalho1 && trabalho2
    //const comprar32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarSegTV32 = trabalho1 != trabalho2 //xor
    const manterSaudavel = !comprarSorvete //operador uniário
    return {comprarSorvete,comprarTV,comprarSegTV32,manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))