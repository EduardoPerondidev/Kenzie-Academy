let pessoa = {
    nome: "clara",
    anoNascimento: 1996,
    nomeDeUsuario: "CLARA_GOMES",
    temCarro: true,
    valeCombustivel: "R$ 0,00",
    distanciaDoTrabalho: "120km",
    endereco: []
  }
let listaDeUsuarios = [];
function qualIdade(pessoa) {
    let idade = 2022 - pessoa.anoNascimento;
    return idade;
}
console.log(qualIdade(pessoa));

function normalizaDado(pessoa) {
    let nome = pessoa.nome.charAt(0).toUpperCase() + pessoa.nome.slice(1);
    return nome
}
console.log(normalizaDado(pessoa));

function criandoListaDeUsuario(pessoa) {
    pessoa.nome = pessoa.nome.toLowerCase();
    return listaDeUsuarios.push(pessoa);
}
criandoListaDeUsuario(pessoa);
console.log(listaDeUsuarios)

function calculaVale(pessoa) {
    if (pessoa.temCarro) {
        let valorDoLitro = 6.99;
        let distanciaDoTrabalho = pessoa.distanciaDoTrabalho
        return pessoa.valeCombustivel = `R$ ${(distanciaDoTrabalho * valorDoLitro) * 0, 7},00`
    }

}
console.log(calculaVale(pessoa))

let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo: []
}
function adicionarTipo(endereco) {
    endereco.tipo.push('Casa');
    return endereco.tipo
}
console.log(adicionarTipo(endereco))

function adicionarEnderecoEmPessoa(pessoa, endereco){
    pessoa.endereco.push(endereco);
    return pessoa
}
console.log(adicionarEnderecoEmPessoa(pessoa,endereco))