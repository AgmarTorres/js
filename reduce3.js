Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    
    for(let i = 1; i < this.length; i++){
       // console.log(i)    
        acumulador = callback(acumulador, this[i] , i, this)
    }
  
    return acumulador
}

function soma(valor,total){
    
    return  total+valor;
    
}
const nums= [1,2,3,4,5,6]
console.log(nums.reduce2(soma))
