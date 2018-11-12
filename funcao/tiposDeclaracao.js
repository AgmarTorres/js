console.log(soma(3,4)) // vai funcionar
//console.log(sub(3, 4)) Vai da erro
//console.log(mult(1, 2)) vai da erro
//function declaration
function soma(x, y){
    return x + y;
}

//function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3,4))

// named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(1, 2))

