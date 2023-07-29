//Criando uma classe chamada pessoa.
class pessoa{
    //construtor que recebe o parametro nome e sobrenome
    constructor(nome,sobrenome){
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
    //metodo falar para pessoa
    falar(){
      console.log(`${this.nome} Bora Bill!!!`);
    }

}

//criando objeto p1 vindo da classe pessoa;
const p1 = new pessoa('Pedro', 'Filipe');
console.log(p1);
p1.falar();

class carro{
  constructor(nome){
    this.nome = nome;
    this.velocidade = 0;
  }
  acelerar(){
    this.velocidade += 10
  }
  // JavaScript é fracamente tipado assim sendo não aceita Overloading então sempre q for chamar metodo acelerar chama o primeiro metodo
  aceletar(v1){
    this.velocidade += v1;
  }


}

const c1 = new carro('fusca');

c1.velocidade=50;
console.log(c1.velocidade);
c1.acelerar();
console.log(c1.velocidade);
c1.acelerar(10000);
console.log(c1.velocidade);