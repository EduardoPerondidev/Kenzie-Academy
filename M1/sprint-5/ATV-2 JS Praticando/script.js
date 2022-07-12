// Descomente os console.log para ver os resultados.
function negativeNumbers(arr){
    let contador = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            contador ++;
        }
    }
    return contador;
}
// console.log(negativeNumbers([1,-2,-4,-5,1,-6]));

function negativeNumbersSum(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            soma = soma + arr[i];
        }
    }
    return soma;
}
// console.log(negativeNumbersSum([1,-2,-4,-5,1,-6]));

function evenArray(num){
    let arr = [];
    for(let i = 0; i < num; i++){
        if(i % 2 == 0){
            arr.push(i);
        }
    }
    return arr;
}
// console.log(evenArray(10));

function negativeArray(arr){
    let negative = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negative.push(arr[i]);
        }
    }
    return negative;
}
// console.log(negativeArray([1,-2,-4,-5,1,-6]));

function arraySum(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
        soma = soma + arr[i];
    }
    if(soma > arr.length){
        return true;
    }
    else{
        return false;
    }
}
//  console.log(arraySum([1,-2,-4,-5,1,-6]));

function arrayPlus5(arr){
    let plus5 = [];
    for(let i = 0; i < arr.length; i++){
        plus5.push(arr[i] + 5);
    }
    return plus5;
}
//  console.log(arrayPlus5([1,-2,-4,-5,1,-6]));

function arraymedia(arr){
    let media = 0;
    let mediaarray = [];
    for(let i = 0; i < arr.length; i++){
        media = media + arr[i];
    }
    media = media / arr.length;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > media){
            mediaarray.push(arr[i]);
        }
    }
    return mediaarray;
}
//  console.log(arraymedia([1,2,4,5,1,6]));

// ⬇⬇⬇ ATIVIDADES COM STRINGS ⬇⬇⬇

function aCounter(str){
    let contador = 0;
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'a' || arr[i] == 'A'){
            contador++;
        }
    }
    return `a string tem ${contador} letras as`;
}
//  console.log(aCounter('banana'));

function stringSum(arr){
    let soma = 0;
    for(let i = 0; i < arr.length; i++){
      soma = soma + arr[i].length;
    }
    return soma;
  }
  
//  console.log(stringSum(['banana', 'banana']));

function oddStringArray (str){
    let arr = str.split(' ');
    let oddarray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length % 2 != 0){
            oddarray.push(arr[i]);
        }
    }
    return oddarray;
}
//  console.log(oddStringArray('bot bota banana pix rato car pé roupa copa'));

function oTo0Converter (str){
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'o' || arr[i] == 'O'){
            arr[i] = '0';
        }
    }
    return arr.join('');
}
//  console.log(oTo0Converter('robo tOupeira'));

function pToPConverter (str){
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'p'){
            arr[i] = 'P';
        }
    }
    return arr.join('');
}
//  console.log(pToPConverter('paralelepipedo peripécia'));