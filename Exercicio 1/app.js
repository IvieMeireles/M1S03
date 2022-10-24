console.log('Semana 3 - Exercício 1')

// Implemente uma função "procuraMinMaxArrow" que receba como parâmetro um array (numérico) e identifique o menor e o 
//maior valor do mesmo.

// Imprima no console estes valores ou "Não é possível encontrar" quando não for possível.

// Teste a função com as seguintes entradas:

// [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
// []
// [1]
// [1, -1]
// null
// [-2,-2,-2,-2]
// [20,10, 30]

function procuraMinMax (numeros) {
if(!Array.isArray(numeros) || !numeros.length) { 
    // se o teste dar esquerda der false, é um array. Se for um array, e não tiver um length (no caso conteúdo), imprime o console
    // o Array.isArray está querendo saber se o numeros é um array ou não
    //esse !numeros.length é para se o array estiver vazio retornar o Não é possível encontrar
    console.log('Não é possível encontrar')
    return; //encerra a execução da função a partir da onde o return está inserido
}

    let min = numeros[0];
    let max = numeros[0]; 

    for (let i = 0; i < numeros.length; i++) {
        if (numeros [i] < min) {
        min = numeros[i];
    } 
        if (numeros[i] > max) {
        max = numeros [i];
        }
    }
    console.log({ min, max })
}

procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
procuraMinMax([]);
procuraMinMax([1]);
procuraMinMax([1, -1]);
procuraMinMax(null);
procuraMinMax([-2,-2,-2,-2]);
procuraMinMax([20,10, 30]);

// parte extra com arrow function

const procuraMinMaxArrow =  (numeros) => {  //não esqueça de declarar que a constante é = a algo, se não retornará erro 'Missing initializer in const declaration'
    if(!Array.isArray(numeros) || !numeros.length) { 
        // se o teste dar esquerda der false, é um array. Se for um array, e não tiver um length (no caso conteúdo), imprime o console
        // o Array.isArray está querendo saber se o numeros é um array ou não
        //esse !numeros.length é para se o array estiver vazio retornar o Não é possível encontrar
        console.log('Não é possível encontrar')
        return; //encerra a execução da função a partir da onde o return está inserido
    }
    
        let min = numeros[0];
        let max = numeros [0]; 
    
        for (let i = 0; i < numeros.length; i++) {
            if (numeros [i] < min) {
            min = numeros[i];
        } 
            if (numeros[i] > max) {
            max = numeros [i];
            }
        }
        console.log({ min, max })
    }
    
    procuraMinMaxArrow([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]);
    procuraMinMaxArrow([]);
    procuraMinMaxArrow([1]);
    procuraMinMaxArrow([1, -1]);
    procuraMinMaxArrow(null);
    procuraMinMaxArrow([-2,-2,-2,-2]);
    procuraMinMaxArrow([20,10, 30]);