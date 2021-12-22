<script lang="ts">
    import Header from "../Header.svelte";
    import Products from "../Products.svelte";
    import TextComponent from "../TextComponent.svelte";


    //Import data, Temporally, should change
    import dogsbeds from '../json/dogs/beds.json';
    import dogsfood from '../json/dogs/food.json';
    import dogstoys from '../json/dogs/toys.json';
    import dogsleash from '../json/dogs/leash.json';
    import type {Product} from '../Products.svelte';


    let products : Product[];

    //Generate radom list
    let allProducts : Product[]  = [...dogsbeds , ...dogsfood, ...dogstoys, ...dogsleash]
    // Shuffle array.
    const shuffled : Product[] = allProducts.sort(() => 0.5 - Math.random());

    // Get sub-array of first n elements after shuffled
    products = shuffled.slice(0, 15);

</script>

<Header/>
<TextComponent title={""} content={[]}></TextComponent>
<Products {products}/>


<style>
</style>