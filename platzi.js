var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
url: "tile.png",
cargaOk: false
}
var vaca = {
  url:"vaca.png",
  cargaOK: false
}
var cerdo = {
  url:"cerdo.png",
  cargaOK: false
}
var pollo = {
  url:"pollo.png",
  cargaOK: false
}
var lobo = {
   url:"lobo.png",
   cargaOK: false
}; 


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarLobo()
{
  lobo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    var cantidad = aleatorio(5, 15);
    for(var v=0; v < cantidad; v++)
    {
      var xv = aleatorio(0, 7);
      var yv = aleatorio(0, 7);
      var xv = xv * 60;
      var yv = yv * 60;
      papel.drawImage(vaca.imagen, xv, yv);
    }
  }
  if(cerdo.cargaOK)
  {
    var cantidad = aleatorio(5, 15);
    for(var c=0; c < cantidad; c++)
    {
      var xc = aleatorio(0, 7);
      var yc = aleatorio(0, 7);
      var xc = xc * 60;
      var yc = yc * 60;
      papel.drawImage(cerdo.imagen, xc,yc);
    }
  }

  if(pollo.cargaOK)
  {
    var cantidad = aleatorio(5, 15);
    for(var p=0; p < cantidad; p++)
    {
     var xp = aleatorio(0, 7);
     var yp = aleatorio(0, 7);
     var xp = xp * 60;
     var yp = yp  * 60;
    papel.drawImage(pollo.imagen, xp, yp);
    }
  }

  if(lobo.cargaOK)
  {
    var cantidad = aleatorio(1, 1);
    for(var l=0; l < cantidad; l++)
    {
     var xl = aleatorio(0, 7);
     var yl = aleatorio(0, 7);
     var xl = xl * 60;
     var yl = yl  * 60;
    papel.drawImage(lobo.imagen, xl, yl);
    }
  }
}
 
function aleatorio(min,max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;  
}
