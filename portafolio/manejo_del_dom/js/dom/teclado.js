const d = document;
let x = 0, y = 0;
export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage);
    var limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    // console.log(e.keyCode);
    // console.log(e.key);
    // console.log(limitsBall, limitsStage);
    // const move(direction) => {
    // };
    //El prevent default evitara que se ejecuten las acciones por default
    //por ejemlo que no baje toda la pantalla cuando se presione hacia abajo
    //sino que solo baje la bolita.

    //para que la bolita choque perfectamente en el borde hay que redondear los desimales.

    //metiendo el prevent default en la validacion evitamos que deshabilite todo el tiempo las barras de escroll del navegador.
    switch (e.keyCode) {
        case 37:
            if (limitsBall.left - 5 > limitsStage.left) {
                x--;  // el .left es una propiedad del getBounding... que puestra el valor izquierdo.
                e.preventDefault(); //Previene que se ejecuten los comandos por defauld del navegador, en este caso conviene ponerlo aqui para que solo los prevenga en el caso especifico cuando se presione esta tecla.
                //x--;
                console.log("limites de la bola:", limitsBall);
                console.log("limite izquierdo bola:", limitsBall.left)
                console.log("limite izquierdo cuadro:", limitsStage.left)
                // move("left");
            }
            break;
        case 38:
            if (limitsBall.top - 10 > limitsStage.top) {
                y--;  // el .left es una propiedad del getBounding... que puestra el valor izquierdo.
                e.preventDefault(); //Previene que se ejecuten los comandos por defauld del navegador, en este caso conviene ponerlo aqui para que solo los prevenga en el caso especifico cuando se presione esta tecla.
                // y--;
                // move("up");
            }
            break;
        case 39:
            if (limitsBall.right + 5 < limitsStage.right) {
                x++;  // el .left es una propiedad del getBounding... que puestra el valor izquierdo.
                // x++;
                e.preventDefault(); //Previene que se ejecuten los comandos por defauld del navegador, en este caso conviene ponerlo aqui para que solo los prevenga en el caso especifico cuando se presione esta tecla.
                console.log("limite derecho bola:", limitsBall.right)
                // move("right");
            }
            break;
        case 40:
            if (limitsBall.bottom + 10 < limitsStage.bottom) {
                y++;  // el .left es una propiedad del getBounding... que puestra el valor izquierdo.
                e.preventDefault(); //Previene que se ejecuten los comandos por defauld del navegador, en este caso conviene ponerlo aqui para que solo los prevenga en el caso especifico cuando se presione esta tecla.
                // y++;
                // move("down");
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`; // Esta propiedad transform es de css, lo que haces es trasladar el diseño de posicion.

}

export function shortcuts(e) {
    // console.log(e.type);// muestra el tipo de evento
    // console.log(e.key);// muestra la llave o tecla qu fue presionada
    // console.log(e.keyCode);// muestra el codigo numerico de esa tecla
    // console.log(`shift: ${e.shiftKey}`);// muestra si se presiono la tecla shift${ (true-false)
    // console.log(`ctrl: ${e.ctrlKey}`);// muestra si se presiono la tecla ctrl (true-false)
    // console.log(`alt: ${e.altKey}`);// muestra si se presiono la tecla alt (true-false)

    // console.log(e);

    if (e.key === "a" && e.altKey) {
        alert(" has presionado a + alt y se genero una alerta");
    }

    if (e.key === "c" && e.altKey) {
        confirm(" has presionado c + alt y se genero una confirmación");
    }

    if (e.key === "p" && e.altKey) {
        prompt(" has presionado p + alt y se genero un prompt");
    }
}