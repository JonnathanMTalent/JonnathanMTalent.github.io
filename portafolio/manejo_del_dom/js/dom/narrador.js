const d = document,
    w = window;
export default function speechReader() {
    //atrapamos los nodos del dom
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance(); //api: esto permite interactuar con las voces del sistema imteractivo.
    //console.log(speechMessage);
    let voices = []; // las voces son una especie de node-list que vienen en un arreglo
    //las voces cuelgan del window, en speechSyntesis   los llamo con .getVoices()
    d.addEventListener("DOMContentLoaded", (e) => { // este evento domContentLoaded no se puede ejecutar dentro de otro mismo.
        // console.log(w.speechSynthesis);
        // console.log(w.speechSynthesis.getVoices());
        //! es necesario ejecutar este evento voiceschangedpara poder ejecutar luego el getVoices:
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            console.log(e);
            voices = w.speechSynthesis.getVoices();
            // console.log(voices);

            voices.forEach(voice => {
                const $option = d.createElement("option"); // generamos dinamicamente el espacio para cada opcion dentro de la caja de opciones por cada elemento que tenga el array voices .
                $option.value = voice.name; // en cada casilla metemos el valor del nombre de cada opcion respectiva, para que al darle click la seleccione.  
                $option.textContent = `${voice.name} *** ${voice.lang}`; // ponemos en el texto de cada opcion el nombre y el idioma.
                $speechSelect.appendChild($option); // esto coloca finalmente las opciones en el menu.

            })
        });
    });

    //cada que cambie el change puede cambiar la voz:
    d.addEventListener("change", (e) => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find( // el spechMessage es la instancia de el api de voz que estamos usando.
                (voice) => voice.name === e.target.value // estamos colocando en el valor voice del api  de voz un elemento del array voice que coincida con el value del elemento que origino el evento. Asi estamos colocando la voz respectivamente seleccionada.
            );
        }
        console.log(speechMessage);
    });

    //para cuando le de click el narrador lea el texto:
    d.addEventListener("click", (e) => {
        if (e.target === $speechBtn) { // si el elemento que origino el click es el btn de hablar..
            speechMessage.text = $speechTextarea.value; // ponemos en la propiedad text lo que este puesto en el text area
            w.speechSynthesis.speak(speechMessage); // Damos la orden al api de empezar a hablar.
        }
    });
}
