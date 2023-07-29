const data = new Date(); //usando objeto Date

console.log(data); //Data em milesimos de segundo com dia ano e mes
console.log(Date.now()); //data contada em milesimos de seungod desde a data de 01/01/1970

//função para deixar a data em PT-BR:

function formatarData() {
  const dia = adicionar0Esquerda(data.getDate()); //pega o dia
  const mes = adicionar0Esquerda(data.getMonth() + 1); //pega o mês indo de 0 a 11 por isso necessario adicionar 1 para vir o mês certo.
  const ano = adicionar0Esquerda(data.getFullYear()); //pega o ano
  const horas = adicionar0Esquerda(data.getHours()); //pega a hora
  const minutos = adicionar0Esquerda(data.getMinutes()); //vê os minutos
  const segundos = adicionar0Esquerda(data.getSeconds()); // vê os segundos
  //daria para ver os milisegundos ou o dia da semana com os comandos:
  data.getMilliseconds();
  data.getDay();

  return `${dia}/${mes}/${ano}  ${horas}:${minutos}:${segundos}`;
}

function adicionar0Esquerda(num) {
  return num < 10 ? `0${num}` : num;
}

const DataPTBR = formatarData(data);
console.log(DataPTBR);
