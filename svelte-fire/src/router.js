import Inicio from "./Inicio.svelte";
import DetalleUsuario from "./DetalleUsuario.svelte";
import Error from  "./Error.svelte";


const routes = {
    '/': Inicio,
    '/DetalleUsuario/:id': DetalleUsuario,    
    '*': Error
}

// const routes = {
//     '/': Home,
//     '/DetailHome/:id': DetailHome,    
//     '*': GetError
// }


export default routes;