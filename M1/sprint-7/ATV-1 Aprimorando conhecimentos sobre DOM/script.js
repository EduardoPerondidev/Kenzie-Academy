const container = document.getElementById('root')
container.innerText = 'repetir'
console.log(container)

const repetir = document.createElement('span')
repetir.innerText = ' repetir e repetir...'
console.log(repetir)

container.appendChild(repetir)

const ul = document.createElement('ul')
const li = document.createElement('li')
li.innerText = 'repetir cada vez mais'

ul.appendChild(li)

container.appendChild(ul)