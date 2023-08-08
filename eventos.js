document.addEventListener('DOMContentLoaded', function(){
    const element = document.getElementsByTagName("div")[0];
    const boton = document.getElementById('boton');
    element.addEventListener("click", function(ev) {
        //if(ev.target != boton){
            alert("Hola! Soy el div");
        //}
        ev.stopImmediatePropagation();
    }); 
})
