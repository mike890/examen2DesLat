function Telefono(numero,marca,color){
  this.numero =numero;
  this.marca=marca;
  this.color = color;
}
function Marcar()
{
  this.contador = 0;
  this.marcar = function(objeto)
  {
    if(objeto.numero)
    {
      console.log(objeto.numero);
      this.contador ++;
      console.log(this.contador);
    }
  }
}

var tel = new Telefono(555555,"nokia","rojo");
var tel3 = new Telefono(666666,"nokia","rojo");
var tel4 = new Telefono(777777,"nokia","rojo");
var marca = new Marcar();
marca.marcar(tel);
marca.marcar(tel3);
marca.marcar(tel4);
