//Json é interoperabilidade entre sistemas


const obj = {a: 1, b: 2, c: 3, soma() {return a + b +c}}
console.log(JSON.stringify(obj)) // não armazena funções

//console.log(JSON.parse("{a: 1, b: 2, c: 3"))// erro de aspas
//console.log(JSON.parse("'a': 1, 'b':2")) os objetos no JSON TEM QUE SER aspas duplas se não vai dar erro
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []}'))
