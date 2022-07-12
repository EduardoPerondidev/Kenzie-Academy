function farenheit(temperatura, tipo){
    if(tipo == 'Celsius'){
        let resultado = (temperatura - 32) / 1.8;
        return resultado;
    }
    if(tipo == 'Kelvin'){
        let resultado = (temperatura - 32) * 5/9 + 273;
        return resultado;
    }
    else{
        return `Digite um tipo diferente do atual para ser convertido`;
    }

}
function celsius(temperatura, tipo){
    if(tipo == 'Farenheit'){
        let resultado = temperatura * 1.8 + 32;
        return resultado;
    }
    if(tipo == 'Kelvin'){
        let resultado = temperatura + 273;
        return resultado;
    }
    else{
        return `Digite um tipo diferente do atual para ser convertido`;
    }

}
function kelvin(temperatura, tipo){
    if(tipo == 'Celsius'){
        let resultado = temperatura - 273;
        return resultado;
    }
    if(tipo == 'Farenheit'){
        let resultado = (temperatura - 273) * 1.8 + 32;
        return resultado;
    }
    else{
        return `Digite um tipo diferente do atual para ser convertido`;
    }
}

console.log(celsius(10, 'Kelvin'));