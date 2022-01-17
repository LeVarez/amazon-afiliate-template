<script lang="ts">
    import Header from "../../lib/header/Header.svelte";
    import Products from "../../lib/Products.svelte";


    //Import data, Temporally, should change
    import dogsbeds from '../../json/dogs/leash.json';

    import type {Product} from '../../lib/types';
import TextComponent from "$lib/TextComponent.svelte";

    let selectedMenuOption = "Perros";
    let products : Product[];
    let title = "Correas para perros"
    let content = ["En esta sección encontraras todo tipo de correas para tu perro, desde correas acolchadas, hasta correas manos libres!"]
    // Get sub-array of first n elements after shuffled
    products = dogsbeds;


</script>

<TextComponent {title} {content}/>
<Products {products}/>


<style>
</style>