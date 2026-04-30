const peliculas = [
    { pelicula: "fast and furius", genero: "accion", año: 2009 },
    { pelicula: "The Shawshank Redemption", genero: "Drama", año: 1994 },
    { pelicula: "Pulp Fiction", genero: "Crimen", año: 2009 },
    { pelicula: "Inception", genero: "Ciencia ficción", año: 2010 }
];

let input = document.getElementById("input");
let contenedor = document.getElementById("opcion");
let contenedor2 = document.getElementById("opcion2");
let resultado = document.getElementById("resultado");


// llenar selects sin duplicados
let generos = [...new Set(peliculas.map(p => p.genero))];
generos.forEach(g => {
    let option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    contenedor.appendChild(option);
});

let años = [...new Set(peliculas.map(p => p.año))];
años.forEach(a => {
    let option = document.createElement("option");
    option.value = a;
    option.textContent = a;
    contenedor2.appendChild(option);
});


// función de filtrado
function render() {
    let texto = input.value.toLowerCase();
    let genero = contenedor.value;
    let año = contenedor2.value;

    let filtradas = peliculas.filter(p => {
        return (
            p.pelicula.toLowerCase().includes(texto) &&
            (genero === "" || p.genero === genero) &&
            (año === "" || p.año == año)
        );
    });

    resultado.innerHTML = "";

    filtradas.forEach(p => {
        let div = document.createElement("div");
        div.textContent = `${p.pelicula} - ${p.genero} (${p.año})`;
        resultado.appendChild(div);
    });
}


// eventos en tiempo real
input.addEventListener("input", render);
contenedor.addEventListener("change", render);
contenedor2.addEventListener("change", render);

// primera carga
render();