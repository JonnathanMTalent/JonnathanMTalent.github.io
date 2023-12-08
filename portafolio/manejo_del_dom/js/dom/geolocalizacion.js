const d = document, n = navigator;
export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,  // se pide que el dispositivo tome la mejor lectura(gps o tarjeta inalambrica) 
            timeout: 5000, // Cuanto tiempo espera para tomar la lectura.
            maximunAge: 0 // para que no se guarde en cache las lecturas. No toma como referencia la lectura anterior.
        };
    const succes = (position) => {
        // let coords = position.coords;
        console.log(position);
        $id.innerHTML = `
        <p>Tu posicion actual es:</p>
        <ul class="clean-ul">
            <li>Latitud:<b>${position.coords.latitude}</b></li>
            <li>Longitud:<b>${position.coords.longitude}</b></li>
            <li>Precisión:<b>${position.coords.accuracy}</b> metros.</li>
        </ul>
        <a class="blue-btn" href="https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps </a>
        `;
        // la posicion mas alejada es 1z , la mas cercana es 20z
    };
    const error = (err) => {
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error ${err.code}: ${err.message}`);
    };
    //Esta funcion da la posicion actual:
    n.geolocation.getCurrentPosition(succes, error, options); // Ejecuta 3 funciones: una en caso de exito, otra en caso de error y las opciones (dentro de un objeto)

    // // n.geolocation.watchPosition(succes, error, options);
    // Este otro metodo daria la posicion en tiempo real.
} 
