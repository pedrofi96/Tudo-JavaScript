const pontuacaoUsuario = 999;

/*
Exemplo de como se faz sem operação ternaria:

if(pontuacaoUsuario>= 1000){
    console.log('usuario VIP');
}else{
    console.log('usuario normal');
}

*/

//exemplo usando operação ternaria:

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario VIP' : 'usuario Normal';
console.log(nivelUsuario);