// Problem no 3 - Delivery Cost Calculator:

function deliveryCost(delevery) {

    // error  massege 
    if (delevery >= 0 && typeof delevery == "number") {


        // Delevery charge declear 
        const lessDeleveryCost = 100;
        const mediumDeleveryCost = 80;
        const highDeleveryCost = 50;

        // Less delevery count:
        if (delevery <= 100) {
            var totalcost = delevery * lessDeleveryCost;
            return totalcost;
        }

        // Meduim delevery count:
        else if (delevery <= 200) {
            var lessCost = 100 * lessDeleveryCost;
            var restCost = delevery - 100;
            var subCost = restCost * mediumDeleveryCost;
            var totalCost = subCost + lessCost;
            return totalCost;
        }

        // High delevery count:
        else {
            var lessCost = 100 * lessDeleveryCost;
            var mediumCost = 100 * mediumDeleveryCost;
            var restCount = delevery - 200;
            var subTotal = restCount * highDeleveryCost;
            var totalCost = subTotal + mediumCost + lessCost;
            return totalCost;
        }
    }

    else {
        let error = "Error = please input a valid number. Negetive number or Text is not supported"

        return error;
    }

}

var numberOfDelivery = 1;
var taka = deliveryCost(numberOfDelivery);

console.log(taka);


// Problem no 3  end---------------------------