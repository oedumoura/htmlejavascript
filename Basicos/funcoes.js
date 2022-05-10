console.log(soma(2,2))

function soma(a, b){ //funcion declaration é declarada antes, entao isso da certo
    return a + b;
}

var somav = function(a, b){
    return a+b;
}

var soma3 = function somas(a, b){
    return a+b;
}

console.log(somav(2,3))

console.log(soma3(7,3))

var produto = {nome: 'Sapato', preco: '150'};

var formulaImpostoA = function (preco) {return preco*0.23;} //23% de imposto
var formulaImpostoB = function (preco) {return preco*0.2;} //2% de imposto



var calcularPreco = function (produto, formulaImposto){
    return parseInt(produto.preco) + parseInt(formulaImposto(produto.preco)); //o + estava concatenando.
}
console.log(calcularPreco(produto, formulaImpostoA))
console.log(calcularPreco(produto, formulaImpostoB))

var helloWorld = function(){
    return function(){
        return "Hello World!";
    };
};

console.log(helloWorld); //result [Function: helloWorld]
console.log(helloWorld()); //result [Function (anonymous)]
console.log(helloWorld()()); //result Hello World!, duas fuções dentro.


//call e apply
var getIdade = function(extra, extra2){
    return this.idade + extra + extra2;
};

var pessoa = {
    nome: "João",
    idade: 20,
    getIdade: getIdade
}

console.log(pessoa.getIdade(2,1));
console.log(getIdade.call(pessoa, 2, 1, 3)); //funcionou mesmo com parametro a mais, mas eles foram ingnorados
console.log(getIdade.apply(pessoa, [2, 1, 3]));

