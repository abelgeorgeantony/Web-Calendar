let year = 0, days = 0, startingday = 0;
let fj=0;

function Yearinput() {
    startingday = 0; year = 0; days = 0;
    if (document.getElementById("YearInput").value != "") {
        year = Number(document.getElementById("YearInput").value);
        document.getElementById("YearInput").value = null;
        StartingDayFinder();
        console.log("starting day : " + startingday);
        dayswitcher();
        cellediting();
    }
    else {
        console.log("null : No year entered");
    }
}

function StartingDayFinder() {
    for (let i = 0; i < year; i++) {
        if (IsLeap(i) == true) {
            days = days + 366;
        }
        else {
            days = days + 365;
        }
    }
    startingday = days % 7;
}

function IsLeap(yearrr) {
    if ((yearrr % 100) == 0) {
        if ((yearrr % 400) == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else if ((yearrr % 4) == 0) {
        return true;
    }
    return false;
}

function dayswitcher() {
    if (startingday == 0) {
        console.log("saturday");
        fj=6;
    }
    else if (startingday == 6) {
        console.log("friday");
        fj=5;
    }
    else if (startingday == 5) {
        console.log("thursday");
        fj=4;
    }
    else if (startingday == 4) {
        console.log("wednesday");
        fj=3;
    }
    else if (startingday == 3) {
        console.log("tuesday");
        fj=2;
    }
    else if (startingday == 2) {
        console.log("monday");
        fj=1;
    }
    else {
        console.log("sunday");
        fj=0;
    }
    console.log("\n");
}

function cellediting() {
    tablereset();
    let i = 0, j = 0, r = 1, cell;

    for (i = 1; i < 7; i++) {
        cell = document.getElementById("monthtable").rows[i].cells;
        for (j = fj; j < 7; j++) {

            cell[j].innerHTML = r;
            r++;
            if(r==32){
                return (null);
            }
        }
        fj=0;
    }

}

function tablereset(){
    let i = 0, j = 0, cell;

    for (i = 1; i < 7; i++) {
        cell = document.getElementById("monthtable").rows[i].cells;
        for (j = 0; j < 7; j++) {

            cell[j].innerHTML = null;
            
        }
        
    }
}