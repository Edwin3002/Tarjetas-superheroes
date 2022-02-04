import { apiHeros } from "./dataHeros.js";
const main = document.getElementById('main');
console.log(apiHeros);

const showmovies = (Heros) => {

    main.innerHTML = '';

    Heros.forEach(element => {
        //Trae solo unos objetos, NO todos
        const { name, image, first_appearance } = element;
        const pintarDiv = document.createElement('div');
        pintarDiv.classList.add('movies');

        pintarDiv.innerHTML = `
        <img src="${image}" alt="">
        <div class="movie-info">
            <h3>${name}</h3>
            <span class="green">0.8</span>

        </div>
        <div class="overview">
            <h3>Overwiew</h3>
            ${first_appearance}
        </div>
        `
        main.appendChild(pintarDiv)
    });
}


showmovies(apiHeros)

//funcion buscar y capturar el formulario

const form = document.getElementById('form')
//escucha los eventos
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    //apturo el valor o lo que escriben ene el input search
    const search = document.getElementById('search').value;
    //realizo la busqueda
    const busqueda = apiHeros.filter(hero => hero.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    //llamo a la funcion a las tarjetas con el filtro
    showmovies(busqueda)
})





/* 
import { apiHeroes } from "./dataHeroes.js";
const main = document.getElementById('main')

console.log(apiHeroes)
//creamos la funcion para pintar las tarjetas
const showMovies = (Heroes) =>{

    main.innerHTML = ``

    // recorrido de el arreglo de objetos
    Heroes.forEach(element => {
        //desestructuracion
        const {name, image, first_appearance} = element

        const pintarDiv = document.createElement('div')
        pintarDiv.classList.add('movies')
    pintarDiv.innerHTML = `
        <img src="${image}" alt="">
        <div class="movie-info">
            <h3>${name}</h3>
            <span class="green">0.8</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${first_appearance}
        </div>
        `
        main.appendChild(pintarDiv)
    });
}

showMovies(apiHeroes)
*/