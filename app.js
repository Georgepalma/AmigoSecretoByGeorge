//Selecionando elementos do DOC
let participante = document.querySelector('input ');
//Array para armazenar os amigos participantes
let amigosParticipantes = [];
//Selecionando botões do DOC
let adicionarBtn = document.querySelector('#adicionar');
let sortearBtn = document.querySelector('#sortear');
let ExibirAmigoSorteado = document.querySelector('listaAmigos');
//Função para limpar o input do usuário
function limparInput(){
    participante.value = '';
}
//Função para validar o input do usuário
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
//Função para adicionar amigo na lista
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
//Função para limpar a lista de amigos
function limparLista(){
    amigosParticipantes = [];
    console.log('Lista limpa com sucesso!');
}
//Função para sortear amigo, limpar input e lista.
function sortearAmigo(){
    let numeroSorteado = Math.floor(Math.random() * amigosParticipantes.length);
    let amigoSorteado = amigosParticipantes[numeroSorteado];
    console.log('Amigo sorteado: ' + amigoSorteado);
    exibirAmigoSorteado(amigoSorteado);

    limparInput();
    limparLista();

};
//Função para exibir o amigo sorteado na tela
function exibirAmigoSorteado(amigoSorteado){
    let exibirAmigoSorteado = document.querySelector('h2');
    exibirAmigoSorteado.innerHTML = 'Amigo sorteado foi: ' + amigoSorteado;
}
