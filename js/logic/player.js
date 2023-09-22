import {Drawer as Drawer} from "../visual/drawing.js"
import {Character as Character} from "./character.js"
import {Skill as Skill} from "./skill.js"

export class Player extends Character{
    constructor(name, maxHealth, qi){
        super(maxHealth, qi)
        this.name = name;
        this.skills = new Array();
        Drawer.makeInfoSheat(this);
    }

}
