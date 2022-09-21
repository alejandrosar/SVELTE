import Login from "../pages/Login.svelte";
import Inicio from "../pages/Inicio.svelte";
import DetalleUsuario from "../pages/DetalleUsuario.svelte";
import Error from  "../pages/Error.svelte";

let _user = null;
const routes = {
    '/': Login,
    '/inicio': Inicio,
    '/detalleUsuario/:id': DetalleUsuario,    
    '*': Error
};


export default routes;