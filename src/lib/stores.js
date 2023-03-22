import { writable } from 'svelte/store';

// take from DB later
export let playerTurn = 0;
export let hasCheckers = {'33':0, '43':1, '34':1, '44':0}
export let playerList = {'Ingen':0, 'Meg':2, 'Deg':1}; // 0 = svart, 1 = hvit, 2 = spectator

export let playerName = 'Ingen';
export let isPlayer = writable(playerList[playerName]);
