const d = document;
export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester; // En esta variable vamos a almacenar el elemnto para abrir y cerra el window que se usará.(window.open  de la ventana donde vamos a abrir la ventana del responsive tester)
    $form.addEventListener("submit", (e) => {
        e.preventDefault(); //Previene que se auto procese la pagina ya que el form no tiene nada en el action, en este caso la url no tendra los parametros ingresados en el form.
        console.log("form submit del test responsivo")
        if (e.target === $form) { //Esta es otra forma de evaluar desde dónde se origino el evento. Parecido a e.target.matches

            // e.preventDefault(); //Previene que se auto procese la pagina ya que el form no tiene nada en el action, en este caso la url no tendra los parametros ingresados en el form.
            tester = window.open($form.direccion.value, "tester", `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);
        }
    });
    $form.addEventListener("click", (e) => {
        if (e.target === $form.cerrar) tester.close(); // cierra la ventana que se abrió.

    })
}