/// <reference path=".config/gta_iv.d.ts"/>

import { KeyCode } from ".config/enums.js";

var p = new Player(0);

showTextBox("Script Loaded")

while(true){
    wait(0);

    let neverWanted = false;
    let Invincible = false;
    
    //Guide
    if(Pad.IsKeyDown(KeyCode.F12)){
        showTextBox("F1 = Invincible ON, F3 = Invincible OFF, F4 = Clear Wanted Level, F5 = Add Money, F6 = Remove Money, F7 = Add Health, F8 = Add Armor, F9 = Give Guns, F10 = Spawn NRG 900, F11 = Spawn SuperGT, F12 = Spawn Helicopter");
    }
    //Invincible on
    if(Pad.IsKeyDown(KeyCode.F1)){
        Invincible = true
        p.increaseMaxHealth(10);
        p.setInvincible(true);
        showTextBox("Invincible = " + Invincible);
    }
    //Invincible off
    if(Pad.IsKeyDown(KeyCode.F3)){
        let Invincible = false;
        p.setInvincible(false);
        showTextBox("Invincible = " + Invincible);
    }
    //Clear Wanted Level
    if(Pad.IsKeyDown(KeyCode.F4)){
        p.clearWantedLevel();
        showTextBox("Wanted Level Cleared!");
    }
    //Add Money
    if(Pad.IsKeyDown(KeyCode.F5)){
        p.addScore(1000);
        showTextBox("Added $1000!");
    }
    //Remove Money
    if(Pad.IsKeyDown(KeyCode.F6)){
        p.addScore(-1000);
        showTextBox("Removed $1000!");
    }
    //Add Health
    if(Pad.IsKeyDown(KeyCode.F7)){
        p.increaseMaxHealth(10);
        showTextBox("Healed!");
    }
    //Add Armor
    if(Pad.IsKeyDown(KeyCode.F8)){
        p.increaseMaxArmor(15);
        showTextBox("Set Armor To Max!");
    }
    //Infinite Ammo
    if(Pad.IsKeyDown(KeyCode.F9)){
        Game.ActivateCheat(1);
        showTextBox("Spawned Guns!");
    }
    //Spawn NRG 900
    if(Pad.IsKeyDown(KeyCode.F10)){
        Game.ActivateCheat(8);
        showTextBox("Spawned NRG 900!");
    }
    //Spawn SuperGT
    if(Pad.IsKeyDown(KeyCode.F11)){
        Game.ActivateCheat(12);
        showTextBox("Spawned Turismo!");
    }
    //Spawn Annihilator
    if(Pad.IsKeyDown(KeyCode.F12)){        
        Game.ActivateCheat(7);
        showTextBox("Spawned Annihilator!");
    }

}
