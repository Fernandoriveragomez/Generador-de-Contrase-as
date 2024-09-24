// Función para generar una contraseña aleatoria
function generarContrasena(longitud) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];\',./`~';
    let contrasena = '';
    
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres[randomIndex];
    }
    
    return contrasena;
}

// Obtener elementos del DOM
const inputCantidad = document.getElementById('cantidad');
const inputContrasena = document.getElementById('contrasena');
const botonGenerar = document.getElementById('generar');

// Agregar evento al botón de generar
botonGenerar.addEventListener('click', () => {
    const cantidad = parseInt(inputCantidad.value); // Obtener la cantidad de caracteres
    if (!isNaN(cantidad)) {
        if (cantidad >= 8) {
            const nuevaContrasena = generarContrasena(cantidad);
            inputContrasena.value = nuevaContrasena; // Mostrar la contraseña en el campo de texto
        } else {
            alert('La contraseña debe tener al menos 8 caracteres.');
        }
    } else {
        alert('Por favor, ingresa una cantidad válida.');
    }
});
