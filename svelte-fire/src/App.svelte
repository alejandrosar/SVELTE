<script>
  import Router from 'svelte-spa-router';
  import routes from './scripts/router.js';
  import NavBar from './pages/NavBar.svelte'
</script>

 <NavBar/>

<div class="container">
<Router {routes}/>
</div>
