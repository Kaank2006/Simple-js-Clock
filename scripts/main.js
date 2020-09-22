/*jslint es6 */
/*global
document, setInterval
*/
let timer3 = 0;
let timer2 = 0;
let timer1 = 0;

function clock() {
    "use strict";
    if (timer1 < 60) {
        timer1 += 1;
        document.getElementById("clock").innerHTML = timer3 + ":" + timer2 + ":" + timer1; //puts timer to html
    } else {
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

function mainfunc() {
    "use strict";
    setInterval(clock, 1000);
    document.getElementById('buttony').style.visibility = 'hidden';

}
// setInterval(clock, 1)
//for test purposes
// for  normal purposes
