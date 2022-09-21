import Inicio from './rutas/Inicio.svelte';
import Acerca from "./rutas/Acerca.svelte";
import Contactos from "./rutas/Contactos.svelte";
import ErrorRuta from "./rutas/ErrorRuta.svelte";

const routes = {
    '/': Inicio,
    '/Acerca/:id/:nombre?': Acerca,
    '/Contactos': Contactos,
    '*': ErrorRuta
}


export default routes;