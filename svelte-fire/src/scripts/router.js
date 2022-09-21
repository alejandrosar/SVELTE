import Login from "../pages/Login.svelte";
import Inicio from "../pages/Inicio.svelte";
import DetalleUsuario from "../pages/DetalleUsuario.svelte";
import Error from  "../pages/Error.svelte";

let _user = null;
let routes = {
    '/': Login,
    '/inicio': Inicio,
    '/detalleUsuario/:id': DetalleUsuario,    
    '*': Error
}
export const SetUser = (user) => {
    _user = user;
    routes = {
        '/': Inicio,
        '/inicio': Inicio,
        '/detalleUsuario/:id': DetalleUsuario,    
        '*': Error
    }
}
export const LogOut = () => {    
    _user = null;
    routes = {
        '/': Login,
        '/inicio': Inicio,
        '/detalleUsuario/:id': DetalleUsuario,    
        '*': Error
    }
}


// const routes = {
//     '/': Home,
//     '/DetailHome/:id': DetailHome,    
//     '*': GetError
// }


export default routes;