

export const parchearRutaImagenesList = (peliculas) => {

    //poster_path
    const rutaBasePoster = 'https://image.tmdb.org/t/p/w200';
    //backdrop_path
    const rutaBaseBackdrop = 'https://image.tmdb.org/t/p/w500';

    peliculas.map(pelicula => {

        if(pelicula.poster_path){
        pelicula.poster_path = rutaBasePoster + pelicula.poster_path;
        }
        if(pelicula.backdrop_path){
        pelicula.backdrop_path = rutaBaseBackdrop + pelicula.backdrop_path;        
        }

    });

    
    return peliculas;


}

export const parchearRutaImagenesOne = (pelicula) => {

    //poster_path
    const rutaBasePoster = 'https://image.tmdb.org/t/p/w200';
    //backdrop_path
    const rutaBaseBackdrop = 'https://image.tmdb.org/t/p/w500';

    

        if(pelicula.poster_path){
        pelicula.poster_path = rutaBasePoster + pelicula.poster_path;
        }
        if(pelicula.backdrop_path){
        pelicula.backdrop_path = rutaBaseBackdrop + pelicula.backdrop_path;        
        }

    

    
    return pelicula;


}