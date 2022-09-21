<script>
import { createUserEmailPwd, loginUserEmailPwd } from '../firebase/firebaseAuth';
import { push } from 'svelte-spa-router';  
import { auth } from '../firebase/firebaseConfig.js'; 


let email;
let password;

//ESTA MIERDA SUPONGO QUE SE TRASPASARA A LOS ESTADOS DE SVELTE Y SE MANTENDRA EL CONTROL DE LOGIN DESDE AHI
auth.onAuthStateChanged(function(user){            
        if(user){
            push('/inicio');
        }});
    

const login = async () => {
    await loginUserEmailPwd(email, password);
}

const registro = async () => {
    await createUserEmailPwd(email, password);      
}


</script>

<h1>LOGIN</h1>




<input type="email" placeholder="Email" bind:value={email}/>
<input type="password" placeholder="Password" bind:value={password}/>

<button class="btn green" on:click={login}>LOGIN</button>
<button class="btn blue" on:click={registro}>REGISTRO</button>
