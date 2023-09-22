class Skill{
    constructor(name, scalers, type, baseDmg){
        this.name = name;
        this.scalers = scalers;
        this.type = type;
        this.value = baseDmg;
    }
}

class Character {
    constructor (maxHealth, str, int, dex){
        this.maxHealth = maxHealth;
        this.str = str;
        this.int = int;
        this.dex = dex;
        this.currHealth = maxHealth;
    }
}

class Player extends Character{
    constructor(){
        super(10, 1, 1, 1)
        this.name = "testPlayer";
        this.skills = new Array();
        this.makeInfoSheat();


    }

    makeInfoSheat(){
        var playerDiv = document.getElementById("PlayerInfo");
        this.updateHealth();
        this.updateAttributes();
        this.updateName();

    }
    updateName(){
        document.getElementById("playerName").innerHTML = this.name.toString();
    }

    updateHealth(){
        var healthBar = document.getElementById("healthBar");
        var precentageOfHealth = this.currHealth/this.maxHealth * 100;
        healthBar.style.width = precentageOfHealth.toString()+"%";
        healthBar.innerHTML = this.currHealth.toString()+"/"+this.maxHealth.toString();
    }
    updateAttributes(){
        document.getElementById("str").innerHTML = "Str: "+ this.str.toString();
        document.getElementById("dex").innerHTML = "Dex: "+ this.dex.toString();
        document.getElementById("int").innerHTML = "Int: "+ this.int.toString();
    }
}


var player = new Player();
var skillFlail = new Skill("Flail", {"str": 0.8, "dex": 0.8}, "atk", 1);
player.skills.push(skillFlail);
console.log(JSON.stringify(player));

