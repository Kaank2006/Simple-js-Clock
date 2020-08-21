function clock() {
    "use strict";

    var timer1 = 0; //start from 0
    var timer2 = 0; //start from 0
    var timer3 = 0; //start from 0
    
    if (timer1 < 60) {
        timer1 += 1;
        document.getElementById("clock").innerHTML = timer3 + ":" + timer2 + ":" + timer1; //puts timer to html
    }
    else {
        if (timer1 === 60) { //seconds to minutes
            timer1 = 0;
            timer2 += 1;
            if (timer2 === 60) { //minutes to seconds
                timer2 = 0;
                timer3 += 1;
            }
        }
    }
}
