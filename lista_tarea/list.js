

function agregar() {

    const texto = document.getElementById("texto");
    const lista = document.createElement("li");
    const contenedor = document.querySelector("ul");


    lista.textContent = texto.value;
    contenedor.appendChild(lista);

    texto.value = "";



    lista.addEventListener("click", () => {

        lista.classList.toggle("completo")


    })

    const bton = document.createElement("button");
    bton.textContent = "X";



    bton.addEventListener("click", (n) => {

        lista.remove();



    })


    lista.appendChild(bton);



}



function eliminar() {






}