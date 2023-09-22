export class Drawer {
    static makeInfoSheat(player){
        var playerDiv = document.getElementById("PlayerInfo");
        this.updateHealth(player);
        this.updateQi(player);
        this.updateName(player);

    }
    static updateName(player){
        document.getElementById("playerName").innerHTML = player.name.toString();
    }

    static updateHealth(player){
        var healthBar = document.getElementById("healthBar");
        var precentageOfHealth = player.currHealth/player.maxHealth * 100;
        healthBar.style.width = precentageOfHealth.toString()+"%";
        healthBar.innerHTML = player.currHealth.toString()+"/"+player.maxHealth.toString();
    }

    static updateQi(player){
        var qiBar = document.getElementById("qiBar");
        var precentageOfQi = player.currQi/player.maxQi * 100;
        qiBar.style.width = precentageOfQi.toString()+"%";
        qiBar.innerHTML = player.currQi.toString()+"/"+player.maxQi.toString();
    }
}