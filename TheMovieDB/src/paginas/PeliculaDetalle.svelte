<script>
    import { onMount } from 'svelte';
    import { GetDetails } from "../utils/http-util";
    import Loading from '../componentes/loading.svelte';
    export let params = {};

    let id = params.id;
    let pelicula = {};

    

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US


onMount(async ()=>{
    pelicula = await GetDetails(`${id}`, [{name:"language", value:"es-ES"}]); 
})

</script>


{#await pelicula}

<Loading/>
{:then pelicula}
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="{pelicula.poster_path}" alt="" class="img-fluid">
            </div>
            <div class="col-md-8">
                <h1>{pelicula.title}</h1>
                <h2>{pelicula.original_title}</h2>
                <p>{pelicula.overview}</p>
            </div>
        </div>
    </div>

{/await}
    
