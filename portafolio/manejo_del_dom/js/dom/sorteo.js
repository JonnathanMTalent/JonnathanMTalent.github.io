const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector), // esto seraia una lista de nodos del dom
            random = Math.floor(Math.random() * $players.length), // genera un numero aleatorio basado en la cantidad de elementos de la lista.
            winner = $players[random]; // guarda en una variable el elemento de la lista de nodos del dom que tiene la posicion ramdom

        // console.log($players, random, winner);
        // return `El ganador es : ${winner.textContent}`; // como winner es un nodo, hay que sacarle el textContent.
        enviarMensaje(winner.textContent, winner.getAttribute("url"));
    }

    function enviarMensaje(mensaje, url) {
        let c = confirm(`el ganador es ${mensaje} Al dar aceptar se abrira una nueva pestaña para ver el video sobre este tema.`);
        console.log(c);
        if (c == true) {
            return window.open(url);
        } else { return "gracias" }
    }

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            // alert(result);
            // console.log(result);
        }
    });
}




// // FUNCION para poner en youtube, facebook o cualquier otra y escojer un texto de un nodo aleatorio.
// const getWinnerComment = (selector) => {
//     const $players = document.querySelectorAll(selector), // esto seraia una lista de nodos del dom
//         random = Math.floor(Math.random() * $players.length), // genera un numero aleatorio basado en la cantidad de elementos de la lista.
//         winner = $players[random]; // guarda en una variable el elemento de la lista de nodos del dom que tiene la posicion ramdom

//     return `El ganador es : ${winner.textContent}`; // como winner es un nodo, hay que sacarle el textContent.
// }