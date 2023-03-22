<script>
    import Board from "$lib/components/Board.svelte";
    import PlayerBoard from "$lib/components/PlayerBoard.svelte";
    import SelectRole from "$lib/components/SelectRole.svelte";
</script>

<div class="infoContainer">
    <PlayerBoard/>
    <SelectRole/>
</div>

<div class="center"> 
    <Board/>
</div>

<!-- TODO: Make things update -->
<!-- TODO: Make database (2get-erVplan style?) -->

<style>
    .center {
        display: flex; 
        justify-content: center;
        align-items: center; 
        height: 100vh;
    }

    .infoContainer {
        position: absolute;
        left: 30px;
        width: 300px;
    }
</style>