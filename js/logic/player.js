import {Drawer as Drawer} from "../visual/drawing.js"
import {Character as Character} from "./character.js"
import {Skill as Skill} from "./skill.js"

export class Player extends Character{
    constructor(name){
        super(10, 0, 0.5, 0.5)
        this.name = name;
        this.currStam = 100;
        this.maxStam = 100;
        this.end = 0.5;
        this.skills = new Array();
        Drawer.updateInfoSheat(this);
    }

}
