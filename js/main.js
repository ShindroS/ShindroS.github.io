
import {Player as Player} from "./logic/player.js"
import {Drawer as Drawer} from "./visual/drawing.js"

var player = new Player("testPlayer");

function tick(){
    Drawer.updateBars(player)
}

window.addEventListener('load', () =>{

    Drawer.updateInfoSheat(player);

    setInterval(tick, 100);
console.log(JSON.stringify(player));
})


