//CAMBIA EL TEMA DE LA PAGINA Y CAMBIA LOS ICONOS
document.querySelector('.mode-button').addEventListener('click', function() {
    toggleDarkMode();
});

function toggleDarkMode() {
    const body = document.body;
    const modeButton = document.querySelector('.mode-button');
    body.classList.toggle('light-mode');

    // Cambiar el ícono del botón según el modo actual
    if (body.classList.contains('light-mode')) {
        modeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        modeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

//REALIZA EL ZOOM Y CAMBIA EL CURSOR EN LA IMAGEN DE PERFIL
document.addEventListener('DOMContentLoaded', function () {
    const zoomImage = document.getElementById('zoom-image');

    zoomImage.addEventListener('click', function () {
        this.classList.toggle('zoomed');

        if (this.classList.contains('zoomed')) {
            this.style.cursor = 'zoom-out';
        } else {
            this.style.cursor = 'zoom-in';
        }
    });
});

