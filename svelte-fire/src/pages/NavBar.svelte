
<script>
    import {push} from 'svelte-spa-router';
    import {logOut} from '../firebase/firebaseAuth';


    import { getUser } from '../firebase/firebaseAuth';


    const check = () => {
        console.log('check');
        var user = getUser();
        console.log('user', user);
        if(user == null){
            alert('No estas logueado');
            return false;
        }else{
            alert('Estas logueado');
            return true;
        }
    }

</script>






  <nav>
    <div class="nav-wrapper">
        
      <a class="brand-logo">SVELTE FIRESTORE</a>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li> -->
        <li><a href="#" on:click={logOut}>LogOut</a></li>
      </ul>
    </div>
  </nav>