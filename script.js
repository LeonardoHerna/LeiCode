//Seleccion de elementos
const btn = document.getElementsByClassName('btn');
const display = document.querySelector('.display');
  
display.innerText = 0;

btnArray = Array.from(btn); //Convertimos variable a array


btnArray.forEach(button =>{   //Iteramos array con forEach
          
          button.addEventListener('click', ()=>{  //Agregamos un Evento a cada button
             
                calculadora(button,display);
       


          });

});

   
function calculadora (button,display) {  //Function calculadora, tomando button y display por parametro
      
      switch(button.innerText) { //Usamos un switch que consulte por el contenido del button para ejecutar function
          case 'C':
           borrar(display);
           break;
          case '=':
           calcular(display); 
           break;
          default:
           actualizarDisplay(display,button);
           break;   
      }

};

function calcular  (display) { //Calcula con function eval(), el valor del display
      

     display.innerText = eval(display.innerText);
};

function borrar (display) { //Borra el contenido del display, agregando el numero 0
         
         display.innerText = 0;
};

function actualizarDisplay (display,button) { //Actualiza el display, agregando la operacion
           
           if (display.innerHTML == 0 ) {

                display.innerHTML = '';
           } 

            display.innerText += button.innerText;
          
};









