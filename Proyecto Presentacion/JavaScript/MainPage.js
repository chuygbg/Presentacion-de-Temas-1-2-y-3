var getHead = document.getElementById('DisplayHeading');
var getUL = document.getElementById('Displayul');
var geth2 = document.getElementById('Displayh2');
var getIMG = document.getElementById('b1IMG');
function temas(){
  var Br1 = document.createElement('BR');
  var Br1_1 = document.createElement('BR');
  var Br1_2 = document.createElement('BR');
  var Br1_3 = document.createElement('BR');
  var Br1_4 = document.createElement('BR');
  var Br1_5 = document.createElement('BR');
  document.getElementById('DisplayHeading').innerHTML = 'Temas';
  document.getElementById('Displayh2').innerHTML = '';
  document.getElementById('Displayul').innerHTML = "";
  // This are the elements of the LI
  var LI1 = document.createElement('LI');
    // This are the childs of LI1
      var LI1_1 = document.createElement('LI');
      var LI1_2 = document.createElement('LI');
      var LI1_3 = document.createElement('LI');
      var LI1_4 = document.createElement('LI');
      var LI1_5 = document.createElement('LI');

  var LI2 = document.createElement('LI');
      var LI2_1 = document.createElement('LI');
      var LI2_2 = document.createElement('LI');
      var LI2_3 = document.createElement('LI');
      var LI2_4 = document.createElement('LI');
      var LI2_5 = document.createElement('LI');

  var LI3 = document.createElement('LI');
      var LI3_1 = document.createElement('LI');
      var LI3_2 = document.createElement('LI');
      var LI3_3 = document.createElement('LI');
      var LI3_4 = document.createElement('LI');
      var LI3_5 = document.createElement('LI');
      var LI4 = document.createElement('LI');
  // This are the texts of the LI 1
  LI1.innerHTML = 'Conceptos Basicos';
    LI1_1.innerHTML = '   Inflacion';
    LI1_2.innerHTML = '   Tasa de Interes';
    LI1_3.innerHTML = '   Tipo de Cambio';
    LI1_4.innerHTML = '   Ahorro vs Consumo';
    LI1_5.innerHTML = '   Riesgo-Rendimiento';
  // This are the text for LI 2
  LI2.innerHTML = 'El Valor del Dinero en el Tiempo';
    LI2_1.innerHTML = '   Valor Presente';
    LI2_2.innerHTML = '   Valor Futuro';
    LI2_3.innerHTML = '   Interes Simple y Compuesto';
    LI2_4.innerHTML = '   Tasa Efectiva y Real';
    LI2_5.innerHTML = '   CAT';
  // This are the text for LI 3
  LI3.innerHTML = 'Presupuesto Personal';
    LI3_1.innerHTML = '   Ingresos y Egresos';
    LI3_2.innerHTML = '   Normales y Extraodrinarios';
    LI3_3.innerHTML = '   Costo Fijo y Costo Variable';
    LI3_4.innerHTML = '   Costo Semivariable y Semifijo';
 // This are the CSS atributes
     LI1.style.fontSize = '180%';
       LI1_1.style.fontSize = '100%';
       LI1_2.style.fontSize = '100%';
       LI1_3.style.fontSize = '100%';
       LI1_4.style.fontSize = '100%';
       LI1_5.style.fontSize = '100%';
 // This are the text for LI 2
   LI2.style.fontSize = '180%';
      LI2_1.style.fontSize = '100%';
      LI2_2.style.fontSize = '100%';
      LI2_3.style.fontSize = '100%';
      LI2_4.style.fontSize = '100%';
      LI2_5.style.fontSize = '100%';
   // This are the text for LI 3
  LI3.style.fontSize = '180%';
       LI3_1.style.fontSize = '100%';
       LI3_2.style.fontSize = '100%';
       LI3_3.style.fontSize = '100%';
       LI3_4.style.fontSize = '100%';
       LI3_5.style.fontSize = '100%';
  // This is the appending
        getUL.appendChild(LI1);
        getUL.appendChild(LI1_1);
        getUL.appendChild(LI1_2);
        getUL.appendChild(LI1_3);
        getUL.appendChild(LI1_4);
        getUL.appendChild(LI1_5);
      getUL.appendChild(LI2);
        getUL.appendChild(LI2_1);
        getUL.appendChild(LI2_2);
        getUL.appendChild(LI2_3);
        getUL.appendChild(LI2_4);
        getUL.appendChild(LI2_5);
      getUL.appendChild(LI3);
        getUL.appendChild(LI3_1);
        getUL.appendChild(LI3_2);
        getUL.appendChild(LI3_3);
        getUL.appendChild(LI3_4);
        getUL.appendChild(LI3_5);
}

function Conceptos(){
  getHead.innerHTML = 'Conceptos Basicos';
  getUL.innerHTML = '';
  geth2.innerHTML= 'Temas';
  getIMG.src = 'Images/inflacion.jpg'

  // Br create
  var Br1 = document.createElement('BR');
  var Br1_1 = document.createElement('BR');
  var Br1_2 = document.createElement('BR');
  var Br1_3 = document.createElement('BR');
  var Br1_4 = document.createElement('BR');
  var Br1_5 = document.createElement('BR');
  var Br2 = document.createElement('BR');
  var Br3 = document.createElement('BR');
  var Br4 = document.createElement('BR');
  var Br5 = document.createElement('BR');
  // Li create elements
  var LI1_1 = document.createElement('LI');
  var LI1_2 = document.createElement('LI');
  var LI1_3 = document.createElement('LI');
  var LI1_4 = document.createElement('LI');
  var LI1_5 = document.createElement('LI');
  // Li content
  LI1_1.innerHTML = '   Inflacion';
  LI1_2.innerHTML = '   Tasa de Interes';
  LI1_3.innerHTML = '   Tipo de Cambio';
  LI1_4.innerHTML = '   Ahorro vs Consumo';
  LI1_5.innerHTML = '   Riesgo-Rendimiento';
  //Li Style
  LI1_1.style.fontSize = '180%';
  LI1_2.style.fontSize = '180%';
  LI1_3.style.fontSize = '180%';
  LI1_4.style.fontSize = '180%';
  LI1_5.style.fontSize = '180%';
  // Append
  getUL.appendChild(Br1);
  getUL.appendChild(Br1_1);
  getUL.appendChild(Br1_2);
  getUL.appendChild(Br1_3);
  getUL.appendChild(Br1_4);
  getUL.appendChild(Br1_5);
  getUL.appendChild(LI1_1);
  getUL.appendChild(Br2);
  getUL.appendChild(LI1_2);
  getUL.appendChild(Br3);
  getUL.appendChild(LI1_3);
  getUL.appendChild(Br4);
  getUL.appendChild(LI1_4);
  getUL.appendChild(Br5);
  getUL.appendChild(LI1_5);
  //Css
  getIMG.style.height = '500px';
}

function ElVdelTemp(){
  geth2.innerHTML = 'Temas'
  getHead.innerHTML = 'El Valor del Dinero en el Tiempo';
  getIMG.src = 'Images/VDET.jpg';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Valor Presente';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Valor Futuro';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Intereses Simples y Compuestos';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Tasa Effectiva Real';
  getUL.getElementsByTagName('li')[4].innerHTML = 'CAT';
}
function Presupuesto(){
  geth2.innerHTML = 'Temas'
  getHead.innerHTML = 'Presupuesto Personal';
  getIMG.src = 'Images/presupuesto.png';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Ingresos y Egresos';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Nominales y Extraodrinarios';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Costo Fijo y Costo Variable';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Costo Semivariable y Semifijo';
  getUL.getElementsByTagName('li')[4].innerHTML = '';
}
