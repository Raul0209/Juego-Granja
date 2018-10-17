var canvas = document.getElementById('fondo'); //Busca el archivo y lo guarda en la variable
var lapiz = canvas.getContext('2d');

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
    dibujar();
});

cerdo.imagen.addEventListener("load",function(){
    cerdo.cargaOK = true;
   dibujar();
});

cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOK = true;
    dibujar();
});

function dibujar(){
    if(fondo.cargaOK == true){
        lapiz.drawImage(fondo.imagen,0,0);
    }

    if(vaca.cargaOK == true){
        lapiz.drawImage(vaca.imagen,150,100);
    }

   if(cerdo.cargaOK == true){
    lapiz.drawImage(cerdo.imagen,300,200);
   }

   if(cuchillo.cargaOK == true){
       lapiz.drawImage(cuchillo.imagen,150,150);
   }
    
}


