// Habilitar la validación de Bootstrap
(() => {
    'use strict';

    const form = document.getElementById('miformulario') as HTMLFormElement;

    if (form) {
        form.addEventListener('submit', (event: Event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
})();