// Problem no 2 - Total sales Calculator:

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // products price 

    shirtPrice = 100;
    pantPrice = 200;
    shoePrice = 500;



    if (shirtQuantity >= 0 && typeof shirtQuantity == "number" && pantQuantity >= 0 && typeof pantQuantity == "number" && shoeQuantity >= 0 && typeof shoeQuantity == "number") {

        // Total Price Calculation
        totalShirtPrice = shirtPrice * shirtQuantity;
        totalPantPrice = pantPrice * pantQuantity;
        totalShoePrice = shoePrice * shoeQuantity;

        let totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;

        return totalPrice
    }

    // error massege 

    else {
        let error = "Error= please input a valid number. Negetive number or Text is not supported"

        return error;
    }

}


let Shirt = 1;
let Pant = 0;
let Shoes = 1;

var Answare = totalSales(Shirt, Pant, Shoes);

console.log(Answare);

// Problem no 2  end---------------------------