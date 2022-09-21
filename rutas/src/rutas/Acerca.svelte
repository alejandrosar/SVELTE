<script>
    export let params = {};
</script>


<h1>A CERCA DE</h1>
<h2>ID Recibido: {params.id}</h2>
{#if params.nombre}
<h2>Nombre Recibido: {params.nombre}</h2>
{/if}