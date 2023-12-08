
export function visibleOculto() {
    const BtnOcultar = document.getElementById("BtnOcultar");
    const elemento = document.getElementById("mostrar-ocultar");

    BtnOcultar.addEventListener("click", () => {
        if (elemento.classList.contains("hidden")) {
            elemento.classList.remove("hidden");
        } else {
            elemento.classList.add("hidden");
        }
    });
}

export function ocultar(classn) {
    document.querySelectorAll(classn).forEach((elem) => { elem.style.display = 'none' });
}