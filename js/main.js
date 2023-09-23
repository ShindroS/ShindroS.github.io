
import {Player as Player} from "./logic/player.js"
import {Drawer as Drawer} from "./visual/drawing.js"
import "./logic/actions/actions.js"
import { Action as Action} from "./logic/actions/action.js";
import { liftRocks as liftRocks } from "./logic/actions/actions.js";

var player;
var actions;

function tick(){
    player.updateBars()
    Drawer.updateBars(player)
    Drawer.updateAtr(player)

}

window.addEventListener('load', () =>{

    player = new Player("testPlayer");
    actions = new Array;




    Drawer.updateInfoSheat(player);
    


    actions.push( new Action("Lift Rocks", "training", liftRocks.bind(player)))
    Drawer.updateActions(actions, player);

    setInterval(tick, 100);
})


