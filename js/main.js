
import {Player as Player} from "./logic/player.js"

window.addEventListener('load', () =>{
    var player = new Player("testPlayer", 10, 10);
console.log(JSON.stringify(player));
})


