var getHead = document.getElementById('DisplayHeading');
var getUL = document.getElementById('Displayul');
var geth2 = document.getElementById('Displayh2');
var getIMG = document.getElementById('b1IMG');
function tema1(){
  getHead.innerHTML = 'Ingresos y Egresos';
  geth2.innerHTML = 'Cual es la diferencia?';
  getIMG.src = 'Images/Calculo.png';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Egresos:';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Es la salida de dinero';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Ingresos:';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Es la entrada de dinero';
  getUL.getElementsByTagName('li')[4].innerHTML = 'Ingresos - Ahorro = Egresos';
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
  getHead.innerHTML = 'Normales y Extraodrinarios';
  getIMG.src = 'Images/ExtraOrdinarios.jpg';
  geth2.innerHTML = 'Que son y como son diferentes?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Ordinarios';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Son ingresos y egresos generados por actividades comunes del dia a dia';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Extraodrinarios:';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Son ingresos y egresos que son mas que ordinarios, son (Extra)-odrinarios!';
  getUL.getElementsByTagName('li')[4].innerHTML = '(Ocurren cuando se generan ingresos o egresos que estan fuera de la rutina o no tienen relacion con operaciones diarias)';
  //css atributes
  getIMG.style.height = '700px;'
  getUL.getElementsByTagName('li')[3].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '100%'
  getUL.getElementsByTagName('li')[3].style.marginLeft = '0%';
  getUL.getElementsByTagName('li')[4].style.marginLeft = '10%';
}
function tema3(){
  getHead.innerHTML = 'Costos Fijos y Variables';
  getIMG.src = 'Images/fijos.png';
  geth2.innerHTML = 'Que significa cada uno?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Fijos:';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Se repiten constantemente y no dependen del volumen de produccion';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Variables';
  getUL.getElementsByTagName('li')[3].innerHTML = 'No se repiten constantemente y dependen del volumen de produccion';
  getUL.getElementsByTagName('li')[4].innerHTML = 'En si los fijos son aquellos que periodo por periodo son iguales y los variables son los que varian dependiendo de cuanto se trabajo';
// css
  getIMG.style.height = '500px';
  getUL.getElementsByTagName('li')[3].style.fontSize = '100%'
  getUL.getElementsByTagName('li')[3].style.marginLeft = '10%';
}
function tema4(){
  getHead.innerHTML = 'Costo Semifijo y Semivariable';
  getIMG.src = 'Images/costos.jpg';
  geth2.innerHTML = 'Cual es la diferencia';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Semifijo';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Son costos variables con aspectos defFijos';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Semivariable';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Son costos fijos con aspectos vairables';
  getUL.getElementsByTagName('li')[4].innerHTML = 'En si son un tipo de costo que tiene aspectos del otro tipo de costo';
 // css
 getUL.getElementsByTagName('li')[3].style.fontSize = '150%';
 getUL.getElementsByTagName('li')[4].style.fontSize = '150%'
}
