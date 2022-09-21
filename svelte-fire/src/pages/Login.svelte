<script>
import { createUserEmailPwd, loginUserEmailPwd } from '../firebase/firebaseAuth';
import { push } from 'svelte-spa-router';   

let email;
let password;


const login = async () => {
    console.log('login');
    console.log('datitos', {email, password});
    var result = await loginUserEmailPwd(email, password);
    if(result.status == 0){
        push('/inicio');
    }else{
        console.log('login error');
    }

}

const registro = async () => {
    console.log('registro');
    console.log('datitos', {email, password});
    var result = await createUserEmailPwd(email, password);
    if(result.status == 0){
        push('/inicio');
    }else{
        console.log('registro error');
    }    
}


</script>

<h1>LOGIN</h1>




<input type="email" placeholder="Email" bind:value={email}/>
<input type="password" placeholder="Password" bind:value={password}/>

<button class="btn green" on:click={login}>LOGIN</button>
<button class="btn blue" on:click={registro}>REGISTRO</button>
