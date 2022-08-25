

const h1 = document.querySelector('h1');
const formu = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const ultimo = document.querySelector('#ident');




//addEventListener = es un escuchador de eventos  y cada vez que pase ejecuta el codigo escirt qu ele diga siempre hay que enviarle 
//dos argumentos primero nombre de evento y segundoo codigo java script
//solo nombre de funcion  sin los parentesis

//colocar que selector vamos a trabjar, 2.)el listener 3.)cuall evento en este caso el sbmut  4)funcion java script

form.addEventListener('submit',sumarInputValues);

function sumarInputValues(event){

   // console.log({event});
    event.preventDefault(); //forma de evitar que se auto recargue
    const  sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado:" + sumaInputs;

    const mostrar = input1.value ;
    ultimo.innerText = "Resultado:" + mostrar;

}