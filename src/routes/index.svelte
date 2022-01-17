<script context="module" lang="ts">
    import Products from "$lib/Products.svelte";
    import TextComponent from "$lib/TextComponent.svelte";

    //Import data, Temporally, should change
    import dogsbeds from '../json/dogs/beds.json';
    import dogsfood from '../json/dogs/food.json';
    import dogstoys from '../json/dogs/toys.json';
    import dogsleash from '../json/dogs/leash.json';
    import type {Product} from '$lib/types';

    let title = "Topmascotas, tienda online de productos para mascotas"
    let content = ["Aqui podràs encontrar todo tipo de productos para tus mascotas, desde una cama para tu perrito como un conjunto de jugetes para tus queridos gatos. No dudes en navegar y ver si encuentras lo que tu mascota necessita!"]
    let products : Product[];

    //Generate radom list
    let allProducts : Product[]  = [...dogsbeds , ...dogsfood, ...dogstoys, ...dogsleash]
    // Shuffle array.
    const shuffled : Product[] = allProducts.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    products = shuffled.slice(0, 15);
</script>

<script lang="ts">

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<TextComponent {title} {content}/>

<Products {products}/>

<style>

</style>
