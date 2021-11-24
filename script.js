console.log("Script loaded")
var formulario = document.getElementById("form-1")


formulario.addEventListener("submit", function(event){
	var name = formulario.elements["name"].value
	event.preventDefault();
	const data = 
	console.log("submit")
})

var getData = function(){
var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastname").value;
document.getElementById('display').innerHTML = 
                    nombre+" - "+apellido;
console.log(nombre+"-" +apellido);
}