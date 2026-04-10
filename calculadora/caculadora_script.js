

let pantalla = document.getElementById("pantalla");


function bton(n) {




    pantalla.value += n;





}


function limpiar() {


    pantalla.value = "";

}


function resultado() {

    let pantalla = document.getElementById("pantalla");

    try {

        pantalla.value = eval(pantalla.value);
    } catch {

        pantalla.value = "error"


    }






}