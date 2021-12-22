<script lang="ts">
    import Header from "../../../Header.svelte";
    import Products from "../../../Products.svelte";
    import TextComponent from "../../../TextComponent.svelte";


    //Import data, Temporally, should change
    import dogsFood from '../../../json/dogs/food.json';

    import type {Product} from '../../../Products.svelte';

    let selectedMenuOption = "Perros";
    let products : Product[];

    // Get sub-array of first n elements after shuffled
    products = dogsFood;


</script>

<Header {selectedMenuOption}/>
<TextComponent title={""} content={[]}></TextComponent>
<Products {products}/>


<style>
</style>