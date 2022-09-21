<script>
    
    import { push } from 'svelte-spa-router';
    import { addUser, getUsers, modifyUser, deleteUser } from './firebase.js';
    
      let nombre;
      let email;
      let users = [];
    
      
      const GetAllUSers = async () => {        
        var response = await getUsers();        
        if(response.status == 0){
          users = [];
          users = [...users, ...response.users];
        }
      }
      const SaveUser = async () => {
        console.log('SaveUser');
        console.log('datitos', {nombre, email});
        var response = await addUser(nombre, email);
        if(response.status == 0){
          nombre = '';
          email = '';
          GetAllUSers();
        }
      }
      
      GetAllUSers();
    
      const editarUsuario = async (user) => {
        var result = await modifyUser(user);
        if(result.status == 0){
          GetAllUSers();
        }else{
          console.log('error');
          alert('Horror en el sistema');
        }
      }
    
      const borrarUsuario = async (user) => {
        var result = await deleteUser(user);
        if(result.status == 0){
          GetAllUSers();
        }else{
          console.log('error');
          alert('Horror en el sistema');
        }
      }

      const idDetalle = (id) => {
        let route = `/DetalleUsuario/${id}`;
        console.log('RUTA RUTA ',route);
        push(`/DetalleUsuario/${id}`);
      }

      
    
    </script>
    

    
    
    
    <div class="container">
      <h1>Crud Firestore</h1>
    
      <input type="text" placeholder="Nombre" class="input" bind:value={nombre}/>
      <input type="text" placeholder="Email" class="input" bind:value={email}/>
      <button class="btn blue" on:click={SaveUser}>Agregar</button>
    
    
    
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Eliminar</th>
            <th>Enviar ID</th>
          </tr>
        </thead>
        <tbody>    
          {#await users}
            <tr>
              <td colspan="6">Cargando...</td>
            </tr>
          {:then users}
            {#each users as user}
              <tr>
                <td>{user.id}</td>
                <td><input type="text" bind:value={user.nombre}/></td>
                <td><input type="text" bind:value={user.email}/></td>
                <td><button class="btn yellow" on:click={()=>editarUsuario(user)}>Editar</button></td>
                <td><button class="btn red" on:click={()=>borrarUsuario(user.id)}>Eliminar</button></td>
                <td><button class="btn green" on:click={()=>idDetalle(user.id)}>Detalle</button></td>
              </tr>
            {/each}
          {:catch error}
            <tr>
              <td colspan="6">Error: {error.message}</td>
            </tr>
          {/await}
            
            
        </tbody>
      </table>
    
    </div>