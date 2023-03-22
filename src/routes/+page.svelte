<script>
    import Board from "$lib/components/Board.svelte";
    import PlayerBoard from "$lib/components/PlayerBoard.svelte";
</script>

<PlayerBoard/>

<div>
    <Board/>
</div>

<style>
    div {
        display: flex; 
        justify-content: center;
        align-items: center; 
        height: 100vh;
    }
</style>