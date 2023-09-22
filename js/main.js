
import {Player as Player} from "./logic/player.js"

window.addEventListener('load', () =>{
    var player = new Player("testPlayer", 10, 0);
console.log(JSON.stringify(player));
})


