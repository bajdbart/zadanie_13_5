var colors = require('colors');

function timeConvert(time) {
    if (time <= 3600 ) {
        return console.log((colors.green("Uptime: ")) + Math.floor(time/60) + "min. " + time % 60 + "sek." );
    } else if (time >= 3600) {
        return console.log((colors.green("Uptime: ")) + Math.floor(time/3600) + "godz. " + Math.floor((time % 3600)/60) + " min. " + (time % 60).toFixed(0) + "sek.");
    } 
}

exports.print = timeConvert;