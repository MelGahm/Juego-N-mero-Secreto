let intentos = 0;
let númeroSecreto = 0;
let listaNúmerosSorteados = [];
let númeroMáximo = 10;
let intentosMáximos = 5;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
if (númeroDeUsuario === númeroSecreto){
    asignarTextoElemento('p',`¡Acertaste el número, en ${intentos} ${(intentos === 1) ? 'vez!' : 'veces!'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else {
    //El usuario no acertó
    if(númeroDeUsuario > númeroSecreto) {
        asignarTextoElemento('p','El número Secreto es Menor');
    } else {
        asignarTextoElemento('p','El número Secreto es Mayor');
    } 
    intentos++;
    limpiarCaja();
    //Verificar si se han agotado los intentos
    if (intentos === intentosMáximos) {
        asignarTextoElemento ('p','Te has quedado sin intentos, ¡fin del juego!');
        document.getElementById('reiniciar').removeAttribute('disabled');
        } 
    }
return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNúmeroSecreto() {
    let númeroGenerado = Math.floor(Math.random()*númeroMáximo)+1;
        //Si ya sorteamos todos los números
    if (listaNúmerosSorteados.length == númeroMáximo){
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles');
    } else {
    //si el número generado está incluido en la lista
    if (listaNúmerosSorteados.includes(númeroGenerado)) {
    return generarNúmeroSecreto();
    } else {
        listaNúmerosSorteados.push(númeroGenerado);
        return númeroGenerado;
    }
 }
}

function condicionesIniciales(){
    intentos = 0;
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p',`Indicar un número del 1 al ${númeroMáximo}`);
    númeroSecreto = generarNúmeroSecreto();
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje inicio: indicar números
    //Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    //Deshabiliar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();


