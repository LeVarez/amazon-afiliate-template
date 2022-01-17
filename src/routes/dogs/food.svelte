<script lang="ts">
    import Header from "../../lib/header/Header.svelte";
    import Products from "../../lib/Products.svelte";


    //Import data, Temporally, should change
    import dogsbeds from '../../json/dogs/food.json';

    import type {Product} from '../../lib/types';
import TextComponent from "$lib/TextComponent.svelte";

    let title = "Comida para perros"
    let content = ["En esta sección podras encontrar todo tipo de alimentos de calidada para perrors"]
    let selectedMenuOption = "Perros";
    let products : Product[];

    // Get sub-array of first n elements after shuffled
    products = dogsbeds;


</script>

<TextComponent {title} {content}/>
<Products {products}/>


<style>
</style>