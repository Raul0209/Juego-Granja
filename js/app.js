document.addEventListener("keydown", movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
const DIMENSION = 80;
var x = random(0, 5) * 80;
var y = random(0, 5) * 80;
var envenenado = 0;

var matriz = new Array(6);

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
    cargaOk : false
};

var vaca = {
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOk : false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen :Image,
    cargaOk : false
};

var cuchillo = {
    url: './imagenes/cuchillo.png',
    imagen : Image,
    cargaOk: false
};

fondo.imagen = new Image ();
vaca.imagen = new Image();
cerdo.imagen = new Image();
cuchillo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

fondo.imagen.addEventListener("load", function(){
    fondo.cargaOk = true;
    dibujar();
});
vaca.imagen.addEventListener("load",function(){
     vaca.cargaOk = true;
    // dibujar();
});   
cerdo.imagen.addEventListener("load",function(){
    // //  cerdo.cargaOk = true;
    // dibujar();
});
cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOk = true;
    dibujar();
});

iniciarMatriz();
inicializarVacas();
inicializarCerdos();
elegirEnvenenado();
dibujar();

function dibujar() {
    if (fondo.cargaOk == true) {
        lapiz.drawImage(fondo.imagen, 0, 0);
    }
    // if (vaca.cargaOK == true) {

    // }
    // if (cerdo.cargaOK == true) {

    // }
    // if (cuchillo.cargaOK == true) {
    //     // lapiz.drawImage(cuchillo.imagen, random(0,5) * 80, random(0,5) * 80);
    // }
    dibujarMatriz();
    if (cuchillo.cargaOk == true) {
        lapiz.drawImage(cuchillo.imagen, x, y);
    }
}

var tecla = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13
}
function movimiento(evento){
   switch(evento.keyCode){
       case tecla.LEFT:
            if(x>0){
                x = x - DIMENSION;
            }
            dibujar();
            break;
        case tecla.UP:
            if (y>0){
                y = y - DIMENSION;
            }
            dibujar();
            break;
        case tecla.RIGHT:
            if(x<400){
                x = x + DIMENSION;
            }
            dibujar();
            break; 
        case tecla.DOWN:
            if(y<400){
            y = y + DIMENSION;
            }
            dibujar();
            break;
        case tecla.ENTER:
            console.log(matriz);
            alert();
            break;
   }
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function iniciarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = new Array(6);
        for (var j = 0; j < matriz.length; j++) {
            matriz[i][j] = 'x';
        }
    }
}

function inicializarVacas() {
    var numero = random(0, 5);
    for (var i = 0; i <= numero; i++) {
        var fila = random(0, 5);
        var columna = random(0, 5);
        if (matriz[fila][columna] == 'x') {
            matriz[fila][columna] = 'v';
        }
    }   
}

function inicializarCerdos() {
    var numero = random(0, 5);
    var cerdoEnvenenado = random(1,numero);
    for (var i = 0; i <= numero; i++) {
        var fila = random(0, 5);
        var columna = random(0, 5);
        if (matriz[fila][columna] == 'x') {
            if(envenenado == 2 ){
                if(i == cerdoEnvenenado){
                    matriz[fila][columna]='b'
                }
            }else{
                matriz[fila][columna] = 'c';
            }
           
        }
    }
}


function elegirEnvenenado(){
    envenenado = random(1,2);
    
}

function dibujarMatriz() {
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            if (matriz[i][j] == 'v') {
                lapiz.drawImage(vaca.imagen, i * DIMENSION, j * DIMENSION);
            } else if (matriz[i][j] == 'c') {
                lapiz.drawImage(cerdo.imagen, i * DIMENSION, j * DIMENSION);
            }
        }
    }
}

