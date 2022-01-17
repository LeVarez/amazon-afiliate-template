<script lang="ts">
    import Menu from "./Menu.svelte";
    export let img = "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_960_720.jpg"

    export let selectedMenuOption = ""
</script>

<div class="header">
    <Menu selectedOption = {selectedMenuOption}/>
    <img class="background-image" src={img} alt="Imagen de un cocker">
</div>

<style>
    .background-image{
            height:auto;
            width:100%;
            object-fit: cover;
            max-height:500px;
    }
</style>