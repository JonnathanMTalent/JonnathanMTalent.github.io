const d = document;

export default function contactFormAjax() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]") // trae los que tengan el atributo required
    // console.log($inputs)
    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name; //al nuevo span que estamos generando le ponemos como id a ese elemento input.name que viene en cada elemento input de la lista de inputs.
        $span.textContent = input.title; // estamos poniendo como texto del span nuevo el title que viene en cada input.
        $span.classList.add("contact-form-error", "none"); // le agregamos a cada span las dos clases puestas para que aplique el estilo css

        input.insertAdjacentElement("afterend", $span); // estamos insertando cada span justo debajo de cada input respectivo.


        //cuando se suelte una tecla escucha el evento, si este en su nodo tiene alguna coincidencia con la clase y atrubuto ingresados
        d.addEventListener("keyup", (e) => {

            if (e.target.matches(".contact-form [required]")) {
                let $input = e.target, //se puso esto con el fin de ahorrar espacio.
                    pattern = $input.pattern || $input.dataset.pattern; // como el text area no tiene pattern entonces validara a la otro opcion.
                // como el textarea no acepta pattern se le inventó un atributo data pattern
                // console.log($input, pattern);

                //! En este caso no se uso el if-else para adicionar el caso donde el usuario no ha escrito nada, para que no se muestre ese mensaje rojo antes de que el usuario haya escrito algo.
                //mostrara el letreror rojo de error solo si el usuario ya escribio algo.
                if (pattern && $input.value !== "") {
                    // console.log("El input tiene patrón");
                    let regex = new RegExp(pattern);
                    return !regex.exec($input.value) // esta linea indica que si lo que escribio el usuario $input.value cumple la expresion regular del pattern (que en este caso es el regex) entoces segun el caso activa o desactiva el mensaje en su lista de clases(usamos operador ternario):
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");

                }

                if (!pattern) {
                    // console.log("El input no tiene patrón");
                    return $input.value === ""// esta linea indica que si lo que escribio el usuario es diferente de vacio, entoces segun el caso activa o desactiva el mensaje en su lista de clases(usamos operador ternario):
                        ? d.getElementById($input.name).classList.add("is-active")
                        : d.getElementById($input.name).classList.remove("is-active");
                }
            }
        })
    });
    //aqui es donde cargara el formulario
    $form.addEventListener("submit", (e) => {
        //hay que desactivar el prevent default para que se pueda enviar realmente el correo.
        e.preventDefault();  //muy umportante prevenir el comportamiento por default
        // alert("Enviando Formulario");
        // console.log("formsubmit event");
        const $loader = d.querySelector(".contact-form-loader"), // aqui atrapamos el nodo del loader que es la imagen  que muestra carga
            $response = d.querySelector(".contact-form-response"); //aqui atrapamos el nodo del texto de respuesta de envio
        $loader.classList.remove("none"); // removemos el none, para que ahora si se vea el loader.

        fetch("https://formsubmit.co/ajax/jhonnnario@gmail.com", {
            method: "POST",
            body: new FormData(e.target) // parsea los elementos que vienen en los input del form, los cuales tienen que tener su atributo name establecido
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json);
                $loader.classList.add("none"); // estamos jugando con mostrar y no mostrar el loader y la respuesta para simular el llamado ajax
                $response.classList.remove("none");
                $response.innerHTML = `<p>${json.message}</p>`;
                $form.reset(); // se resetea el formulario.
            })
            .catch(err => {
                console.log(err);
                let message = err.status.Text || "Hubo un error, intenta otra vez";
                $response.innerHTML = `<p> Error ${err.status}:${message} </p>`;
            })
            .finally(() => setTimeout(() => {
                $response.classList.add("none");
                $response.innerHTML = "";
            }, 5000));
    });

}