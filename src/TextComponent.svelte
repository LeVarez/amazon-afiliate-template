<script type="ts">
    interface Content {
        prragraf: string[];
    }
    export let title = "Default Title";
    export let content = ["This is a default parragraf 1", "This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 v This is a default parragraf 2 vThis is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2"]
</script>

<h3 class="align-center">{title}</h3>
{#each content as current}
<div>
    <p class="parragraf align-left">{current}</p>
</div>
{/each}
<style>
    .align-center{
        text-align: center;
    }
    .align-left{
        text-align: left;
    }

    .parragraf{
        padding-left: 15%;
        padding-right: 15%;
    }

</style>