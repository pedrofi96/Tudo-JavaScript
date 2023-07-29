class ValidarCPF{
  constructor(cpf){
    Object.defineProperty(this,'cpflimpo',{
      //Não permite alterar a função
      writable: false,
      enumerable: true,
      configurable: false,
      // Value replace regex remove tudo que não seja numero
      value: cpf.replace(/\D+/g, '')
    });
  }
  validar(){
    if(!this.cpflimpo) return false;
    if(typeof this.cpflimpo !== 'string') return false;
    if(this.cpflimpo.length !==11) return false;
    
    
    return 'Cpf Valido.'
  }


}
/*
const validarcpf = new ValidarCPF('070.987.720-03');
console.log(validarcpf);
console.log(validarcpf.validar());
*/