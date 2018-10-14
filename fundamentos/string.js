const escola = "Cod3r"

console.log(escola.charAt(4))// resposta retorna a letra r

console.log(escola.charCodeAt(3))// pega o número da tabela ASCII

console.log(escola.indexOf(3));//qual indice o valor está


console.log(escola.substring(1))// a partir do indice 1 até o final

console.log(escola.substring(1,3))// do indice 1 ao 2

console.log('Escola '.concat(escola).concat("!"))

console.log(escola.replace(/\d/,'e'))// expressão regular, substitui todos os digitos 3 epla letra 'e'

console.log('Ana,Maria,Pedro'.split(','))//converte um estrutura para um array