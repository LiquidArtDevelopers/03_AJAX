
const boton01 = document.getElementById('boton01'); 
const boton02 = document.getElementById('boton02'); 
const contenedor01 = document.getElementById("contenedor01"); //recojo el contenedor donde quiero volcar la información



boton01.addEventListener("click", function(){

    /* desde aquí */
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        if (xmlhttp.status == 200){
            let valorRecibido = xmlhttp.response;                
            contenedor01.innerHTML=valorRecibido;
        }
    }
    xmlhttp.open("POST", "./app.php?tipo=usuarios", true);    
    xmlhttp.send();
    /* hasta aquí */
    contenedor01.innerHTML='<span>CARGANDO DATOS...</span>';

})

boton02.addEventListener("click", function(){

    /* desde aquí */
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function(){
        if (xmlhttp.status == 200){
            let valorRecibido = xmlhttp.response;                
            contenedor01.innerHTML=valorRecibido;
        }
    }
    xmlhttp.open("POST", "./app.php?tipo=consutas", true);    
    xmlhttp.send();
    /* hasta aquí */
    contenedor01.innerHTML='<span>CARGANDO DATOS...</span>';

})



