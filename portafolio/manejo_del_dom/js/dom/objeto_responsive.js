const d=document, w=window;
export default function responsiveMedia(id,mq, mobileContent,desktopContent){ //mq es media query
    let breakpoint=w.matchMedia(mq); //devuelve un nuevo objeto MediaQueryList que representa los analizados de la media query indicada.
     //window.matchMedia tiene un listener que es el que detecta al mq: media query

//Esta arrow function recive el evento de la media query y envia un true o false
    const responsive=(e)=>{
        if(e.matches){
            d.getElementById(id).innerHTML=desktopContent;
        }else{
            d.getElementById(id).innerHTML=mobileContent;
        }
        console.log("MQ",breakpoint,e.matches);
    }

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}