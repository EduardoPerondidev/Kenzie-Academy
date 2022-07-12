let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'www.lojadakenzie.com.br'
}
let element = document.getElementsByClassName("container")[0];
let elementInformado = document.getElementsByClassName("infomacao")[0];

element.addEventListener("click", function (e) {
    e.target.classList.toggle('aqui_dispara')
})

let ul = document.createElement('ul');
let li = document.createElement('li');

let nome = document.createElement('span')
nome.innerText = produto.nome;


let valor = document.createElement('span')
valor.innerText = produto.valor;

let liquidacao = document.createElement('span')
liquidacao.innerText = 'Em liquidação';

let distribuidor = document.createElement('a')
distribuidor.innerText = produto.distribuidor;
distribuidor.href = produto.distribuidor;

li.append(nome, valor, liquidacao, distribuidor)
ul.appendChild(li);

let elemento = document.getElementsByClassName('container-teste')[0];
elemento.appendChild(ul);

liquidacao.addEventListener('click', function(){
    let preco =  produto.valor - (produto.valor * 0.3);
    let toggle = liquidacao.classList.toggle(`ativado`)
    console.log(toggle)
    if(toggle){
        let teste = document.createElement('span')
        teste.innerText = `Apenas hoje: ${preco}`
        liquidacao.appendChild(teste)
    }
    else{
        liquidacao.innerText =  'Em liquidação'
    }
})

if(produto.liquidacao){
    distribuidor.addEventListener('click', function(event){
        event.preventDefault()
    })
}