<script type="ts">
    interface Content {
        prragraf: string[];
    }
    export let title = "Default Title";
    export let content = ["This is a default parragraf 1", "This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2This is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2 v This is a default parragraf 2 vThis is a default parragraf 2 This is a default parragraf 2 This is a default parragraf 2"]
</script>

<h1>{title}</h1>
{#each content as current}
<div>
    <p>{current}</p>
</div>
{/each}
<style>

    p{
        text-align: center;
        font-size: 20px;
        padding: 0px 10% 0px 10%;
    }

</style>