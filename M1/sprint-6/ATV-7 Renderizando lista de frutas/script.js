let listFrutas = ['Banana', 'Goiaba', 'Melancia', 'Laranja', 'Melão', 'Pêra', 'Teste', 'Teste2', 'Teste3']
let ul = document.getElementsByClassName('list-itens')[0];

function createElementeItens(listFrutas) {
    for (let i = 0; i < listFrutas.length; i++) {

        let element = document.createElement('li') //crie uma li
            element.innerText = `${listFrutas[i]}`//use o template string para acessar o elemento da lista
            ul.appendChild(element) // insira a li dentro da lista
    }
}

createElementeItens(listFrutas)