export class Character {
    constructor (maxHealth, qi, str, agi){
        this.maxHealth = maxHealth;
        this.currHealth = maxHealth;
        this.baseHealthRegen = maxHealth/100;
        this.tempHealthRegen = 0;
        this.healthRegenMulti = 1;
        this.healthRegen = (this.baseHealthRegen + this.tempHealthRegen) * this.healthRegenMulti;

        this.maxQi = qi;
        this.currQi = qi;
        this.baseQiRegen = this.qi/100;
        this.tempQiRegen = 0;
        this.giRegenMulti = 1;
        this.qiRegen = (this.baseQiRegen + this.tempQiRegen) * this.qiRegenMulti;


        this.str = str;
        this.agi = agi;
    }
}