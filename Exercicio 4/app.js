function mesclaObjetos (objeto1, objeto2){
    return{ ...objeto1, ...objeto2};
}

const objUm = { a: 1, b: 2 };
const objDois = { c: 3, d: 4 };

const novoObjeto = mesclaObjetos(objUm, objDois);

console.log(novoObjeto);

function mesclaComidas (obj3, obj4){
    return{...obj3, ...obj4};
}

const obj3 = {a: 'batata', b: 'frita', c: 'crocante'}
const obj4 = {d: 'cenoura', e: 'cozida', f: 'macia'}

const comidas = mesclaComidas (obj3, obj4);

console.log(comidas);