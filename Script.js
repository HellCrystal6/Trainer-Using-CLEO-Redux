/// <reference path=".config/gta_iv.d.ts"/>

import { KeyCode } from ".config/enums.js";

var p = new Player(0);

showTextBox("Script Loaded")

while(true){
    wait(0);

    var Invincible = false;
    
    //Guide
    if(Pad.IsKeyDown(KeyCode.P)){
        showTextBox("F1 = Invincible ON, OFF, F3 = Clear Wanted Level, F4 = Add Money, F5 = Remove Money, F6 = Add Health, F7 = Add Armor, F8 = Give Guns, F9 = Spawn NRG 900, F10 = Spawn SuperGT, F11 = Spawn Helicopter");
    }
    //Invincible on
    if(Pad.IsKeyDown(KeyCode.F1)){
        Invincible = true;
        p.increaseMaxHealth(10);
        p.setInvincible(true);
        showTextBox("Invincible = " + Invincible);
    } else if(Pad.IsKeyDown(KeyCode.F1) && Invincible === true){
        Invincible = false;
        p.increaseMaxHealth(10);
        p.setInvincible(false);
        showTextBox("Invincible = " + Invincible);
    }
    //Clear Wanted Level
    if(Pad.IsKeyDown(KeyCode.F3)){
        p.clearWantedLevel();
        showTextBox("Wanted Level Cleared!");
    }
    //Add Money
    if(Pad.IsKeyDown(KeyCode.F4)){
        p.addScore(1000);
        showTextBox("Added $1000!");
    }
    //Remove Money
    if(Pad.IsKeyDown(KeyCode.F5)){
        p.addScore(-1000);
        showTextBox("Removed $1000!");
    }
    //Add Health
    if(Pad.IsKeyDown(KeyCode.F6)){
        p.increaseMaxHealth(10);
        showTextBox("Healed!");
    }
    //Add Armor
    if(Pad.IsKeyDown(KeyCode.F7)){
        p.increaseMaxArmor(15);
        showTextBox("Set Armor To Max!");
    }
    //Infinite Ammo
    if(Pad.IsKeyDown(KeyCode.F8)){
        Game.ActivateCheat(1);
        showTextBox("Spawned Guns!");
    }
    //Spawn NRG 900
    if(Pad.IsKeyDown(KeyCode.F9)){
        Game.ActivateCheat(8);
        showTextBox("Spawned NRG 900!");
    }
    //Spawn SuperGT
    if(Pad.IsKeyDown(KeyCode.F10)){
        Game.ActivateCheat(12);
        showTextBox("Spawned Turismo!");
    }
    //Spawn Annihilator
    if(Pad.IsKeyDown(KeyCode.F11)){        
        Game.ActivateCheat(7);
        showTextBox("Spawned Annihilator!");
    }

}
