import {Character as Character} from "./character.js"
import {Skill as Skill} from "./skills/skill.js"

export class Player extends Character{
    constructor(name){
        super(10, 0, 0.5, 0.5)
        this.name = name;

        this.currStam = 100;
        this.maxStam = 100;
        this.baseStamRegen = 1;
        this.tempStamRegen = 0;
        this.stamRegenMulti = 1;
        this.stamRegen = (this.baseStamRegen + this.tempStamRegen) * this.stamRegenMulti;

        this.end = 0.5;

        this.statusEfects = {};
        this.skills = new Array();
    }

    updateBars(){

        this.currHealth = this.currHealth + this.healthRegen;
        this.currStam = this.currStam + this.stamRegen;
        this.currQi = this.currQi + this.qiRegen;
        if(this.currHealth > this.maxHealth){
            this.currHealth = this.maxHealth;
        }
        if(this.currStam > this.maxStam){
            this.currStam = this.maxStam;
        }
        if(this.currQi > this.maxQi){
            this.currQi = this.maxQi;
        }

    }

}
