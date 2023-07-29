const nome = 'Pedro Filipe';
const sobrenome ='Tavares Baptista';
const idade = 26;
const peso = 110;
const altura = 1.90;
let imc;
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento=2022-idade;

console.log('O sr.',nome,sobrenome,'tem',idade,'pesa',peso+'Kg');
console.log('tem altura de' ,altura,'Metros portanto tem imc de:'+imc);
console.log(`e nasceu em: ${anoNascimento}`); //template strings, precisa estar entre crases.




