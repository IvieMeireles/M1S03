// Um palindrome (palíndromo), segundo o dicionário Houaiss,
// "diz-se de frase ou palavra que se pode ler, indiferentemente, da esquerda para direita ou vice-versa", como por exemplo: osso, Ana, radar.

// Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.

// Implemente uma função em JavaScript que receba uma string como parâmetro e retorne se determinada palavra é um palindromo ou não.

// Exemplo:

// const teste1 = verificaPalindromo("ana");
// // true

// const teste2 = verificaPalindromo("julia");
// // false
// Obs.: Use let e const para declarar variáveis se for necessário.
// Extra: Faça com uma arrow function.


function verificaPalindromo(texto){
    if (typeof palavra !== 'string' ){
        console.log('Texto inválido');
        return; //interrompendo a função
    }

    const meio = texto.length / 2;
    const fim = texto.length - 1;
    let ehPalindromo = true;

    for (let i = 0; i < meio; i++) {
        if (texto[i] !== texto[fim -i]){
            return false;
        }
        
    return true;
}

const teste1 = verificaPalindromo("ana");
console.log('ana', teste1)
// true

const teste2 = verificaPalindromo("julia");
console.log('julia', teste2);
// false
}