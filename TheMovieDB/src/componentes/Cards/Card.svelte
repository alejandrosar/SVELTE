<script>
    export let Dato;
    import {MaxChars} from '../../utils/text-util';    
    import {push} from 'svelte-spa-router';

    
    const goPeliculaDetalle = (id) => {
        push(`#/pelicula/${id}`);
    }
</script>

<div class="col-md-4">

    <div class="card" style="width: 16rem;" on:click="{()=>goPeliculaDetalle(Dato.id)}">
        <img src="{Dato.backdrop_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{Dato.title}</h5>
          <div>
            <p>Original title: {Dato.original_title}</p>
          </div>
          <p class="card-text">{MaxChars(Dato.overview)}</p>
          
        </div>
      </div>

</div>        