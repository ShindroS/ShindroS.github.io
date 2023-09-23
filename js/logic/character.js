export class Character {
    constructor (maxHealth, qi, str, agi){
        this.maxHealth = maxHealth;
        this.currHealth = maxHealth;
        this.baseHealthRegen = maxHealth/100;
        this.tempHealthRegen = 0;
        this.healthRegenMulti = 1;
        this.healthRegen = parseFloat(((this.baseHealthRegen + this.tempHealthRegen) * this.healthRegenMulti * 0.1).toFixed(2));

        this.maxQi = qi;
        this.currQi = qi;
        this.baseQiRegen = this.qi/100;
        this.tempQiRegen = 0;
        this.giRegenMulti = 1;
        this.qiRegen = parseFloat(((this.baseQiRegen + this.tempQiRegen) * this.qiRegenMulti * 0.1).toFixed(2));

        this.skills = new Array();

        this.str = str;
        this.agi = agi;
    }
}