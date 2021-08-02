// Ejemplos de clase //
// document.write("<p>Hola Guayerd</p>")
// document.querySelector("#uno").classList.remove("")
// document.querySelector("#cuatro").classList.add("")
// document.querySelector("#tres").classList.replace("")
// document.querySelector("#cinco").classList.toggle("");
// document.querySelector("#cuatro").classList.toggle("");

// 1) Crear un párrafo. Luego desde el javascript hacer que se vea rojo.

document.querySelector("#parrafo1").classList.add("rojo");

// 2) Crear tres párrafos. Luego desde el javascript hacer que tengan un fondo verde.

document.querySelectorAll(".parrafo").forEach(e => e.classList.add("verde"));

// 3) Crear 4 párrafos, dos con clase “blanco”. A todos agregarle un fondo celeste, y a los clase blanco además hacer que el texto se vea blanco.

document.querySelectorAll("p").forEach(e => e.classList.add("celeste"));
document.querySelectorAll("#p3,#p4").forEach(e => e.classList.add("blanco"));

// Otra forma (por cada id) para los clase "blanco"
// document.querySelector("#p3").classList.add("blanco");
// document.querySelector("#p4").classList.add("blanco");

// 4) En base al siguiente listado de notas, mostrar en verde los mayores a 7, amarillo los que están entre 4 y 6 y en rojo del tres para abajo.

notas = [9, 2, 7, 6, 6, 4, 5, 10, 3, 9.5]

notas.forEach(nota => {
    if (nota >= 7) {
        document.write(`<p class ="verdeej4"</p> ${nota}`)
    } else if (nota <= 3) {
        document.write(`<p class ="rojoej4"</p> ${nota}`)
    } else {
        document.write(`<p class ="amarilloej4"</p> ${nota}`)
    }

});

// 5) Tenemos el siguiente HTML. Vamos a preguntarle al usuario qué color quiere cambiar, y luego lo vamos a preguntar por cuál. (Dos input). En base a eso, nuestro javascript modificará el documento. Ejemplo: Si pide cambiar el verde por azul, los textos que antes se veían en verde ahora deberán verse en azul.
//(Nota: Se debe agregar el css correspondiente).

let colorAcambiar = prompt("¿Qué color desea cambiar (Rojo - Verde - Azul) ?");
let colorARemplazar = prompt("¿Por qué color desea remplazar (Rojo - Verde - Azul) ?");

// Recordar ingresar en el prompt el color + ej5(el numero del ejercicio) porque lo defini así 
document.querySelectorAll("p").forEach(e => e.classList.replace(colorAcambiar, colorARemplazar));

// 6) Pedir al usuario: Una palabra, un color y una cantidad. Generar la cantidad de párrafos con esa palabra y ese color que se requiera.

// Utilizo las mismas clases del ejercicio 5.

const palabra = prompt("Ingrese una palabra").toLowerCase();
const color = prompt("Ingrese un color. (Rojo, verde, azul)").toLowerCase();
const cantidad = parseInt(prompt("Ingrese la cantidad de párrafos que desea obtener"));

for (let i = 0; i < cantidad; i++) {
    document.write(`<p class = "${color}"> ${palabra}</p>`);
}

// 7) a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
/* b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 
   c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 
   d) Remover de los primeros 4 párrafos la clase “ayuda”  
   e) Crear desde el CSS estilos personalizados para cada clase.
  
  <p class="nuevo rojo saludo"></p>
  <p class="rojo saludo"></p>
  <p class="campo"></p>
  <p class="nuevo saludo ayuda"></p>
  <p class="nuevo ayuda"></p>
*/

// a) Dentro del siguiente HTML, a todos los párrafos que NO tengan la clase “nuevo”, agregarle la clase “antiguo”.
document.querySelectorAll("p").forEach(e => {
    if (e.classList.contains("nuevo")) {
        e.classList.add("antiguo")
    }
    console.log(e);
});

// b) A todos los que tienen clase “rojo”, agregarles la clase “transparencia” 
document.querySelectorAll("p").forEach(e => {
    if (e.classList.contains("rojoej7")) {
        e.classList.add("transparencia")
    }
    console.log(e);
});

// c) A todos los que tengan clase “saludo” quitarla, y a los que no la tengan, agregarla. 
document.querySelectorAll("p").forEach(e => {
    if (e.classList.contains("saludo")) {
        e.classList.remove("saludo")
    } else {
        e.classList.add("saludo")
    }
    console.log(e);
});

// d) Remover de los primeros 4 párrafos la clase “ayuda”

let cont = 0;
document.querySelectorAll("p").forEach(e => {

    cont = cont + 1.
    if (e.classList.contains("ayuda") && cont <= 4) {
        e.classList.remove("ayuda")
    }

    console.log(e);
});

// 8) Dado el siguiente HTML, poner en color azul los textos que comiencen con la letra “V”.
/*
<span>Viento</span>
<span>Balanza</span>
<span>Zapato</span>
<span>Vertical</span>*/

document.querySelectorAll("span").forEach(e => {

    if (e.innerText.charAt(0) === "V") {
        e.classList.add("azulej8");
    }

});