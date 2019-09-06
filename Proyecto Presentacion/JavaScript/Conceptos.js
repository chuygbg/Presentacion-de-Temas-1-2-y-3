var getHead = document.getElementById('DisplayHeading');
var getUL = document.getElementById('Displayul');
var geth2 = document.getElementById('Displayh2');
var getIMG = document.getElementById('b1IMG');
function tema1(){
  getHead.innerHTML = 'Inflacion';
  geth2.innerHTML = 'Que es la inflacion?';
  getIMG.src = 'Images/inflacion.gif';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Indica crecimiento generalizado de los precios';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Indice de Precios al Consumo (IPC)';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Causado por:';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Desequilibrio en la cantidad de bienes y servicios';
  getUL.getElementsByTagName('li')[4].innerHTML = 'Rumores e incremento general de precios';
  //Css formation
  getUL.getElementsByTagName('li')[3].style.fontSize = '100%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '100%';
  getIMG.style.height = '80%';
}
function tema2(){
  getHead.innerHTML = 'Tasa de Interes';
  getIMG.src = 'Images/TIIE.png';
  geth2.innerHTML = 'Que es la Tasa de Interes?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Indicador de Rentabilidad de ahorro o Inversion';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Es controlado por el banco central del pais';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Classificaciones:';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Bancarias';
  getUL.getElementsByTagName('li')[4].innerHTML = 'De acuerdo a la tasa de inflacion';
  //aditional LIs
  var Subli1 = document.createElement('li');
  var Subli2 = document.createElement('li');
  Subli1.setAttribute('id','Subli1');
  Subli2.setAttribute('id','Subli2');
  Subli1.innerHTML = 'deacuerdo a la estabilidad';
  Subli2.innerHTML = 'Tasa de Interes interbancaria de equilibrio';
  //css atributes
  getUL.getElementsByTagName('li')[0].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[1].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[2].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[3].style.fontSize = '125%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '125%';
  getIMG.style.height = '80%';
  getUL.getElementsByTagName('li')[4].style.lineHeight = '150%';
  getUL.getElementsByTagName('li')[3].style.lineHeight = '150%';
  getUL.getElementsByTagName('li')[2].style.lineHeight = '100%';
  getUL.getElementsByTagName('li')[4].style.marginLeft = '10%';
  getUL.getElementsByTagName('li')[3].style.marginLeft = '10%';
  // apended CSS
    Subli1.style.fontSize = '125%';
    Subli1.style.lineHeight = '100%';
    Subli1.style.marginLeft = '10%';
    Subli2.style.fontSize = '150%'
  // Apendix
  getUL.appendChild(Subli1);
  getUL.appendChild(Subli2);
}
function tema3(){
  // Elimineate Subli
  document.getElementById('Subli1').innerHTML = '';
  document.getElementById('Subli2').innerHTML = '';
  //normal script
  getHead.innerHTML = 'Tasa de Cambio';
  getIMG.src = 'Images/TasaDeCambio.jpg';
  geth2.innerHTML = 'Que es la Tasa de Cambio?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Tasa de intereses interbancaria';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Representa la tasa pactada entre distintos bancos';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Sirven para fija tasas de interes comercial y se calcula en plazos de 28, 91 y 182 dias';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Tipo de Cambio';
  getUL.getElementsByTagName('li')[4].innerHTML = 'Es una referencia para saber cuantas unidades de una moneda nacional se deben de pagar por una moneda foranea';
// css
  getIMG.style.height = '500px';
  getUL.getElementsByTagName('li')[0].style.fontSize = '200%';
  getUL.getElementsByTagName('li')[1].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[2].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[1].style.lineHeight = '100%';
  getUL.getElementsByTagName('li')[1].style.marginLeft = '10%';
  getUL.getElementsByTagName('li')[2].style.marginLeft = '10%';
  getUL.getElementsByTagName('li')[3].style.fontSize = '200%';
  getUL.getElementsByTagName('li')[3].style.marginLeft = '0%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[2].style.marginLeft = '10%';

}
function tema4(){
  getHead.innerHTML = 'Ahorro vs Consumo';
  getIMG.src = 'Images/Dinero.jpg';
  geth2.innerHTML = 'Cual es la diferencia';
  getUL.getElementsByTagName('li')[0].innerHTML = 'Ahorro';
  getUL.getElementsByTagName('li')[1].innerHTML = 'Es Separar parte de tus ingresos con el fin de usarlos en el futuro';
  getUL.getElementsByTagName('li')[2].innerHTML = '';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Consumo';
  getUL.getElementsByTagName('li')[4].innerHTML = 'Es el acto de utilizar dinero para conseguir un bien o servicio';
 // css
  getUL.getElementsByTagName('li')[1].style.fontSize = '150%';
  getUL.getElementsByTagName('li')[4].style.fontSize = '150%';
}
function tema5(){
  getHead.innerHTML = 'Riesgo-Rendimiento';
  getIMG.src = 'Images/Riesgo.jpg';
  geth2.innerHTML = 'Entre Mayor Riesgo Mayor Recompensa?';
  getUL.getElementsByTagName('li')[0].innerHTML = 'De donde surge el Riesgo?';
  getUL.getElementsByTagName('li')[1].innerHTML = 'En desiciones inversion y financiamiento';
  getUL.getElementsByTagName('li')[2].innerHTML = 'Surgen del: Mercado, operacion, liquidez y credito';
  getUL.getElementsByTagName('li')[3].innerHTML = 'Que es el Rendimiento?';
  getUL.getElementsByTagName('li')[4].innerHTML = 'Surge de la ganancia que generan las operaciones (Mostrar Matematicas)';
    getUL.getElementsByTagName('li')[1].style.lineHeight = '200%';
}
