// *COMPLETO:
export default function mensajePopUp(id) {
    const $ElemPopUp = document.getElementById(id);
    const titulo = $ElemPopUp.getAttribute("titulo");
    const texto = $ElemPopUp.getAttribute("texto");
    const url = $ElemPopUp.getAttribute("url");
    const urlText = $ElemPopUp.getAttribute("urlText");

    $ElemPopUp.addEventListener("click", () => {
        // se genera ventana emergente:
        const popupWindow = window.open("", "Explicación", "width=400, height=300");
        popupWindow.document.write(contenidoVentana);

        //evento para cerrar el popup
        const cerrarPopupElem = popupWindow.document.getElementById("cerrarPopUp");
        cerrarPopupElem.addEventListener("click", () => {
            popupWindow.close();
        });
    });

    // Aqui genero el contenido de la nueva ventana:
    const contenidoVentana = `
        <html>
        <head>
            <style>
body {
//   background-image: url(../../assets/images/agua.jpg);
   background-image: url("../../assets/gif/fondoEspacio.gif"); 
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color:white;
}
                div {
                    text-align: center;
                }
                .blue-btn{
  border-radius: 2rem;
  background-color: #77bef5;
  height: 2rem;
  padding: 0 1rem;
  margin:2rem;
  .blue-btn:hover {
  background-color: white;
  color: black;
}
#Nurl{
    color:white;
}
}
            </style>
        </head>
        <body>
            <div>
                <h2>${titulo}</h2>
                <p>${texto}</p>
                <a id="Nurl" href="${url}" target="_blank">${urlText}</a>
                <br>
                <button id="cerrarPopUp" class="blue-btn">Cerrar</button>
            </div>
        </body>
        </html>
    `;
}


