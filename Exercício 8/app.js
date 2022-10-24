// Para exercitarmos rest e repetições com vetores:

// Em um arquivo app.js incluído em index.html escreva uma função arrow e armazene-a em uma variável de nome uneDobraRetorna, que aceita um array de números e qualquer outra quantidade de números como parâmetro. A função deve retornar um novo vetor que começa com o vetor inicial concatenado com os outros parâmetros extra dobrados de valor.

// Exemplo:

// const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
// console.log(r1) // [1, 2, 3, 8, 8]

// const r2 = uneDobraRetorna([2], 10, 4, 8) 
// console.log(r2) // [2, 20, 8, 16]

// const r3 = uneDobraRetorna([6, 8]) 
// console.log(r3) // [6, 8]

const uneDobraRetorna = (vetor, ...extras) => {
    for (let i = 0; i < extras.length; i++){
        extras[i] *= 2;
    }

    console.log({ vetor, extras });
    return [...vetor, ...extras];   
};

//versao com map

// const uneDobraRetornaMap = (vetor, ...extras) => {
//     const res = extras.map(num => num * 2); //map executa as funções e guarda em um novo array (se não entendi errado)
//     console.log(res);
//     return [...vetor, ...extras];   
// };

const r1 = uneDobraRetorna([1, 2, 3], 4, 4)
    console.log(r1) // [1, 2, 3, 8, 8]

// const r2 = uneDobraRetornaMap([2], 10, 4, 8) 
// console.log(r2) // [2, 20, 8, 16]

const r3 = uneDobraRetorna([6, 8], 5) 
console.log(r3) // [6, 8, 10]
