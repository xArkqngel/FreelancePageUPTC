console.log("Script loaded")
var formulario = document.getElementById("form-1")
var color = document.getElementById()


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

function swapX() {
    var x = document.getElementById("clients");
	x.style.backgroundColor = "#0097A7";
}

function swapY() {
    var x = document.getElementById("clients1");
	x.style.backgroundColor = "#0097A7";
}

function swapZ() {
    var x = document.getElementById("clients2");
	x.style.backgroundColor = "#0097A7";
}