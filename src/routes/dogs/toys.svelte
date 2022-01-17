<script lang="ts">
    import Header from "../../lib/header/Header.svelte";
    import Products from "../../lib/Products.svelte";



    //Import data, Temporally, should change
    import dogsbeds from '../../json/dogs/toys.json';

    import type {Product} from '../../lib/types';
import TextComponent from "$lib/TextComponent.svelte";

    let selectedMenuOption = "Perros";
    let products : Product[];
    let title = "Juguetes para perros"
    let content = ["Un juguete para perros es una de las mejores opciones para que tu perro pueda estar entretenido. A los perros les encanta jugar i practicar deporte. Aqui podrás encontrar todo tipos de juguetes para tu perro y para todas las ocasiones!"]
    // Get sub-array of first n elements after shuffled
    products = dogsbeds;


</script>

<TextComponent {title} {content}/>
<Products {products}/>


<style>
</style>