export class Character {
    constructor (maxHealth, qi){
        this.maxHealth = maxHealth;
        this.currHealth = maxHealth;
        this.maxQi = qi;
        this.currQi = qi;
    }
}