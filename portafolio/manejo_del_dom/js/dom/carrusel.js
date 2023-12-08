// const d = document;

// export default function slider() {
//     var i = 0;
//     const $nextBtn = d.querySelector(".slider-btns .next"), // es muy importante dejar estos espacios en las clases
//         $prevBtn = d.querySelector(".slider-btns .prev"),
//         $slides = d.querySelectorAll(".slider-slide");

//     d.addEventListener("click", (e) => {
//         if (e.target === $prevBtn) {
//             e.preventDefault(); // con esto prevenimos el comportamiento por defecto, hacemos que no se vaya hacia arriba el documento.
//             console.log("i=", $slides[i]);
//             $slides[i].classList.remove("active"); // al elemento con la posicion i le quita el active
//             i--;
//             if (i < 0) {  // cuando i sea menor que cero se la cambia el valor para que i valga la posicion del ultimo elemento y asi vuelva a recorrer todo.
//                 i = $slides.length - 1;
//             }
//             $slides[i].classList.add("active");
//         }

//         if (e.target === $nextBtn) {
//             e.preventDefault(); // con esto prevenimos el comportamiento por defecto, hacemos que no se vaya hacia arriba el documento.
//             $slides[i].classList.remove("active"); // al elemento con la posicion i le quita el active
//             i++;
//             if (i == $slides.length) {  // cuando i sea igual a la cantidad de nodos es porque llegó al ultimo , por tanto lo reiniciamos a cero.
//                 i = 0;
//             }
//             $slides[i].classList.add("active");
//         }
//     })
// }

const d = document;

export default function slider() {
    var i = 0;
    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide");

    function showSlide(index) {
        $slides.forEach((slide) => slide.classList.remove("active"));
        $slides[index].classList.add("active");
    }

    function nextSlide() {
        i = (i + 1) % $slides.length;
        showSlide(i);
    }

    function prevSlide() {
        i = (i - 1 + $slides.length) % $slides.length;
        showSlide(i);
    }

    // Mostrar la primera imagen al cargar la página
    showSlide(i);

    // Cambiar de imagen cada 3 segundos
    setInterval(nextSlide, 3000);

    d.addEventListener("click", (e) => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            prevSlide();
        }

        if (e.target === $nextBtn) {
            e.preventDefault();
            nextSlide();
        }
    });
}
