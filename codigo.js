const btnCierre = document.querySelector('.cierre');
const sombra = document.querySelector('.sombra');
const img = document.querySelectorAll('.img');
const imgPrincipal = document.querySelector('.img-principal');
const articulomove = document.querySelector('.articulo');




img.forEach(imagen =>{

	imagen.addEventListener('click',()=>{
         imgSrc(imagen.getAttribute('src'));
	
	})

	btnCierre.addEventListener('click',()=>{
         sombra.classList.toggle('sombra-move');
        
        });     // FUNCIONALIDAD PARA LIGTHBOX
     
   
});


const imgSrc = (src)=>{
       
      sombra.classList.toggle('sombra-move');
         imgPrincipal.src = src; // FUNCIONALIDAD PARA LIGTHBOX
 

};  



