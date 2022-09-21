<script>
    import { pop } from 'svelte-spa-router';
    import {getUserDetails} from './firebase.js';
    export let params;
    let {id} = params;
    let user = {};


    getUserDetails(id).then((response) => {
        console.log(response);
        if(response.status == 0){
            user = response.user;
            user = user;
        }
    });
        
    


</script>

<div class="container">
<h1>Detalle usuario</h1>

<button class="btn green" on:click={pop}>VOLVER</button>

{#await user}
    <h1>Cargando...</h1>
{:then user}

    <table>
        <thead>
            <td></td>
            <td>Nombre</td>
            <td>Email</td>
        </thead>
        <tbody>
            <tr>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
            </tr>
        </tbody>        
    </table>

{/await}
    

</div>


