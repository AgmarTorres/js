const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10: //utiliza o console.log para quando nota for igual a 10 e 9
        case 9:
            console.log('Quadro de honra')
            break;
        case 8:
        case 7:
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')
            break;
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')
                break;
            default:
                console.log('Nota inválida')  //default pode ficar em qualquer lugar, mas tem que ser adicionado o break;
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)