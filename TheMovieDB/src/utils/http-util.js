import { parchearRutaImagenesList, parchearRutaImagenesOne } from "./images-TMDB-util";
import {MaxChars} from './text-util';

const apiKey = '83fcc124ec10276ae6a7b56537901f3a';
const urlBase = 'https://api.themoviedb.org/3/movie/';



export const GetWithControllerAndParamsList = async (controller, params) => {    
    
    let url = ConstruirUrl(controller, params);
    
    const response = await fetch(url);        
    if(response.ok){            
        let data = await response.json();        
        
        data = parchearRutaImagenesList(data.results);
        data.map(p=>p.overview = MaxChars(p.overview));
        return data;        
    }
    else{
        LanzarError();
    }    
}

export const GetDetails = async (id, params) => {
    let url = ConstruirUrl(id, params);

    const response = await fetch(url);
    if(response.ok){
        let data = await response.json();
        data = parchearRutaImagenesOne(data);
        return data;
    }else{
        LanzarError();
    }    
}



const ConstruirUrl = (controller, params) => {
    let url = urlBase + controller + '?api_key=' + apiKey;
    params.forEach(p => {    
        url = url + '&' + p.name + '=' + p.value;
    });
    return url;
}


const LanzarError = () => {
    throw new Error('Error en la peticion');
}