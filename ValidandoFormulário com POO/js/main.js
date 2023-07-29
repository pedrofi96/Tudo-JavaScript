class ValidaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

 
  eventos(){
    this.formulario.addEventListener('submit', e=>{
      this.Submit(e);
    });
  }

  Submit(e) {
    e.preventDefault();
    this.CamposValidos();
    
    this.senhasValidas();
    const camposValidos = this.CamposValidos();
    const senhasValidadas = this.senhasValidas();

    if(camposValidos && senhasValidadas){
      window.alert('Formulário enviado com sucesso');
      this.formulario.submit();
    }
  }

  senhasValidas(){
    let valid = true;
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.senhaConfirmar');
    
    if(senha.value != repetirSenha.value){
      valid = false;
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisão ser iguais.');
    }
    return valid;
  }
  CamposValidos(){
    let valid = true;
    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove();
    }
    for(let i of this.formulario.querySelectorAll('.validar')){
      const label = i.previousElementSibling.innerHTML;
      if(!i.value){
        this.criaErro(i, `${label} não pode estar em branco`);
        valid=false;
      }
      if(i.classList.contains('cpf')){
        if(!this.validaCPF(i)) valid = false;
      }
      if(i.classList.contains('usuario')){
        if(!this.validarUsuario(i)) valid = false;
      }
      if(i.classList.contains('senha')){
        if(!this.validarSenha(i)) valid = false;
      }
    }
    return valid;
  }

  validarSenha(i){
    const senha = i.value
    if(senha.length < 6 || senha.length>12){
      this.criaErro(i, 'Senha precisa ter entre 6 e 12 caracteres');
    }
    return true;

  }

  validarUsuario(i){
    const usuario = i.value;
    if(usuario.length < 3 || usuario.length>12){
      this.criaErro(i, 'Usuario precisa ter no minimo 3 caracteres e no máximo 12');
      
    }

   
    return true

  }

  validaCPF(i){
    const cpf = new ValidarCPF(i.value);
    
    if(!cpf.validar()){
      this.criaErro(i, 'CPF inválido');
    }
    return true
  }

  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg; //adiciona msg dentro da div
    div.classList.add('error-text'); 
    campo.insertAdjacentElement('afterend', div); //insere div apos o campo atual.

  }

}

const valida = new ValidaFormulario();