//objeto
//coleção de chaves e valores
var pessoa ={
    nome: "João",
    idade: 20,
    telefone: null,
    endereco: {
        logadouro: "Av. João Pessoa",
        numero: 819,
        bairro: "Centro"
    }

};
console.log(pessoa);

pessoa.nome ="José"; //or pessoa["nome"] = "José"
pessoa.endereco.numero = 700;
pessoa.cordosolhos = "Azul";

console.log(pessoa);
//deletar props

delete pessoa.idade;
console.log(pessoa);