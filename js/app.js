document.addEventListener("keydown", movimiento);
var canvas = document.getElementById('fondo'); //Busca el archivo y lo guarda en la variable
var lapiz = canvas.getContext('2d');
const DIMENSION = 80;
var x = random(0, 5) * 80;
var y = random(0, 5) * 80;
var matriz = new Array(6);
var porcina;

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,
    cargaOK: false
};

var vaca = {
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOK: false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image,
    cargaOK: false
};

var cuchillo = {
    url: './imagenes/cuchillo.png',
    imagen: Image,
    cargaOK: false
};



cuchillo.imagen = new Image();
cuchillo.imagen.src = cuchillo.url;

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", function(){
    fondo.cargaOK = true;
    dibujar();
});

vaca.imagen.addEventListener("load",function(){
    vaca.cargaOK = true;
    // dibujar();
});

cerdo.imagen.addEventListener("load",function(){
    cerdo.cargaOK = true;
//    dibujar();
});

cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOK = true;
    dibujar();
});

iniciarMatriz();
inicializarVacas();
inicializarCerdos();
dibujar();

function dibujar(){
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }

    dibujarMatriz();
   if(cuchillo.cargaOK == true){
       lapiz.drawImage(cuchillo.imagen,x,y);
   }
}

   var tecla={
       LEFT: 37,
       UP: 38,
       RIGHT: 39,
       DOWN: 40,
       ENTER: 13
   }

   function movimiento(evento){
       switch(evento.keyCode){
        case tecla.LEFT:
        if (x > 0) {
            x = x - DIMENSION;
            dibujar();
        }
         break;

        case tecla.UP:
        if (y > 0){
            y = y - DIMENSION;
            dibujar();
        }
        break;

        case tecla.DOWN:
        if(y < 400){
            y = y + DIMENSION;
            dibujar();
        }
       break;
        
        case tecla.RIGHT:
        if (x < 400){
            x = x + DIMENSION;
            dibujar();
        }
        break;

        case tecla.ENTER:
        alert(random(0,5));
        break;
       }
    }

   function random(minimo,maximo){
return Math.floor(Math.random() * (maximo-minimo +1)) + minimo;
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
        var linea = random(0, 5);
        var columna = random(0, 5);
        if (matriz[linea][columna] == 'x') {
            matriz[linea][columna] = 'v';
        }
    }
}

function inicializarCerdos() {
    var numero = random(0, 5);
    for (var i = 0; i <= numero; i++) {
        var linea = 0 + random(0, 5);
        var columna = 0 + random(0, 5);
        if (matriz[linea][columna] == 'x') {
            matriz[linea][columna] = 'c';
        }
        
    }
    
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

// function generarCerdosMalos(){
//  for(var i = 0; i < numero; i++) {
//     var linea = lineaCerdo
//     var columna = columnaCerdo
//     if (matriz[linea][columna] == 'c') {
//         matriz[linea][columna] = 'p'
//     }
//   }
// }
// alert(lineaCerdo)
