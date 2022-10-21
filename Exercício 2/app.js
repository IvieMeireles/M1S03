// Em um arquivo app.js (incluído em index.html) faça o seguinte:

// No documento js faça uma arrow function para retornar uma mensagem (string) de "Olá, Mundo!".

// Armazene esta arrow function em uma constante (const) de nome mensagemOla.

// Chame a função mensagemOla e exiba o retorno desta função no console.

// Ajuste a função mensagemOla para que receba um parâmetro nome e retorne a mensagem "Olá, [nome]!".

// Exemplo:

// mensagemOla("Mariana");
// // "Olá, Mariana!"
// Ao final, devemos ter uma função que monta uma mensagem de olá customizada com o nome informado por parâmetro.
const campo = document.getElementById('nome');
const botao = document.getElementById('botao');
const paragrafo = document.getElementById('paragrafo');



const mensagemOla = (nome) => `Olá, ${nome}!`; //não colocar as chaves implica automáticamente em um return

// console.log(mensagemOla("Mariana"))

mensagemOla("Mariana");
// "Olá, Mariana!"

botao.addEventListener('click', () => {
    const nome = campo.value;
    const mensagem = mensagemOla(nome);
    // const li = document.createElement('li');
    // paragrafo.appendChild(li); conteúdo de próximas aulas, apenas um spoilerzinho
    paragrafo.innerHTML = mensagem; //mostra já "codificando" o html
    console.log(mensagem); // pega o que você inseriu no campo, e vai exibir no console.log a mensagemOlá + o nome digitado
});