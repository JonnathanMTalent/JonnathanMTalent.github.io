const d = document;
export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]"); // esto guarda los nodos de las section osea dondes esta el contenido para que cada que pase por ahi los detecte
    const cb = (entries) => { // esta funcion es la que se va a ejecutar en cada nuevo resultado del observador.
        // console.log("entries", entries); 
        entries.forEach(entry => { // por cada elemento entrante en la funcion desde observer se ejecuta:
            // console.log("entry", entry);
            const id = entry.target.getAttribute("id"); // como el entry.target es quien origino el evento y es un nodo podemos acceder a su atributo id
            if (entry.isIntersecting) { // si una entrada es interseptada..
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
                    .classList.add("active"); // agreaga a ese elemento del dom en este caso la lista del menu el atributo active.
            } else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`)
                    .classList.remove("active"); // quita a ese elemento del dom en este caso la lista del menu el atributo active.  
            }

        });
    }
    const observer = new IntersectionObserver(cb, {
        // root  // esta propiedad mide el scroll , en este caso si no ponemos esto toma por defecto el document
        //rootMargin: "-250px" // forzozamente tiene que ser en pixeles. al poner uno solo esto hace que los cuatro margenes top, righ,buttom, left sean iguales a esa cifra.
        //se toma en negativo porque toma el margen hacia adentro, entonces es mas preciso.
        //ya con esta propiedad y en ese valor serviria para iluminar un solo elemento del menu y no varios.
        // threshold: 0.5 //threshold significa limite, en este caso estamos viendo el 50%
        threshold: [0.5, 0.75] //threshold significa limite, en este caso estamos viendo entre el 50% yel 75%.
        // es mejor esta otra opcion porque al ser por porcentajes es mas fiable que por pixeles ya que hay pantallas muy grandes donde puede caber todo.
    });
    // console.log("observer", observer);
    $sections.forEach(el => observer.observe(el))  // Aqui damos la orden de que observe las secions del html
}