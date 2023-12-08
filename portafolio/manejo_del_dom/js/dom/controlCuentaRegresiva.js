import countdown from "./cuenta_regresiva.js";


const $cuentaRegresivaForm = document.getElementById("cuenta-regresiva");
const $countdown = document.getElementById("countdown");

$cuentaRegresivaForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe

    // Obtiengo los valores de fecha y hora del formulario
    const fecha = $cuentaRegresivaForm.fecha.value;
    const hora = $cuentaRegresivaForm.hora.value;

    // Combino fecha y hora en un formato de fecha válido (por ejemplo, "2023-08-20T15:30")
    const fechaHora = fecha + "T" + hora;

    // Llamo a la función countdown con la fecha y hora válidas
    countdown("countdown", new Date(fechaHora).getTime(), "¡Tiempo Agotado!");
});
