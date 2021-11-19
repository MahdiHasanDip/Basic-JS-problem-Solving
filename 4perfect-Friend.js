// Problem no 4 - Perfect Friend Finder

// Friends array 
var friend = ["Amin", "Asif", "Mahdi", 'Ruhul Amin', "Nahid", "Rafiq"];


// largest friends name calculation 
function perfectFriend(friends) {

    if (typeof friend == "object") {

        let largestName = friends[0];
        for (let i = 0; i < friends.length; i++) {
            if (largestName.length < 5) {
                largestName = friends[i];
            }
        }
        return largestName;
    }

    else {
        let error = "please input a valid number. negetive number or text is not supported"
        return error;
    }
}


var input = perfectFriend(friend);
console.log(input);


// Problem no 4  end---------------------------