const h1 = document.getElementById("Data");
const data = new Date();

function getDiaSemana(num) {
  let diaSemana;

  switch (num) {
    case 0:
      diaSemana = "Domingo";
      return diaSemana;
    case 1:
      diaSemana = "Segunda-feira";
      return diaSemana;
    case 2:
      diaSemana = "Terça-feira";
      return diaSemana;
    case 3:
      diaSemana = "Quarta-Feira";
      return diaSemana;
    case 4:
      diaSemana = "Quinta-Feira";
      return diaSemana;
    case 5:
      diaSemana = "Sexta-Feira";
      return diaSemana;
    case 6:
      diaSemana = "Sabado";
      return diaSemana;
  }
}

function getNomeMes(num) {
  let mes;

  switch (num) {
    case 0:
      mes = "Janeiro";
      return mes;
    case 1:
      mes = "Fevereiro";
      return mes;
    case 2:
      mes = "Março";
      return mes;
    case 3:
      mes = "Abril";
      return mes;
    case 4:
      mes = "Maio";
      return mes;
    case 5:
      mes = "Junho";
      return mes;
    case 6:
      mes = "Julho";
      return mes;
    case 7:
      mes = "Agosto";
      return mes;
    case 8:
      mes = "setembro";
      return mes;
    case 9:
      mes = "Outubro";
      return mes;
    case 10:
      mes = "Novembro";
      return mes;
    case 11:
      mes = "Dezembro";
      return mes;
  }
}

function adicionar0Esquerda(num) {
  return num < 10 ? `0${num}` : num;
}

function CriaData(Data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemana(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${adicionar0Esquerda(
      data.getHours()
    )}:${adicionar0Esquerda(data.getMinutes())}:${adicionar0Esquerda(
      data.getSeconds()
    )}`
  );
}
//h1.innerHTML = diaSemana(data.getDay()) + " ," + MesNome(data.getMonth()) ;
h1.innerHTML = CriaData(data);
