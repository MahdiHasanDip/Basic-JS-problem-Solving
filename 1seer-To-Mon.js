// Problem no 1 - Seet to Mon Converter:

function seerToMon(seer) {

    if (seer >= 0 && typeof seer == "number") {
        // seer to mon convertion 
        let mon = seer / 40;

        // return output 
        return mon;

    }
    else {

        let error = "please input a valid number. negetive number or text is not supported"
        return error;
    }
}


let seer = 80;

let Answare = seerToMon(seer);
console.log(Answare);


// Problem no 1  end---------------------------