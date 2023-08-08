document.addEventListener('DOMContentLoaded', function(){
    const element = document.getElementsByTagName("div")[0];
    element.addEventListener("click", function() {
        alert("Hola! Soy el div");
    }); 
})
