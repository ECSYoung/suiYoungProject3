// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// set up arrays:
tarotCard = {
    majorArcana: [
        {//array index: 0
            value: 'mj0',
            card: `<img src="./Assets/Cards/wingedSpirit/0.jpg" alt=""></img>`,
            title: `<h4 class="pBreak">The Fool</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            value: 'mj1',
            card: `<img src="" alt=""></img>`,
            title: `The Magician`,
            generalMeaning: `ptext`,
            advise: `<h4 class="pBreak:>In the Advice Position<h4>`
        },
        {//array index: 2
            value: 'mj',
            card: `<img src="" alt=""></img>`,
            title: `Empress`,
            generalMeaning: `ptext`,
            advise: `<h4 class="pBreak:>In the Advice Position<h4>`
        }
    ],
    wands: [
        {//array index: 0
            value: "Ace",
            card: `<img src="" alt = "">`,
            title: `Ace`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 1
            value: "Page",
            card: `<img src="" alt = "">`,
            title: `Page`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 2
            value: "Queen",
            card: `<img src="" alt = "">`,
            title: `Queen`,
            generalMeaning: `general meaning`,
            advise: `something`
        }
    ],
    cups: [
        {//array index: 0
            value: "Ace",
            card: `<img src="" alt = "">`,
            title: `Ace of cups`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 1
            value: "Page",
            card: `<img src="" alt = "">`,
            title: `Page of Cups`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 2
            value: "Queen",
            card: `<img src="" alt = "">`,
            title: `Queen of cups`,
            generalMeaning: `general meaning`,
            advise: `something`
        }
    ],
    swords: [
        {//array index: 0
            value: "Ace",
            card: `<img src="" alt = "">`,
            title: `ace of swords`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 1
            value: "Page",
            card: `<img src="" alt = "">`,
            title: `Page of swords`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 2
            value: "Queen",
            card: `<img src="" alt = "">`,
            title: `Queen of Swords`,
            generalMeaning: `general meaning`,
            advise: `something`
        }
    ],
    pentacles: [
        {//array index: 0
            value: "Ace",
            card: `<img src="" alt = "">`,
            title: `pentacles`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 1
            value: "Page",
            card: `<img src="" alt = "">`,
            title: `Page of Pentacles`,
            generalMeaning: `general meaning`,
            advise: `something`
        },
        {//array index: 2
            value: "Queen",
            card: `<img src="" alt = "">`,
            title: `Queen of Pentacles`,
            generalMeaning: `general meaning`,
            advise: `something`
        }
    ],
}

suites = [
    'wands', //0
    'cups', //1
    'swords', //2
    'pentacles' //3
]// end of card arrays

let num = Math.round(Math.random() * 35) + 1;

// function that ill provide a randomNumber
function getRandom(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

$('.deck7').on('click', function () {
    //for major arcana and card number.
        // random number generator for cards 1 - 13 + 22 major arcana.
        let num = Math.round(Math.random() * 35) + 1;
        
        // if num returns a value under 14, search in the suite array for the suite.
        // use the returned suite value to find the array in 'tarotCard' object
        // random search within suite array for a card number, and 
        // return value in console log/append to read pannel.
        if (num < 14) {//for non-major arcana
            console.log(num);
            let suiteIndex = getRandom(suites.length); //return Int value for suit index, use value to search suites array for value and console.log it.
            console.log(suiteIndex);            
            let findSuite = suites[suiteIndex];
            console.log(findSuite);
            console.log(suites[findSuite]);  
            
                //for fun, append results to p:

            $('.readout').append("<li>" + "You've pulled " + num + " of " + suites[findSuite] + "! " + "</li>");

        } else if (num > 14) { //for major arcana
            console.log(num); 
            let majArcana = getRandom(tarotCard.majorArcana.length); 
            //return Int value for majorArcana index
            console.log(majArcana);
            console.log(tarotCard.majorArcana[majArcana].title);
                //for fun, append results to p:

            $('.readout').append("<li>" + "You've pulled " + tarotCard.majorArcana[majArcana].title + "! " + "</li>");
        }
    
});




