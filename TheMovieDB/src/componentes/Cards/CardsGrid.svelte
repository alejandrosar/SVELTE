<script>
    import Card from './Card.svelte';
    import { GetWithControllerAndParamsList } from "../../utils/http-util";
    import Loading from '../../componentes/loading.svelte';

    let pagina = 1;
    let parametros = [
        {name:"language", value:"es-ES"},
        {name:"page", value:{pagina}}    
    ]

    let peliculas = [];
    const ObtenerPeliculasPopulares = async (url, params) => {
        peliculas = []
        
        const response = await GetWithControllerAndParamsList(url, params);            
        peliculas = response;  
        
    }

    ObtenerPeliculasPopulares('popular', parametros);
    let anteriorDisabled;
    $:if(pagina == 1){
        anteriorDisabled = true;
    }else{
        anteriorDisabled = false;
    }

    const SiguientePagina = () => {        
        pagina = pagina + 1;
        parametros = [
            {name:"language", value:"es-ES"},
            {name:"page", value:pagina.toString()}    
        ]
        ObtenerPeliculasPopulares('popular', parametros);

    }
    const AnteriorPagina = () => {
        pagina = pagina - 1;     
        parametros = [
            {name:"language", value:"es-ES"},
            {name:"page", value:pagina.toString()}    
        ]   
        ObtenerPeliculasPopulares('popular', parametros);
    }

</script>

{#if peliculas.length == 0}
<Loading/>
<p>cargando...</p>
{/if}

{#await peliculas}
<Loading/>
{:then peliculas}
<div>
    <button class="btn btn-primary" disabled={anteriorDisabled} on:click="{AnteriorPagina}">Anterior</button>
    <button class="btn btn-primary" on:click="{SiguientePagina}">Siguiente</button>
</div>
<div class="container-lg">
    <div class="row">
    {#each peliculas as pelicula}
    <Card Dato={pelicula}/>    
    {/each}
    </div>

    <div>
        <button class="btn btn-primary" disabled={anteriorDisabled} on:click="{AnteriorPagina}">Anterior</button>
        <button class="btn btn-primary" on:click="{SiguientePagina}">Siguiente</button>
    </div>
</div>
{:catch error}
    <p style="color:red">{error}</p>
{/await}

