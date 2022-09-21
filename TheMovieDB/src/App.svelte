<script>
    import Router from 'svelte-spa-router';    
    import Menu from './componentes/Menu.svelte';
    import routes from './routes.js';
</script>

<Menu/>
<div class="container">
    <Router {routes}/>
</div>