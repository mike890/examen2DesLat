var array = ["lunes", "martes","miercoles","jueves"];
var arreg = [];
function copiar (arreglo)
{
  for(var i=0; i<arreglo.length; i++)
  {
    arreg[i]=arreglo[i];
  }
  return console.log(arreg);
}
copiar(array);
