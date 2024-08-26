let isDataVisible = false;

// Función para asignar texto a un elemento
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función para manejar la visibilidad de la imagen y otros elementos
function manejarVisibilidad() {
    let input = document.getElementById('miInput').value;
    let imagen = document.querySelector('.presentacion__imagen');
    let elementosOcultables = document.querySelectorAll('#container_muestra p, #container_muestra h2');

    // Si el input tiene texto, oculta la imagen; de lo contrario, muéstrala
    if (input.trim() === '') {
        imagen.classList.remove('ocultar-imagen');
    } else {
        imagen.classList.add('ocultar-imagen');
    }

    // Muestra u oculta las etiquetas p y h2 basándose en la visibilidad del contenedor
    if (isDataVisible) {
        elementosOcultables.forEach(element => {
            element.classList.add('ocultar-elementos');
        });
    } else {
        elementosOcultables.forEach(element => {
            element.classList.remove('ocultar-elementos');
        });
    }
}

// Función para validar el input
function validarInput(input) {
    const regex = /^[a-z0-9\s]+$/; // Solo permite minúsculas y espacios
    return regex.test(input);
}

// Evento para el botón de encriptar
document.getElementById('B_encriptar').addEventListener('click', function() {
    let input = document.getElementById('miInput').value;

    if (!validarInput(input)) {
        alert("Error: Solo se permiten letras minúsculas y espacios.");
        return;
    }

    asignarTextoElemento('#miH1', input);
    manejarVisibilidad();
});

// Evento para el botón de desencriptar
document.getElementById('B_desencriptar').addEventListener('click', function() {
    let containerMuestra = document.getElementById('container_muestra');
    isDataVisible = !isDataVisible;

    containerMuestra.style.display = isDataVisible ? 'block' : 'none';
    this.textContent = isDataVisible ? 'Ocultar Datos' : 'Mostrar Datos';

    manejarVisibilidad();
});

// Maneja la visibilidad de la imagen y otros elementos cuando se carga la página
document.addEventListener('DOMContentLoaded', manejarVisibilidad);
