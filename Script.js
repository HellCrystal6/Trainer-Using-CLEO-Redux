/// <reference path=".config/gta_iv.d.ts"/>

import { KeyCode } from ".config/enums.js"

var p = new Player(0)

showTextBox("Script Loaded!")

while(true){
    wait(0)

    //Guide
    if(Pad.IsKeyDown(KeyCode.F12)){
        showTextBox("F1 = Invincible ON, F3 = Invincible OFF, F4 = Clear Wanted Level, F5 = Add Money, F6 = Remove Money, F7 = Add Health")
    }
    //Invincible on
    if(Pad.IsKeyDown(KeyCode.F1)){
        let Invincible = true
        p.increaseMaxHealth(10)
        p.setInvincible(true)
        showTextBox("Invincible = " + Invincible)
    }
    //Invincible off
    if(Pad.IsKeyDown(KeyCode.F3)){
        let Invincible = false
        p.setInvincible(false)
        showTextBox("Invincible = " + Invincible)
    }
    //Clear Wanted Level
    if(Pad.IsKeyDown(KeyCode.F4)){
        p.clearWantedLevel()
        showTextBox("Wanted Level Cleared!")
    }
    //Add Money
    if(Pad.IsKeyDown(KeyCode.F5)){
        p.addScore(1000)
        showTextBox("Added $1000")
    }
    //Remove Money
    if(Pad.IsKeyDown(KeyCode.F6)){
        p.addScore(-1000)
        showTextBox("Removed $1000")
    }
    //Add Health
    if(Pad.IsKeyDown(KeyCode.F7)){
        p.increaseMaxHealth(10)
        showTextBox("Healed")
    }

}
