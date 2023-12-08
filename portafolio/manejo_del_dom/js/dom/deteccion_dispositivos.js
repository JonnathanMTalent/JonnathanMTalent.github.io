import { ocultar } from '../dom/mostrarOcultar.js';
const d = document, n = navigator, ua = n.userAgent;
// *navigator:
// muestra todo acerca del navegador o dispositivo que abrio la página.
// *USER AGENT
//  Es una cadena de texto que muestra informacion del dispositivo desde el que nos visita el usuario.
export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
        isMobile = {
            android: () => ua.match(/android/i),
            ios: () => ua.match(/iphone|ipad|ipod/i),
            windows: () => ua.match(/windows phone/i),
            any: function () {
                return this.android() || this.ios() || this.windows(); // retornara los que tengan un valor diferente de null.
            }
        },
        isDesktop = {
            linux: () => ua.match(/linux/i),
            mac: () => ua.match(/mac os/i),
            windows: () => ua.match(/windows nt/i),
            any: function () {
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => ua.match(/chrome/i),
            safari: () => ua.match(/safari/i),
            firefox: () => ua.match(/firefox/i),
            opera: () => ua.match(/opera|opera mini/i),
            ie: () => ua.match(/msie|iemobile/i),
            edge: () => ua.match(/edge/i),
            any: function () {
                return (
                    this.ie() ||
                    this.edge() ||
                    this.chrome() ||
                    this.safari() ||
                    this.firefox() ||
                    this.opera()
                );
            }
        };
    // console.log(ua);
    $id.innerHTML = `
        <ul class="clean-ul">
            <li>User Agent:<b>${ua}</b></li>
            <li>Plataforma:<b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
`;


    // //CONTENIDO EXCLUSIVO:
    if (isBrowser.chrome()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`

    }
    if (isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en firefox</mark></p>`
    }
    //Cuando es celular oculato las funciones que no se manejan en android
    if (isMobile.android()) {
        ocultar(".ocultarMobile");
    }
}