var getHead = document.getElementById('DisplayHeading');
var getUL = document.getElementById('Displayul');
var geth2 = document.getElementById('Displayh2');
var getIMG = document.getElementById('b1IMG');
function tema1(){
  getHead.innerHTML = 'Valor Futuro';
  geth2.innerHTML = 'Para que sirve?';
  getIMG.src = 'Images/VFyVP.jpg';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Para saber para que sirve devemos de saber, que es?';
  getUL.getElementsByTagName('li')[1].innerHTML = '(Explica Matematicas)';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Entonces, para que sirve?';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Para saber cuanto valdra tu dinero despues de cierto tiempo con intereses';
  getUL.getElementsByTagName('li')[4].innerHTML = '';
  //Css formation
  getUL.getElementsByTagName('li')[0].style.fontSize = '200%';
  getUL.getElementsByTagName('li')[1].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[3].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[1].style.lineHeight = '100%';
  getUL.getElementsByTagName('li')[1].style.marginLeft = '10%';
  getUL.getElementsByTagName('li')[3].style.marginLeft = '10%';
  getUL.getElementsByTagName('li')[2].style.fontSize = '200%';
  getUL.getElementsByTagName('li')[2].style.marginLeft = '0%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '250%';
  getUL.getElementsByTagName('li')[4].style.marginLeft = '0%';
  getIMG.style.height = '500px';
}
function tema2(){
  getHead.innerHTML = 'Valor Presente';
  geth2.innerHTML = 'Como es diferente al Valor Futuro?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Diferencia';
  getUL.getElementsByTagName('li')[1].innerHTML = 'En vez de decirte cuanto valdra tu dinero en el futuro, te dice cuanto vale tu dinero del futuro hoy';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Como Funciona?';
  getUL.getElementsByTagName('li')[3].innerHTML = '(Explicar Matematicas)';
  getUL.getElementsByTagName('li')[4].innerHTML = '';
  //css atributes
  getIMG.style.height = '500px;'
  getUL.getElementsByTagName('li')[3].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '100%'
  getUL.getElementsByTagName('li')[3].style.marginLeft = '0%';
  getUL.getElementsByTagName('li')[4].style.marginLeft = '10%';
}
function tema3(){
  getHead.innerHTML = 'Intereses Simpes y Compuestos';
  getIMG.src = 'Images/Exponencial.jpg';
  geth2.innerHTML = 'Cual es la diferencia?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Interes Simple:';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Los intereses no se le agregan al capital lo cual mantiene los pagos consetantes';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Interes Compuesto:';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Los intereses se le agregan al capital lo cual puede elevarlos dramaticamente';
  getUL.getElementsByTagName('li')[4].innerHTML = '(Explicar Matematicas y Metafora)';
 // css
 getUL.getElementsByTagName('li')[3].style.fontSize = '150%';
 getUL.getElementsByTagName('li')[3].style.lineHeight = '100%';
 getUL.getElementsByTagName('li')[3].style.marginLeft = '10%';
 getUL.getElementsByTagName('li')[4].style.fontSize = '200%';
 getUL.getElementsByTagName('li')[4].style.marginLeft = '00%';

}
function tema4(){
  getHead.innerHTML = 'Tasa Effectiva y Real';
  getIMG.src = 'Images/cosaesta.jpg';
  geth2.innerHTML = 'Que son?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Tasa Efectiva:';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Es cuanto se paga a lo largo de un periodo contemplando el interes compuesto';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Tasa Real';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Es la que toma en cuenta la perdida de valor conforme a la inflacion';
  getUL.getElementsByTagName('li')[4].innerHTML = '(Explicar Matematicas)';
}

function tema5(){
  getHead.innerHTML = 'Costo Anual Total';
  getIMG.src = 'Images/CAT.png';
  geth2.innerHTML = 'Que es el CAT?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'El Cat es:';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Es una medida de financiamiento para determinar el costo anual de tener una membresia de una tarjeta de credito';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Para que te sirve:';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Para evaluar las diferentes tarjetas de credito';
  getUL.getElementsByTagName('li')[4].innerHTML = 'Tambien es importante considerar los beneficios';
}
