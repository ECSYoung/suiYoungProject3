// document ready
// $(document).ready(function () {
//     console.log('ready');
// });


// Random Num Generator and Array function
$('.deck7').on('click', function () {
    //for major arcana and card number.
    let num = Math.round(Math.random() * 35) + 1;
    let value = num;

    if (num == 1) {
        value = "Ace"
    } else if (num == 11) {
        value = "Page"
    } else if (num == 12) {
        value = "Queen"
    } else if (num == 13) {
        value = "King"
    } else if (num == 14) {
        value = "mj0"
    } else if (num == 15) {
        value = "mj1"
    } else if (num == 16) {
        value = "mj2"
    } else if (num == 17) {
        value = "mj3"
    } else if (num == 18) {
        value = "mj4"
    } else if (num == 19) {
        value = "mj5"
    } else if (num == 20) {
        value = "mj6"
    } else if (num == 21) {
        value = "mj7"
    } else if (num == 22) {
        value = "mj8"
    } else if (num == 23) {
        value = "mj9"
    } else if (num == 24) {
        value = "mj10"
    } else if (num == 25) {
        value = "mj11"
    } else if (num == 26) {
        value = "mj12"
    } else if (num == 27) {
        value = "mj13"
    } else if (num == 28) {
        value = "mj14"
    } else if (num == 29) {
        value = "mj15"
    } else if (num == 30) {
        value = "mj16"
    } else if (num == 31) {
        value = "mj17"
    } else if (num == 32) {
        value = "mj18"
    } else if (num == 33) {
        value = "mj19"
    } else if (num == 34) {
        value = "mj20"
    } else if (num == 35) {
        value = "mj21"
    };
    console.log(num);
    console.log(value);

    let num2 = Math.round(Math.random() * 4) + 1;
    let value2 = num2;
    if (num >= 14) {
        value2 = "Major Arcana"
    } else if (num2 == 1) {
        value2 = "Wands"
    } else if (num2 == 2) {
        value2 = "Cups"
    } else if (num2 == 3) {
        value2 = "Swords"
    } else if (num2 == 4) {
        value2 = "Pentacles"
    }
    console.log(num2);
    console.log(value2);
    
    //for fun, append results to p:
    $('textarea').append("You've pulled " + value + " of " + value2 + "! ");
});


// bring it all together:
// assign value and value2 to index, with if statements, that exclude suits when values 14 - 15 are returned. Give a variable name: cardSelected

const CardDeck = () => {
    // set up array for individual cards
    const card = [
        "mj0", 
        "mj1", 
        "mj2", 
        "mj3", 
        "mj4", 
        "mj5", 
        "mj6", 
        "mj7", 
        "mj8", 
        "mj9", 
        "mj10", 
        "mj11", 
        "mj12", 
        "mj13", 
        "mj14", 
        "mj15", 
        "mj16", 
        "mj17", 
        "mj18", 
        "mj19", 
        "mj20", 
        "mj21", 
        "Ace", 
        "2", 
        "3", 
        "4", 
        "5", 
        "6", 
        "7", 
        "8", 
        "9", 
        "10",
        "Jack", 
        "Queen", 
        "King"];

    // set up suite arrays
    let majorArc = [];
    let wands = [];
    let cups = [];
    let swords = [];
    let pentacles = [];
    let Result = [];

    //set up function to append to suite arrays.
    for (i = 0; i < Cd.length; i++) {
        majorArc.push(values[i] + " of the Major Arcana");
        wands.push(values[i] + " of Wands");
        cups.push(values[i] + " of Cups");
        swords.push(values[i] + " of Swords");
        pentacles.push(values[i] + " of Pentacles");
    }

    // assign array index for cardSelected to asset and text.

    // append according to cardSelected to appropriate fields with the use of a click counter.

    //"reset" pop up


}

function newFunction() {
    $('textarea').val(' ');
}
