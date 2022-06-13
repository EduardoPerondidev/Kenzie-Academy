let valorA = 5;
let valorB = 3;
let valorAnterior;

valorAnterior = valorA;

valorA = valorB;

console.log('Antes a variável "ValorA" possuía o valor', valorAnterior+',', 'agora possui o valor', valorA);

valorA = valorAnterior;

valorAnterior = valorB;

valorB = valorA;

console.log('Antes a variável "ValorB" possuía o valor', valorAnterior+',', 'agora possui o valor', valorB);
alert('abra o console');
