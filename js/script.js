const hamburguesa = document.querySelector(".menu-hamb");
const navMenu = document.querySelector(".navbar-pags");

hamburguesa.addEventListener("click", () => {
    hamburguesa.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".no-drop, .desplegable-sub-item, .desplegable-item").forEach(n => n. addEventListener("click", () => {
    hamburguesa.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Funcion para hacer el efecto de desplegable.

function desplegar(desplegable){
	// Array de uls que se deben desplegar.
	var elementos = [
		'desplegable_productos',
		'desplegable_nosotros',
		'desplegable_living',
		'desplegable_comedor',
		'desplegable_dormitorio',
		'desplegable_cocina',
		'desplegable_varios',
	];

	// Switch para seleccionar elemento segun el parametro de la funcion.
	switch (desplegable) {
		case 'productos':
			var elementAct = 'desplegable_productos';
			var altura = 250;
			break;
		case 'nosotros':
			var elementAct = 'desplegable_nosotros';
			var altura = 150;
			break;
		case 'living':
			var elementAct = 'desplegable_living';
			var altura = (window.matchMedia("(max-width: 768px)").matches) ? 100 : 130;
			break;
		case 'comedor':
			var elementAct = 'desplegable_comedor';
			var altura = (window.matchMedia("(max-width: 768px)").matches) ? 70 : 100;
			break;
		case 'dormitorio':
			var elementAct = 'desplegable_dormitorio';
			var altura = (window.matchMedia("(max-width: 768px)").matches) ? 190 : 250;
			break;	
		case 'cocina':
			var elementAct = 'desplegable_cocina';
			var altura = (window.matchMedia("(max-width: 768px)").matches) ? 130 : 180;
			break;
		case 'varios':
			var elementAct = 'desplegable_varios';
			var altura = 150;
			break;		
	}
	// Variable de seleccion del <ul> a desplegar.
	var element = document.getElementById(elementAct);

	// Cambio de estilos para hacer el efecto desplegable, junto con el cierre de los demas elementos.
	if (element.getAttribute('state') == 'closed') {
		element.style.height = altura+'px';
		element.setAttribute('state', 'opened');

		for (var i = 0; i < elementos.length; i++) {
			if (elementos[i] != elementAct) {
				document.getElementById(elementos[i]).style.height = '0px';
				document.getElementById(elementos[i]).setAttribute('state', 'closed');
			}
		}
	}else {
		element.style.height = '0px';
		element.setAttribute('state', 'closed');
	}
}

var btnDescr = [...document.querySelectorAll(".btn-descripcion")];

btnDescr.map(btn => btn.addEventListener('click',() => {
	var target	= btn.getAttribute('desc-target');
	document.getElementById(target).style.display = "flex";
}));

var btnClose = [...document.querySelectorAll(".close")];

btnClose.map(btn => btn.addEventListener('click',() => {
	var target	= btn.getAttribute('desc-target');
	document.getElementById(target).style.display = "none";
}));

