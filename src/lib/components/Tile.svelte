<script>
    import { hasCheckers, isPlayer } from "$lib/stores";
    import Checker from "./Checker.svelte";

    export let row;
    export let column;
    let thisTileNr =  String(row)+String(column)

    
    function placeChecker() {
        if (!hasCheckers.hasOwnProperty(thisTileNr)) {
            hasCheckers[thisTileNr] = isPlayer;
        }
    }

    console.log();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={placeChecker} class="tile {(column+row)%2 == 0 ? 'tileColor2' : 'tileColor1'}">
    {#if hasCheckers.hasOwnProperty(thisTileNr)}<Checker player={hasCheckers[thisTileNr]}/>{/if}
</div>

<style>
    .tile {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tileColor1 {
        background-color: rgb(71, 170, 101);
    }
    .tileColor2 {
        background-color: rgb(51, 150, 92);
    }
</style>