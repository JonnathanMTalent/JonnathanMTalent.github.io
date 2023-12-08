let d = document;

export default function videoSelect() {

    const videoSelect = d.getElementById("videoSelect");
    const videoContainer = d.getElementById("videoContainer");
    videoContainer.innerHTML = '<iframe class="iframe-responsivo" src="https://www.youtube.com/embed/mHDEDDrGYvo" title="Call of duty" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    videoSelect.addEventListener("change", () => {
        const selectedVideo = videoSelect.value;

        if (selectedVideo) {
            // Cargar el video de YouTube en el div
            videoContainer.innerHTML = `${selectedVideo}`
        } else {
            // Limpiar el div si no se ha seleccionado un video
            videoContainer.innerHTML = "";
        }
    });

}