const d = document, n = navigator;
export default function webCam(id) {
    const $video = d.getElementById(id);
    // console.log(n.mediaDevices.getUserMedia);
    if (n.mediaDevices.getUserMedia) { //comprueba si existe
        n.mediaDevices.getUserMedia({ video: true, audio: false })  //como esto es una promesa se pueden usar los métodos then y catch para que en then si no hay error ejecute el codigo y en catch atrape el error.
            .then((stream) => {// En este caso el strem son los chorros de informacion que genera la cámara web.
                console.log(stream);
                $video.srcObject = stream; //estamos devolviendo el objeto stream completo en el atributo srcObject.
                $video.play(); // si no se colocara esta línea solamente tomaria una foto. pero con ella se ve un video.
            })
            .catch((error) => {
                $video.insertAdjacentHTML(
                    "afterbegin",
                    `<p><mark>Sucedio el siguiente error: ${error}</mark></p>`
                ); // muestra un mensaje adyacente a el elemento video.
                console.log(`Sucedio el siguiente error: ${error}`);
            }); //el error sera el caso en el que no acceda  a al cámara web.
    }
}