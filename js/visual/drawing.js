export class Drawer {

    static updateInfoSheat(player){
        this.updateBars(player);
        this.updateName(player);
        this.updateAtr(player);

    }
    static updateName(player){
        document.getElementById("playerName").innerHTML = player.name.toString();
    }

    static updateBars(player){
        this.updateHealth(player);
        this.updateStam(player);
        this.updateQi(player);
    }

    static updateHealth(player){
        var healthBar = document.getElementById("healthBar");
        var healthText = document.getElementById("healthText");
        var precentageOfHealth = player.currHealth/player.maxHealth * 100;
        healthBar.style.width = precentageOfHealth.toString()+"%";
        healthText.innerHTML = "Hp:     "+player.currHealth.toString()+"/"+player.maxHealth.toString()+"     +"+ player.healthRegen.toString();
    }

    static updateQi(player){
        var qiBar = document.getElementById("qiBar");
        var qiText = document.getElementById("qiText");
        if(player.maxQi === 0){
            document.getElementById("qiProgress").style.display = "none"
            return
        }
        var precentageOfQi = player.currQi/player.maxQi * 100;
        qiBar.style.width = precentageOfQi.toString()+"%";
        qiText.innerHTML = "Qi:     "+player.currQi.toString()+"/"+player.maxQi.toString()+"     +"+ player.qiRegen.toString();
    }

    static updateStam(player){
        var stamBar = document.getElementById("stamBar");
        var stamText = document.getElementById("stamText");
        var precentageOfStam = player.currStam/player.maxStam * 100;
        stamBar.style.width = precentageOfStam.toString()+"%";
        stamText.innerText = "Stamina:     "+player.currStam.toString()+"/"+player.maxStam.toString()+"     +"+ player.stamRegen.toString() ;
    }
    
    static updateAtr(player){
        document.getElementById("str").innerHTML = "str: "+player.str;
        document.getElementById("agi").innerHTML = "agi: "+player.agi;
        document.getElementById("end").innerHTML = "end: "+player.end;
    }


    static updateActions(actions){
        for(var a of actions){
            var button = document.createElement("button");
            button.innerHTML = a.name;
            document.getElementById("actionsPannel").appendChild(button);

            button.addEventListener("click", a.effect);
        }
    }


}