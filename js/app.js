var canvas = document.getElementById('fondo'); //Busca el archivo y lo guarda en la variable
var lapiz = canvas.getContext('2d');

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", function(){
    dibujar();
});

function dibujar(){
    lapiz.drawImage(fondo,imagen,0,0);
}


