const d = document,
    w = window,
    n = navigator; // Existe la propiedad navigator.online que dice si tenemos internet o no.

export default function networkStatus() {
    const isOnLine = () => {
        const $div = d.createElement("div"); // Genera espontaneamente un elemento en la pantalla.
        if (n.onLine) {
            $div.textContent = "Conexión Reestablaecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexión Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        //d.body.insertAdjacentElement("afterbegin", $div); // Agrega un elemento en el html en este caso el div que generamos antes.
        // setTimeout(() => d.body.removeChild($div), 5000); // Quita el elemento que pusimos en el dom a los 5 segundos.

        d.body.insertAdjacentElement("beforebegin", $div); // Agrega un elemento en el html en este caso el div que generamos antes.
        setTimeout(() => d.body.appendChild($div), 5000);
        setTimeout(() => d.body.removeChild($div), 5000); // Quita el elemento que pusimos en el dom a los 5 segundos.
    }
    // w.addEventListener("online", e => console.log(n.onLine));
    // w.addEventListener("offline", e => console.log(n.onLine));
    w.addEventListener("online", e => isOnLine());
    w.addEventListener("offline", e => isOnLine());
}

// // se puede simular que se apaga el internet en el navegador en la parte Aplication-serviceWorkers opcion ofline