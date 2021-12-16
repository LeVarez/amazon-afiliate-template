<script>
import Menu from "./Menu.svelte";
import Products from "./Products.svelte";

</script>


<Menu/>
<div class="background_image">
    <img class="background_image" src="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg" alt="Imagen de un cocker">
</div>
<Products/>


<style>
    .background_image{
        height:auto;
        width:100%;
        object-fit: cover;
        max-height:500px;
    }
</style>