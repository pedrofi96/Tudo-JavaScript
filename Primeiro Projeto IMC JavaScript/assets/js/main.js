// parar formulário

const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log('evento previnido.'); comando apenas de teste para saber se a função foi execultada com sucesso.
    //setResultado('Olá Mundo.');
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('peso inválido.', false);
        return;
    }

    if (!altura){
        setResultado('Altura Inválida.', false);
        return;
    }

    const imc = getImc(peso, altura);

    const messagem = getValorImc(imc);

    setResultado(messagem, true);

});

function getValorImc(imc){
    const valor = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso','Obesidade 1', 'Obesidade 2','Obesidade 3'];
    
    if(imc>=39.9){
        return valor[5];
    }
    if(imc >=34.9){
        return valor[4];
    }
    if (imc >=29.9){
        return valor[3];
    }
    if(imc >=24.9){
        return valor[2];
    }
    if(imc >=18.9){
        return valor[1];
    }
    if(imc < 18.9){
        return valor[0];
    }


};

function getImc(peso, altura){
    const imc = peso/altura**2;
    return imc.toFixed(2);
};


function criarParagrafo(){
    const p = document.createElement('p');
    return p;
};

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criarParagrafo();
    
    if(isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p); 
};