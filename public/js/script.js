// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]

const toggleDrum = (arrayName, arrayIndex) => {

    if (!arrayName || !arrayIndex) {
        return null;
    } else if (!arrayName[arrayIndex]){
        arrayName[arrayIndex] = true
    }

};


const clear = (arrayName) => {
    //console.log(arrayName);
    if (!arrayName) {
        return;
    } else if (arrayName == !kicks || !snares || !hiHats || !rideCymbals) {
        return;
    } else {
arrayName.fill = false;
    }
}

const invert = (arrayName) =>  {
 //console.log ('this is invert arrayname ' + arrayName);
    if (!arrayName) {
        return null;
    } else if (arrayName === !kicks || !snares || !hiHats || !rideCymbals) {
        return null;
    } 

    for (i=0; i < arrayName.length; i++) {
        //console.log(arrayName[i]);
        if (arrayName[i] == false) {
            //console.log(arrayName[i]);
            arrayName[i] = true
        } else {
            arrayName[i] = false
        }
    }
};

//console.log(rideCymbals);

//clear(rideCymbals);
//console.log(rideCymbals);

//invert(kicks)
