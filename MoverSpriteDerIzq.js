/*
Con este código son 2 botones, uno para que vaya a la izquierda y otro a la derecha

let horizontalX=0;
let intervalId; // para almacenar el Id del intervalo

const divSprite=document.getElementById('SpriteHorizontal');
const botonDerecha=document.getElementById('Derecha');
const botonIzquierda=document.getElementById('Izquierda');
const botonParar=document.getElementById('Parar');

function moverSpriteDerecha(){   
    // sumar 10px al margen izquierdo
    horizontalX+=10;
    divSprite.style.marginLeft=horizontalX+"px"; 
}

function moverSpriteIzquierda(){
    // restar 10px al margen izquierdo
    horizontalX-=10;
    divSprite.style.marginLeft=horizontalX+"px";
}

botonDerecha.addEventListener('click', function() {
    // Iniciar el movimiento a la derecha
    intervalId = setInterval(moverSpriteDerecha, 10);
});

botonIzquierda.addEventListener('click', function() {
    // Iniciar el movimiento a la izquierda
    intervalId = setInterval(moverSpriteIzquierda, 10);
});


botonParar.addEventListener('click', function() {
    // Detener el movimiento
    clearInterval(intervalId);
});*/

let horizontalX = 0; // Posición inicial en el eje X
let verticalY = 0; // Posición inicial en el eje Y
let intervalId; // para almacenar el Id del intervalo

const divSprite = document.getElementById('SpriteHorizontal');
const contenedor = document.getElementById('ContenedorSprite');
const botonDerecha = document.getElementById('Derecha');
const botonParar = document.getElementById('Parar');
const contenedorWidth = contenedor.offsetWidth; // Ancho del contenedor
const contenedorHeight = contenedor.offsetHeight; // Alto del contenedor
const spriteWidth = divSprite.offsetWidth; // Ancho del sprite
const spriteHeight = divSprite.offsetHeight; // Alto del sprite


// para controlar la dirección del sprite

let direccionX = 1; // 1 para derecha, -1 para izquierda
let direccionY = 1; // 1 para abajo, -1 para arriba

// Colocar el sprite en el centro del contenedor

horizontalX = (contenedorWidth - spriteWidth) / 2; // Centrar horizontalmente
verticalY = (contenedorHeight - spriteHeight) / 2; // Centrar verticalmente

divSprite.style.marginLeft = horizontalX + "px"; 
divSprite.style.marginTop = verticalY + "px"; 


function moverSprite() {
    // Actualizar la posición del sprite
    horizontalX += 5 * direccionX;
    verticalY += 5 * direccionY;

    // Verificar si el sprite ha alcanzado el borde superior
    if (verticalY < 0) {
        verticalY = 0; // Ajustar a la posición del borde superior
        direccionY = 1; // Cambiar dirección a abajo
        divSprite.style.backgroundColor='red';
    }

    // Verificar si el sprite ha alcanzado el borde derecho
    if (horizontalX + spriteWidth > contenedorWidth) {
        horizontalX = contenedorWidth - spriteWidth; // Ajustar a la posición del borde derecho
        direccionX = -1; // Cambiar dirección a izquierda
        divSprite.style.backgroundColor='blue';
    }

    // Verificar si el sprite ha alcanzado el borde inferior
    if (verticalY + spriteHeight > contenedorHeight) {
        verticalY = contenedorHeight - spriteHeight; // Ajustar a la posición del borde inferior
        direccionY = -1; // Cambiar dirección a arriba
        divSprite.style.backgroundColor='green';
    }

    // Verificar si el sprite ha alcanzado el borde izquierdo
    if (horizontalX < 0) {
        horizontalX = 0; // Ajustar a la posición del borde izquierdo
        direccionX = 1; // Cambiar dirección a derecha
        divSprite.style.backgroundColor='yellow';
    }

    // Actualizar la posición del sprite en el DOM
    divSprite.style.marginLeft = horizontalX + "px"; 
    divSprite.style.marginTop = verticalY + "px"; 
}


// Función para iniciar el movimiento
botonDerecha.addEventListener('click', function() {
    clearInterval(intervalId); // Detener cualquier movimiento anterior
    intervalId = setInterval(moverSprite, 10);
});


// Función para detener el movimiento
botonParar.addEventListener('click', function() {
    clearInterval(intervalId);
});