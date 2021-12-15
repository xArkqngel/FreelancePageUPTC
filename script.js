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

function swapX() {
    var x = document.getElementById("service1");
	x.style.backgroundColor = "#0097A7";
}

const list = []

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const data1 = Object.fromEntries(new FormData(event.target).entries())

    formulario.elements['name'].value = ""
    formulario.elements['lastname'].value = ""
    formulario.elements['pass'].value = ""

    list.push(data1)
	console.log(list)
    localStorage.setItem('users', JSON.stringify (list)) 

    let dataStorage = localStorage.getItem('users')
    console.log( JSON.parse(dataStorage))
})

