const d=document,
      w=window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    // detecta en que distancia esta el scroll para mostrar u ocultar el botón.
    w.addEventListener("scroll",e=>{
        let scrollTop=w.pageYOffset || d.documentElement.scrollTop;
        // console.log(w.pageYOffset, d.documentElement.scrollTop); // Esto muestra la distancia del scroll de arriba, tambien se puede medir scroll left rigth o buttom segun la posicion.
        if(scrollTop>600){
            $scrollBtn.classList.remove("hidden"); //quita la clase hidden para que sea visible el boyton.
        }else{
            $scrollBtn.classList.add("hidden"); //agrega la clase hidden para que el botón no sea visible.
        }

    }); 
    //Delega el click del botón para subir.
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            w.scrollTo({   // controla el scroll
                behavior:"smooth", //comportamiento
                top:0, // arriba igual a 0 nos lleva al principio
                //left:0 // cuando existe scroll horizontal nos llevaria a la izquierda.
            })
        }
    }); 
}