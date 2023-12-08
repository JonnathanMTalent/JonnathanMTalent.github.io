export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;
    d.addEventListener("click", (e) => { // en la siguiente linea, dejar espacio antes del asterisco, para que funcione el selector css, esto es porque matches recibe selectores del tipo css
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {  //e es event, target: elemento que origino el evento, matches:coincide.. si se le pone el * al selector este permite tomar todo lo que contenga ese selector dentro
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });
}

