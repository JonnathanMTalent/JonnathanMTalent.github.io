const d = document, w = window;
export default function smartVideo() {
    const $videos = d.querySelectorAll("video[data-smart-video");

    //con estas lineas hacemos que se pause cuando no se ve completamente el video o estamos mas abajo o arriba escrolieando y se reaunude cuando se vea el video 
    const cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play(); // en este caso lo que origina el evento es un video.
            } else {
                entry.target.pause();

            }
            // con estas lineas siguientes hacemos que detecte cuando cambiamos de pestaña y el video se pause.
            w.addEventListener("visibilitychange", e => d.visibilityState === "visible"
                ? entry.target.play()
                : entry.target.pause())
        })
    }

    //! cuando se hace una call back se esta llamando a una funcion como parametro, no necariamente tiene que ver con asincronia.
    const observer = new IntersectionObserver(cb, { threshold: 0.5 }) // este 0.5 permite que empiece a reproducirse el video cuando vaya por un 50% de contenido.
    //esta api intersectionObserver la explicamos mas en la seccion de scrolSpia
    $videos.forEach(el => observer.observe(el));
}