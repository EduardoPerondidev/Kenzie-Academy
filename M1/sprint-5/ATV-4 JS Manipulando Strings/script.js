let text = 'testetesteo' //'Pneumoultramicroscopicossilicovulcanoconiótico';

function upperCase(str){
    return str.toUpperCase();
}
// console.log(upperCase(text));

function changeOToY(str){
    return str.replace(/ó/g, 'o').replace(/o/g, 'y');
}
// console.log(changeOToY(text));

function removeDuplicates(str){
    let strin =  str.toLowerCase().split('');
    let teste = [];
    for(let i = 0; i < str.length; i++){
        let letra = strin[i];
        for(let j = 0; j < str.length; j++){
            console.log(letra, strin[j]);
            if(letra != strin[j]){
                teste.push(strin[j]);
            }
        }
    }
    return strin.join('');
}
console.log(removeDuplicates(text));