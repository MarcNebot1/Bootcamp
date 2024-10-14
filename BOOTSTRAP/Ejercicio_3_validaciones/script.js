// Habilitar la validación de Bootstrap
(function () {
    'use strict';
    var form = document.getElementById('miformulario');
    if (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
})();
