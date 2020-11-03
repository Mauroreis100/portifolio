var hamburger = document.querySelector(".hamburger"); /*variaver, document query selector para pegar o menu*/ 

hamburger.addEventListener("click", function(){ /*Hamburger es´ta a espera de um? Click*/
document.querySelector(".sidebar").classList.toggle("show-menu"); /*Está a dizer que a variavel Sidebar, documant.query=pega o sidebar de lá do html faz o que? shows menu*/


/*MAKE SURE JAVASCRIPT FILE ESTÁ DENTRO DA PASTA DAS CENAS*/




});
var hamburger1=document.querySelector(".hamburger");

hamburger1.addEventListener("click", function(){ 
    document.querySelector(".hamburger").classList.toggle("close-menu");
});