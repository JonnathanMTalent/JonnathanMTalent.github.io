const d = document;

export default function searchFilters(input, selector) {
    d.addEventListener("keyup", (e) => { // keyup es que espera hasta que el usuario haya terminado de teclear
        if (e.target.matches(input)) {  // si lo que origino el evento es el nodo con clase (lo que venga en el parámetro input) entonces...;
            // console.log(e.key); // key es la tecla que se presionó. 
            //console.log(e.target.value); // muestra el valor que se escribio completamente. Se actualiza en cada tecleada.
            if (e.key === "Escape") e.target.value = ""; // cuando presione escape el texto de busqueda se vuelve "" por lo que muestra nuevamente todo.


            d.querySelectorAll(selector).forEach((el) =>
                el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) // includes da un booleano si el string existe.
                    ? el.classList.remove("filter") // en caso afirmativo quita la clase filter, por lo cual se mostrará ese elemento ya que dicha clase tiene un display none en el css.
                    : el.classList.add("filter") // no se mostrarán esos elementos por lo mismo de arriba.
            );
        }
    });
}