let participante = document.querySelector('input');
let amigosParticipantes = [];
let adicionarBtn = document.querySelector('#adicionar');
let sortearBtn = document.querySelector('#sortear');
let ExibirAmigoSorteado = document.querySelector('listaAmigos');
let jaSorteado = false;
function limparInput(){
    participante.value = '';
}
function validarInput(){
    if(participante.value === ''){
        exibirAmigoSorteado('Por favor, insira um nome válido.');
        return false;
    }
    if(amigosParticipantes.includes(participante.value)){
        exibirAmigoSorteado('Esse nome já foi adicionado. Por favor, insira um nome diferente.');
        return false;
    }
}
function adicionarAmigo(){
    let valido = validarInput();
    if(valido === false){
        limparInput();
        return; 
    }
    amigosParticipantes.push(participante.value);
    console.log('Adicionando amigo...');
    console.log(amigosParticipantes);
    limparInput();
    
};
function sortearAmigo(){
    let numeroSorteado = Math.floor(Math.random() * amigosParticipantes.length);
    let amigoSorteado = amigosParticipantes[numeroSorteado];
    console.log('Amigo sorteado: ' + amigoSorteado);
    exibirAmigoSorteado(amigoSorteado);
    let mudarBtn = document.querySelector('#botao-sortear');
    mudarBtn.innerHTML = 'Refazer lista';
    if(!jaSorteado){
        jaSorteado = true;
        return;
    }
    btnSortear.addEventListener('click', () => { 
        if (amigosParticipantes.length > 0) {
            amigosParticipantes = [];
            exibirAmigoSorteado('Lista refeita! Adicione novos amigos.');
            mudarBtn.innerHTML = 'Sortear amigo';
            }
        return;
      }
    
};
function exibirAmigoSorteado(amigoSorteado){
    let exibirAmigoSorteado = document.querySelector('h2');
    exibirAmigoSorteado.innerHTML = 'Amigo sorteado foi: ' + amigoSorteado;
}

if(adicionarBtn){
    adicionarBtn.addEventListener('click', adicionarAmigo);
    participante.value = '';
}
if(sortearBtn){
    sortearBtn.addEventListener('click', sortearAmigo);
}

