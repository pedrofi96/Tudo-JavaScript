class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  //metodo de instância
  aumentarVolume(){
    this.volume+=2;
  }
  diminuirVolume(){
    this.volume -=2;
  }
  //metodo de Instância.
  static trocarPilha(){
    console.log("\nOk, irei trocar.");
  }
  static soma(x, y){
    return x+y;
  }
}
function somar(x, y){
  return x+y;
}

var controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocarPilha();
console.log("\n"+ControleRemoto.soma(10,15));
console.log(somar(10,40));
