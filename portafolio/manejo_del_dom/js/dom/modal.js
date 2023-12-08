export default function mensajeModal(idModal, idclose, idBackground) {
    const openModalButton = document.getElementById(idModal);
    const closeModalButton = document.getElementById(idclose);
    const modalBackground = document.getElementById(idBackground);

    openModalButton.addEventListener("click", () => {
        modalBackground.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
        modalBackground.style.display = "none";
    });

}