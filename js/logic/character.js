export class Character {
    constructor (maxHealth, qi, str, agi){
        this.maxHealth = maxHealth;
        this.currHealth = maxHealth;
        this.maxQi = qi;
        this.currQi = qi;
        this.str = str;
        this.agi = agi;
    }
}