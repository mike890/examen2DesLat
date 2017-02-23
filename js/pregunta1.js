var suma = 0;
do
{
var ingreso = prompt("ingresa un número");
  if (isNaN(ingreso))
  {
    console.log("no es numero");
  }
  else {
    suma += +ingreso;
  }
}
while(ingreso !="fin");
console.log(suma);
