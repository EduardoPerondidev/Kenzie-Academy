const bigBoss = [ 
    ["Nome", "Boss"],
    ["Idade", 89],
    ["Cidade", "Rio de Janeiro"],
    ["Estado", "RJ"],
    ["Ano de Nascimento", 1933]
]

function generatePassword(boss){
    let nome = boss[0][1];
    let cidade = boss[2][1].replace(/ /g, '');
    return nome + cidade; 

}
// console.log(generatePassword(bigBoss));

function harderPassword(boss){
    let nome = boss[0][1].split('').reverse().join('');
    let cidade = boss[2][1].replace(/ /g, '').split('').reverse().join('');
    let password = [nome,'-',cidade];
    return password.reverse().join('');
}
// console.log(harderPassword(bigBoss));

function evenHarderPassword(boss){
    let nome = boss[0][1].split('').reverse().join('');
    let cidade = boss[2][1].replace(/ /g, '').split('').reverse().join('');
    let password = [nome,'-',cidade];
    return password.reverse().join('');
}
console.log(evenHarderPassword(bigBoss));