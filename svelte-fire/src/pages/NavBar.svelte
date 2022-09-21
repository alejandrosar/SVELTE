
<script>    
    import {logOut} from '../firebase/firebaseAuth';
</script>






  <nav>
    <div class="nav-wrapper">
        
      <a href='/' class="brand-logo">SVELTE FIRESTORE</a>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <!-- <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li> -->
        <li><a href="/" on:click={logOut}>LogOut</a></li>
      </ul>
    </div>
  </nav>