// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]

const toggleDrum = (arrayName, arrayIndex) => {

    if (!arrayName || !arrayIndex) {
        return null;
    }
    x = findArray(arrayName);
    if (x[arrayIndex] == false) {
        x[arrayIndex] = true;
        console.log(x);
    } else if (x[arrayIndex] == true) {
        x[arrayIndex] = false; 
    }
};

const findArray = (arrayName) => {
    if (arrayName == "kicks") {
        //console.log("kicks");
        return kicks;
    } else if (arrayName == "snares") {
        //console.log("snares");
        return snares;
    } else if (arrayName == "hiHats") {
        //console.log("hiHats");
        return hiHats;
    } else if (arrayName == "rideCymbals") {
        //console.log("rideCymbals");
        return rideCymbals;
    } else {
        return null;
    }

}


const clear = (arrayName) => {
    //commit git
    if (!arrayName) {
        return false;
    }
    x = findArray(arrayName);
    if (x == null) {
        return;
    }
    //console.log ('this is X ' + x);
        x.fill(false);
        //console.log(x);
}

const invert = (arrayName) =>  {
 //console.log ('this is invert arrayname ' + arrayName);
    if (!arrayName) {
        return null;
    }
    x = findArray(arrayName);

    if (x == null) {
        return;
    }
    
    for (i=0; i < x.length; i++) {
        //console.log(arrayName[i]);
        if (x[i] == false) {
            //console.log(arrayName[i]);
            x[i] = true
        } else {
            x[i] = false
        }
    }
};

//console.log(rideCymbals);

//clear(rideCymbals);
//console.log(rideCymbals);

//invert(kicks)
