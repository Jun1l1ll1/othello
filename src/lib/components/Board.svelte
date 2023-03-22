<script>
    import Tile from "./Tile.svelte";

    let column = 0;
</script>

<div class="grid">
    {#each {length: 8} as _, i}
        {#each {length: 8} as _, u}
        <Tile row={u} column={i}/>
        {/each}
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto auto auto;
        width: 40vw;
        aspect-ratio: 1 / 1;

        border: rgb(35, 114, 81) solid 5px;
        border-radius: 3px;
    }

</style>