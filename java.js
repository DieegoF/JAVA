let stats = document.querySelector('.status');
	let text = document.getElementById('text');
	let letras = document.getElementById('letras');
    let lineas = document.getElementById('lineas');
	let simbolos = document.getElementById('simbolos');
		function count() {
		if(text.value.length === 0){ 
			stats.style.display = "none";
		}
		else{
			stats.style.display = "block";
			
		letras.innerHTML = text.value.length + " letras"; //letras
		lineas.innerHTML = text.value.split("\n").length + " lineas"; //lineas
		simbolos.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " simbolos"
		}
	}
text.addEventListener("input", count);