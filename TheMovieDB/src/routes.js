import Inicio from './paginas/Inicio.svelte';
import Peliculas from './paginas/Peliculas.svelte';
import PeliculaDetalle from './paginas/PeliculaDetalle.svelte';
import Error from './paginas/Error.svelte';



const routes = {
    '/': Inicio,
    '/peliculas': Peliculas,
    '/Pelicula/:id': PeliculaDetalle,
    '*': Error
};

export default routes;