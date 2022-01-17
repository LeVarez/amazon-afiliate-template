<script lang="ts">
    import Header from "../../lib/header/Header.svelte";
    import Products from "../../lib/Products.svelte";



    //Import data, Temporally, should change
    import dogsbeds from '../../json/dogs/beds.json';

    import type {Product} from '$lib/types';
    import TextComponent from "$lib/TextComponent.svelte";

    let products : Product[];
    let title = "Camas para perros"
    let content = ["Es muy importante que los perros sepan que tienen un espacio solo para ellos donde ir para estar tranquilos y seguros. En esta sección podras encontrar gran variedad de camas para tus perros, desde las mas basicas a camas para perros con necessidades específicas!"]
    // Get sub-array of first n elements after shuffled
    products = dogsbeds;


</script>

<TextComponent {title} {content}/>
<Products {products}/>


<style>
</style>