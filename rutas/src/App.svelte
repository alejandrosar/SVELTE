<script>
  import Router from 'svelte-spa-router';
  import {link, push} from 'svelte-spa-router';
  import routes from './routes';
  import Inicio from './rutas/Inicio.svelte';

  let id1 = 123;
  let id2 = 77;
  let nombre = 'Juan';

  const pagina = () => {
    push('/Acerca/' + id2);
  }

</script>
<Inicio />
<main>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">Svelte Rutas</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <li class="nav-item">
          <a class="nav-link" href="/" use:link >Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Acerca/{id1}/{nombre}" use:link>A cerca de</a>
        </li>
          <li class="nav-item">
          <a class="nav-link" href="/Contactos" use:link>Contactos</a>          
        </li>
        </div>
      </div>
    </div>
  </nav>

  <Router {routes}/>



  <button class="btn btn-primary" on:click={pagina}>Acerca</button>

</main>

