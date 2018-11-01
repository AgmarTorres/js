function area(largura, altura){
    const area = largura + altura;
    if(area > 20){
        console.log(`Valor acima do permitido: ${area} m2.`);
    }else{
        return area
    }
}


console.log(area(10,10))
console.log(area(10,12))
console.log(area())
console.log(area(10))
console.log(area(10,10,11,20))
console.log(area(5,5))




