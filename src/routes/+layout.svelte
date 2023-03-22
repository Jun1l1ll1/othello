<script>
    import { playerTurn } from "$lib/stores";

    let bg;
    let text;
    if (playerTurn == 0) {
        bg = 'black';
        text = 'white';
    } else if (playerTurn == 1) {
        bg = 'white';
        text = 'black';
    }

</script>
<style>

    :global(body) {
        margin: 0px;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .myBody {
        background-color: var(--bg);
        color: var(--text);
        width: 100vw;
        height: 100vh;
    }
</style>

<div style="--bg:{bg}; --text:{text}" class="myBody">
    <slot/>
</div>