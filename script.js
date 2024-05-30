const boton01 = document.getElementById('boton01'); //recojo el elemento del botón que desata el evento click
const contenedor01 = document.getElementById("contenedor01"); //recojo el contenedor donde quiero volcar la información

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function(){
    if (xmlhttp.status == 200){
        var htmlRecibido = xmlhttp.responseText;                
        contenedor_consultas.innerHTML=htmlRecibido;
    }
}
xmlhttp.open("POST", './app.php');
xmlhttp.send();

contenedor_consultas.innerHTML='<span>CARGANDO DATOS...</span>';