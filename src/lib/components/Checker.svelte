<script>
    export let player;
</script>

<div class="{player == 0 ? 'player0' : 'player1'}"></div>

<style>
    div {
        border-radius: 50%;
        box-shadow: inset 0 0 0 3px rgba(121, 121, 121, 0.26);
        width: 80%;
        height: 80%;
    }

    .player0 {
        background-color: rgb(0, 0, 0);
    }
    .player1 {
        background-color: whitesmoke;
    }
</style>