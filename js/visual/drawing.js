export class Drawer {

    static updateInfoSheat(player){
        var playerDiv = document.getElementById("PlayerInfo");
        this.updateHealth(player);
        this.updateQi(player);
        this.updateName(player);
        this.updateStam(player);
        this.updateAtr(player);

    }
    static updateName(player){
        document.getElementById("playerName").innerHTML = player.name.toString();
    }

    static updateHealth(player){
        var healthBar = document.getElementById("healthBar");
        var precentageOfHealth = player.currHealth/player.maxHealth * 100;
        healthBar.style.width = precentageOfHealth.toString()+"%";
        healthBar.innerHTML = "Hp:     "+player.currHealth.toString()+"/"+player.maxHealth.toString();
    }

    static updateQi(player){
        var qiBar = document.getElementById("qiBar");
        if(player.maxQi === 0){
            document.getElementById("qiProgress").style.display = "none"
            return
        }
        var precentageOfQi = player.currQi/player.maxQi * 100;
        qiBar.style.width = precentageOfQi.toString()+"%";
        qiBar.innerHTML = "Qi:     "+player.currQi.toString()+"/"+player.maxQi.toString();
    }

    static updateStam(player){
        var stamBar = document.getElementById("stamBar");
        var precentageOfStam = player.currStam/player.maxStam * 100;
        stamBar.style.width = precentageOfStam.toString()+"%";
        stamBar.innerHTML = "Stamina:     "+player.currStam.toString()+"/"+player.maxStam.toString();
    }
    
    static updateAtr(player){
        document.getElementById("str").innerHTML = "str: "+player.str;
        document.getElementById("agi").innerHTML = "agi: "+player.agi;
        document.getElementById("end").innerHTML = "end: "+player.end;
    }





}