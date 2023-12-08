const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo; //Gaardaremos aqui el intervalo para poder desactivarlo luego con un clear interval
    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString(); // este formato es el de hora sencillo , es ideal para mostrar hora.
                d.querySelector(clock).innerHTML = `<h3> ${clockHour}</h3>`
            }, 1000);

            e.target.disabled = true; // Desactivar el boton de Activar reloj
            //ya que este fue el que origino el evento.
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo); // Borramos el set interval que esta actualizando la hora segundo a segundo.
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false; //Activa nuevamente el boton activar reloj
        }
    })
}
export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement("audio"); //Estamos generando un elemento html de manera dinamica para que no sea todo el tiempo visible en la interfaz del usuario.
    $alarm.src = sound;//Estamos poniendo en el atributo src la ruta que viene en la variable sound de la funcion, esta ruta es donde esta guardado el sonido.
    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 2000);
            e.target.disabled = true; // deshabilita el boton que origino el evento, en este caso alarma
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo); // como la alarma se origino dentro de un settime out, detiene este settimeout
            $alarm.pause(); // pausa la alarma donde va el sonido API DE AUDIO DE JS.
            $alarm.currentTime = 0; // coloca el tiempo de reproduccion en 0 o inicial.
            d.querySelector(btnPlay).disabled = false; //Activa nuevamente el boton activar reloj
        }
    })
}