﻿let adventure_data = {

};

/* Sets up the adventure pane */
function start_adventure() {
    $("#character").removeClass("hidden");
    $("#events").removeClass("hidden");
    $("#events_topbar").html("Adventure!");
    $("#events_content").html("Welcome to Adventure Mode! <br /> I\'m glad you want to adventure, but this feature is still a long ways from being finished. Please message me on discord if you manage to get this far though! <br />");
    $("#events_content").append("<span style='color: red'>Note: Until this announcement is removed, adventure mode gives nothing and takes nothing. Progress on it will not be saved between reloads. It exists purely for testing purposes.</span><br />");
    $("#events_content").append("<span class='clickable' onclick='setup_combat()'>Start adventure!</span>");
}

function setup_combat() {
    $("#events_topbar").html("Combat Test");
    $("#events_content").html("<div id='combat' style='height: 30em; width: 40em; margin: auto;'></div>")
    $("#combat").html("<div id='combat_attack' style='height: 15em; border: solid white 1px;'>Attack</div>")
    $("#combat").append("<div id='combat_stats' style='height: 15em; border: solid white 1px;'>Stats</div>")
    $("#combat").append("<div id='combat_counter' style='width: 4em; height: 1.5em; border: solid white 1px; background: #444; position: relative; top: -16em;'>0</div>")

    $("#combat_stats").html("<div id='combat_energy' style='position: relative; top: 1em; height: 14em; width: 2em;'></div>");

    /* Setup energy */
    $("#combat_energy").html("<img src='images/power.png' alt='' style='width: 1.5em; height: 1.5em;' />")

    for (let i = 0; i < 10; i++) {
        $("#combat_energy").append("<div id='combat_energy_" + i.toString() + "' class='energy_box_off'></div>");
    }
    $("#combat_energy_9").toggleClass('energy_box_off energy_box_disabled');
    $("#combat_energy_0").toggleClass('energy_box_off energy_box_on');


    $("#combat_stats").append("<div style='position: relative; top: -14em; width: 30em; margin: auto;'>Stats. So this contains all your power usage and resources. The number in the box to the left is how many actions you have left before the enemy acts. The green/grey/red boxes to the left are your energy: green is available, gray is used, and red is locked.</div>");


    /* Setup shields */
    $("#combat_attack").html("<div id='combat_shield' style='height: 14em; width: 2em; vertical-align: bottom; display: table-cell;'></div>");
    for (let i = 4; i >= 0; i--) {
        $("#combat_shield").append("<img id='combat_shield_" + i.toString() + "' src='images/shield_on.png' style='height: 2.5em; width: 2.5em;' />");
    }
    $("#combat_shield_4").attr("src", "images/shield_off.png");
    $("#combat_shield_0").attr("src", "images/shield_power.png");

    $("#combat_attack").append("<div style='position: relative; top: -14em; width: 30em; margin: auto;'>Combat. Use your weapons here. Shields are to the left. Blue means they're on and working. Red means they're down (you took a hit). Green means they're on and won't go down when you take a hit.<br><span class='clickable' onclick='$(\"#combat_shield_3\").attr(\"src\", \"images/shield_off.png\");'>Ow!</span></div>");


   // $("#combat").append("<div id='combat_shield' style='position: relative; height: 12em; top: -12em;    width: 2em; background-color: blue;'></div>");

}