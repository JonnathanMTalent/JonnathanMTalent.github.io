// ruta del archivo json:// https://jsonplaceholder.typicode.com/users

//* xhr es el objeto ajax- tenemos 4 pasos principales enumerados. la respuesta la de en formato texto.
(() => {
    const xhr = new XMLHttpRequest(), // 1)estamos generando una instancia de el protocolo XMLHttpRequest
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment(); // El fragment permite que se haga una sola insersion al dom, asi mejoramos el 
    //rendimiento.Si no lo usáramos tocaria insertar cada elemente a medida que va llegando de la peticion.Encambia asi se va acumulando todo aqui.

    //!dentro de esta calback(el arrowfunction dentro del listener) va la logica de programacion.
    xhr.addEventListener("readystatechange", (e) => { // 2)EVENTOS.  En este listener tenemos la callback con un arrow function
        if (xhr.readyState !== 4) return; // esta linea permite que no imprima el console cada vez que cambia de estado, sino solamente cuando llegue al estado 4 o completado.

        // console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) { // estos estatus contemplan las respuestas satisfactorias.
            // console.log("éxito");
            // console.log(xhr.responseText);  // esto imprime lo que viene en el objeto ajax o xhr como texto.
            //$xhr.innerHTML = xhr.responseText;
            let json = JSON.parse(xhr.responseText); // convierte la respuesta json del objeto ajax o xhr a un objeto javaScript
            // console.log(json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
            // console.log("error");
            let message = xhr.statusText || "Ocurrió un error"; // en el status text a veces viene un mensaje de error. si no entonces muestra el string
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`; // en el objeto ajax (xhr en este caso) siempre viene en el status el codigo y el mensaje tendra la variable de arriba.
        }

        console.log("Este mensaje cargará de cualquier forma XMLHttpRequest()"); // Aqui ponemos cosas que queremos que carguen independientemente de la respuesta del ajax.
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");  //3) Aqui mensionamos el método de traida de datos GET y la ruta donde estan los datos.
    //xhr.open("GET", "assets/users.json");
    // xhr.open("GET", "../../assets/user.json"); // !De esta manera llamariamos de forma local el json.

    xhr.send();  //4) Aqui enviamos la peticion del XMLHttpRequest()
})();

//*FETCH: Funciona con promesas por lo que podemos usar then cath finally, las respuestas las de en un objeto tipo response.
(() => {
    const $fetch = document.getElementById("fetch"),
        //!este fragment no entrara en conflicto con el de arriba porque se estan ejecutando funciones anomimas autoejecutables.
        $fragment = document.createDocumentFragment(); // El fragment permite que se haga una sola insersion al dom, asi mejoramos el
    //rendimiento.Si no lo usáramos tocaria insertar cada elemente a medida que va llegando de la peticion.Encambia asi se va acumulando todo aqui.

    //fetch("assets/users.json")

    //! El fetch por defecto usa el método get y vienen en un objeto las opciones asi: (Sin embargo no es necesario ponerlo)
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //     method:"GET"
    // })


    //como fetch trabaja con promesas se puede usar then y cath
    fetch("https://jsonplaceholder.typicode.com/users")
        // fetch("https://jsonplaceholder.typicode.com/users")
        /* .then((res) => {
            console.log(res); //! ReadableStream... Aqui puedo ver la respuesta y todo lo del fetch
            // res : es la variable del arrow function que usamos arriba para recibir la respuesta del fetch pero llega como un ReadableStream
            // res.json() convertir la respuesta que es un objeto en json porque esperamos un json, es equivalente al JSON.parse()
            // res.text() si estamos recibiendo html o xml
            // res.blob()  imagen en base o formato data uri, y para todo lo que no sea texto
            return res.ok ? res.json() : Promise.reject(res);
          }) */
        .then((res) => (res.ok ? res.json() : Promise.reject(res))) // este convierte a res de ReadableStream a json//! este Promise.reject(res) permite que se ejecute el cath del error de la promesa. si no lo ponemos no ejecurá el catch. Aqui con el reject estamos rechazando la promeza y enviando el error
        .then((json) => { // este then recibe el return implicito del arrow function de arriba como un json.
            // console.log(json);
            //$fetch.innerHTML = json;
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li); //!este fragment no entrara en conflicto con el de arriba porque se estan ejecutando funciones anomimas autoejecutables.
            });

            $fetch.appendChild($fragment);
        })
        .catch((err) => { // -El catch solo espera recibir un error
            console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            console.log(
                "Esto se ejecutará independientemente del resultado de la Promesa Fetch Api Fech"
            );
        });

})();


//*API Fetch + Asinc-Await
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();// El fragment permite que se haga una sola insersion al dom, asi mejoramos el rendimiento.Si no lo usáramos tocaria insertar cada elemente a medida que va llegando de la peticion.Encambia asi se va acumulando todo aqui.


    async function getData() { // este async nos permite usar el await.
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"), // res es la respuesta de la peticion del fetch, con el await no permitimos que continue ejecutando codigo hasta que haya llegado la respuesta.
                json = await res.json(); // aqui tambien puede ser .text() o .lo_que_estemos_esperando

            console.log(res, json);

            //if (!res.ok) throw new Error("Ocurrio un Error al solicitar los Datos"); // Este objeto de error solo recibe mensajes textuales
            if (!res.ok) throw { status: res.status, statusText: res.statusText };//! Así manipulo el error. El throw es un return que manda el flujo a nuestro catch, en este caso no podemos rechazar la promesa con el reject.

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);
        } catch (err) {
            console.log(err);
            let message = err.statusText || "Ocurrió un error"; // por si el mensaje del status text viene vacio.
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutará independientemente del try... catch. API Fetch + Asinc-Await");
        }
    }

    getData();
})();

// * AXIOS trabaja con promesas, tiene todos los verbos http.

/* la ventaja de axios es que simplifica el código ya que entrega parseado el 
resultado, ademas hace previamente las validaciones de las promesas, usa el XMLHttpRequest
como si fuera un fetch ya que usa promesas.
para poder usar esta libreria en el script tenemos que tener el src=https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js
o la que este mas actualizada en la libreria de gitHub https://github.com/axios/axios
*/
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios
        //.get("assets/users.json")  // podemos llamar archivos internos
        .get("https://jsonplaceholder.typicode.com/users")  // esta es la url que vamos a consultar con metodo  get.
        .then((res) => { // podemos usar los metodos de las promesas then, catch , finally
            console.log(res); // Entrega el objeto ya parseado en data
            let json = res.data;

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axios.appendChild($fragment);
        })
        .catch((err) => {
            console.log(err.response); // axios pone el elemento response en el error para mostrar el objeto.
            let message = err.response.statusText || "Ocurrió un error";
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
        .finally(() => {
            console.log("Esto se ejecutará independientemente del resultado Axios");
        });
})();


// * Librería Axios + (Async - Await)
/*
Aqui usamos funciones asincronas, y esperamos con await la respuesta get
*/

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;

            console.log(res, json);

            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutará independientemente del try... catch");
        }
    }

    getData();
})();