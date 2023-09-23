import {Character as Character} from "./character.js"

export class Player extends Character{
    constructor(name){
        super(10, 0, 0.5, 0.5)
        this.name = name;

        this.currStam = 100;
        this.maxStam = 100;
        this.baseStamRegen = 1;
        this.tempStamRegen = 0;
        this.stamRegenMulti = 1;
        this.stamRegen = parseFloat(((this.baseStamRegen + this.tempStamRegen) * this.stamRegenMulti * 0.1).toFixed(2));

        this.end = 0.5;

        this.statusEfects = {};
        
    }

    updateBars(){
        this.currHealth = parseFloat((this.currHealth + this.healthRegen).toFixed(2));
        this.currStam = parseFloat((this.currStam + this.stamRegen).toFixed(2));
        this.currQi = parseFloat((this.currQi + this.qiRegen).toFixed(2));
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
