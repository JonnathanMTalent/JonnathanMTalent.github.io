let d = document, ls = localStorage;

export default function darkTheme(btn, classDark) { // classDark esta en dom_ejercicios.css y es dark-theme, es el que cambia todo el estilo
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"); // este atributo data-dark esta presente sólo en los elementos que queremos meter en la lista de nodos, para luego cambiarles la clase segun el modo ligh o dark.

    let space = "🌌",
        sun = "🌤️";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = space;
        ls.setItem("theme", "light");
    };

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }
    //Este listener cambia la clase a la contraria detectando si esta puesto el texto de la luna o del sol.
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            console.log($themeBtn.textContent);
            if ($themeBtn.textContent === space) {
                // $selectors.forEach(el=> el.classList.add(classDark));
                // $themeBtn.textContent=sun;
                darkMode();

            } else {
                // $selectors.forEach(el=> el.classList.remove(classDark));
                // $themeBtn.textContent=space;
                lightMode();
            }
        }
    });

    //LOCAL STORAGE = Ls
    // SE PUEDE VER EL VALOR DE LAS VARIABLES GUARDADAS EN LA CONSOLA EN LA OPCION APLICATION
    d.addEventListener("DOMContentLoaded", (e) => {
        // alert("Hola desde la funcion darktheme");
        // console.log(ls.getItem("theme"));
        if (ls.getItem("theme") === null) ls.setItem("theme", "light");
        if (ls.getItem("theme") === "light") lightMode();
        if (ls.getItem("theme") === "dark") darkMode();
    });

}