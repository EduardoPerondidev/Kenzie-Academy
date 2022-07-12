const title = document.createElement('h1');
title.innerText = 'Título do post'

const paragraph = document.createElement('p');
paragraph.innerText = 'Descrição do post'

const anchor = document.createElement('a');
anchor.innerText = 'Ver Post Completo'
anchor.href = '#'

const article = document.querySelector('article');
article.appendChild(title)
article.appendChild(paragraph)
article.appendChild(anchor)