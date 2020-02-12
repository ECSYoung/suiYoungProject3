// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// 🌎 GLOBAL SCOPE •••
//button to empty inputs:
$('.buttonStyle').on('click', function() {
    $('placeholder1').empty();
    $('placeholder2').empty();
    $('placeholder3').empty();
    $('.readSpace').empty();
    console.log('.buttonStyle');
});

// declare global variables 
let suiteIndex;
let findSuite;
let majArcana;
let counter = 0;

// set up arrays:
tarotCard = {
    majorArcana: [
        {//array index: 0
            card: `<img src="./Assets/Cards/wingedSpirit/0.jpg" alt="The Fool Card"`,
            title: `<h4 class="pBreak">The Fool</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img src="./Assets/Cards/wingedSpirit/1.jpg" alt="The Magician"`,
            title: `<h4 class="pBreak">The Magician</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img src="./Assets/Cards/wingedSpirit/2.jpg" alt="The Fool Card"`,
            title: `<h4 class="pBreak">The Fool</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img src="./Assets/Cards/wingedSpirit/3.jpg" alt="The Empress"`,
            title: `<h4 class="pBreak">The Empress</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img src="./Assets/Cards/wingedSpirit/4.jpg" alt="The Emperor"`,
            title: `<h4 class="pBreak">The Emperor</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img src="./Assets/Cards/wingedSpirit/5.jpg" alt="The Hierophant"`,
            title: `<h4 class="pBreak">The Hierophant</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img src="./Assets/Cards/wingedSpirit/6.jpg" alt="The Lovers"`,
            title: `<h4 class="pBreak">The Lovers</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img src="./Assets/Cards/wingedSpirit/7.jpg" alt="The Chariot"`,
            title: `<h4 class="pBreak">The Chariot</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img src="./Assets/Cards/wingedSpirit/8.jpg" alt="The Strength"`,
            title: `<h4 class="pBreak">The Strength</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img src="./Assets/Cards/wingedSpirit/9.jpg" alt="The Hermit"`,
            title: `<h4 class="pBreak">The Hermit</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img src="./Assets/Cards/wingedSpirit/10.jpg" alt="The World"`,
            title: `<h4 class="pBreak">The World</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img src="./Assets/Cards/wingedSpirit/11.jpg" alt="The Justice"`,
            title: `<h4 class="pBreak">The Justice</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img src="./Assets/Cards/wingedSpirit/12.jpg" alt="The Hanged Man"`,
            title: `<h4 class="pBreak">The Hanged Man</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 14
            card: `<img src="./Assets/Cards/wingedSpirit/13.jpg" alt="Death"`,
            title: `<h4 class="pBreak">Death</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 15
            card: `<img src="./Assets/Cards/wingedSpirit/14.jpg" alt="Temperance"`,
            title: `<h4 class="pBreak">Temperance</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 16
            card: `<img src="./Assets/Cards/wingedSpirit/15.jpg" alt="The Devil"`,
            title: `<h4 class="pBreak">The Devil</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 17
            card: `<img src="./Assets/Cards/wingedSpirit/16.jpg" alt="The Tower"`,
            title: `<h4 class="pBreak">The Tower</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 18
            card: `<img src="./Assets/Cards/wingedSpirit/17.jpg" alt="The Star"`,
            title: `<h4 class="pBreak">The Star</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 19
            card: `<img src="./Assets/Cards/wingedSpirit/18.jpg" alt="The Moon"`,
            title: `<h4 class="pBreak">The Moon</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 20
            card: `<img src="./Assets/Cards/wingedSpirit/19.jpg" alt="The Sun"`,
            title: `<h4 class="pBreak">The Sun</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 21
            card: `<img src="./Assets/Cards/wingedSpirit/20.jpg" alt="Judgement"`,
            title: `<h4 class="pBreak">Judgement</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 22
            card: `<img src="./Assets/Cards/wingedSpirit/21.jpg" alt="The World"`,
            title: `<h4 class="pBreak">The World</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    wands: [
        {//array index: 0
            card: `<img src="./Assets/Cards/wingedSpirit/22.jpg" alt="The Ace of Wands"`,
            title: `<h4 class="pBreak">The Ace of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img src="./Assets/Cards/wingedSpirit/23.jpg" alt="2 of Wands"`,
            title: `<h4 class="pBreak">Two of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img src="./Assets/Cards/wingedSpirit/24.jpg" alt="3 of Wands"`,
            title: `<h4 class="pBreak">Three of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img src="./Assets/Cards/wingedSpirit/25.jpg" alt="4 of Wands"`,
            title: `<h4 class="pBreak">Four of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img src="./Assets/Cards/wingedSpirit/26.jpg" alt="5 of Wands"`,
            title: `<h4 class="pBreak">Five of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img src="./Assets/Cards/wingedSpirit/27.jpg" alt="6 of Wands"`,
            title: `<h4 class="pBreak">Six of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img src="./Assets/Cards/wingedSpirit/28.jpg" alt="7 of Wands"`,
            title: `<h4 class="pBreak">Seven of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img src="./Assets/Cards/wingedSpirit/29.jpg" alt="8 of Wands"`,
            title: `<h4 class="pBreak">Eight of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img src="./Assets/Cards/wingedSpirit/30.jpg" alt="9 of Wands"`,
            title: `<h4 class="pBreak">Nine of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img src="./Assets/Cards/wingedSpirit/31.jpg" alt="10 of Wands"`,
            title: `<h4 class="pBreak">Ten of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img src="./Assets/Cards/wingedSpirit/32.jpg" alt="Page of Wands"`,
            title: `<h4 class="pBreak">Page of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img src="./Assets/Cards/wingedSpirit/33.jpg" alt="King of Wands"`,
            title: `<h4 class="pBreak">King of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img src="./Assets/Cards/wingedSpirit/34.jpg" alt="Queen of Wands"`,
            title: `<h4 class="pBreak">Queen of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img src="./Assets/Cards/wingedSpirit/35.jpg" alt="King of Wands"`,
            title: `<h4 class="pBreak">King of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    cups: [
        {//array index: 0
            card: `<img src="./Assets/Cards/wingedSpirit/36.jpg" alt="The Ace of Cups"`,
            title: `<h4 class="pBreak">The Ace of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img src="./Assets/Cards/wingedSpirit/37.jpg" alt="2 of Cups"`,
            title: `<h4 class="pBreak">Two of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img src="./Assets/Cards/wingedSpirit/38.jpg" alt="3 of Cups"`,
            title: `<h4 class="pBreak">Three of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img src="./Assets/Cards/wingedSpirit/39.jpg" alt="4 of Cups"`,
            title: `<h4 class="pBreak">Four of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img src="./Assets/Cards/wingedSpirit/40.jpg" alt="5 of Cups"`,
            title: `<h4 class="pBreak">Five of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img src="./Assets/Cards/wingedSpirit/41.jpg" alt="6 of Cups"`,
            title: `<h4 class="pBreak">Six of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img src="./Assets/Cards/wingedSpirit/42.jpg" alt="7 of Cups"`,
            title: `<h4 class="pBreak">Seven of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img src="./Assets/Cards/wingedSpirit/43.jpg" alt="8 of Cups"`,
            title: `<h4 class="pBreak">Eight of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img src="./Assets/Cards/wingedSpirit/44.jpg" alt="9 of Cups"`,
            title: `<h4 class="pBreak">Nine of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img src="./Assets/Cards/wingedSpirit/45.jpg" alt="10 of Cups"`,
            title: `<h4 class="pBreak">Ten of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img src="./Assets/Cards/wingedSpirit/46.jpg" alt="Page of Cups"`,
            title: `<h4 class="pBreak">Page of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img src="./Assets/Cards/wingedSpirit/47.jpg" alt="Knight of Cups"`,
            title: `<h4 class="pBreak">Knight of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img src="./Assets/Cards/wingedSpirit/48.jpg" alt="Queen of Cups"`,
            title: `<h4 class="pBreak">Queen of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img src="./Assets/Cards/wingedSpirit/49.jpg" alt="King of Cups"`,
            title: `<h4 class="pBreak">King of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    swords: [
        {//array index: 0
            card: `<img src="./Assets/Cards/wingedSpirit/50.jpg" alt="The Ace of Swords"`,
            title: `<h4 class="pBreak">The Ace of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img src="./Assets/Cards/wingedSpirit/51.jpg" alt="2 of Swords"`,
            title: `<h4 class="pBreak">Two of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img src="./Assets/Cards/wingedSpirit/52.jpg" alt="3 of Swords"`,
            title: `<h4 class="pBreak">Three of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img src="./Assets/Cards/wingedSpirit/53.jpg" alt="4 of Swords"`,
            title: `<h4 class="pBreak">Four of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img src="./Assets/Cards/wingedSpirit/54.jpg" alt="5 of Swords"`,
            title: `<h4 class="pBreak">Five of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img src="./Assets/Cards/wingedSpirit/55.jpg" alt="6 of Swords"`,
            title: `<h4 class="pBreak">Six of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img src="./Assets/Cards/wingedSpirit/56.jpg" alt="7 of Swords"`,
            title: `<h4 class="pBreak">Seven of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img src="./Assets/Cards/wingedSpirit/57.jpg" alt="8 of Swords"`,
            title: `<h4 class="pBreak">Eight of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img src="./Assets/Cards/wingedSpirit/58.jpg" alt="9 of Swords"`,
            title: `<h4 class="pBreak">Nine of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img src="./Assets/Cards/wingedSpirit/59.jpg" alt="10 of Swords"`,
            title: `<h4 class="pBreak">Ten of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img src="./Assets/Cards/wingedSpirit/60.jpg" alt="Page of Swords"`,
            title: `<h4 class="pBreak">Page of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img src="./Assets/Cards/wingedSpirit/61.jpg" alt="Knight of Swords"`,
            title: `<h4 class="pBreak">Knight of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img src="./Assets/Cards/wingedSpirit/62.jpg" alt="Queen of Swords"`,
            title: `<h4 class="pBreak">Queen of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img src="./Assets/Cards/wingedSpirit/62.jpg" alt="King of Swords"`,
            title: `<h4 class="pBreak">King of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    pentacles: [
        {//array index: 0
            card: `<img src="./Assets/Cards/wingedSpirit/64.jpg" alt="The Ace of Pentacles"`,
            title: `<h4 class="pBreak">The Ace of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img src="./Assets/Cards/wingedSpirit/65.jpg" alt="2 of Pentacles"`,
            title: `<h4 class="pBreak">Two of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img src="./Assets/Cards/wingedSpirit/66.jpg" alt="3 of Pentacles"`,
            title: `<h4 class="pBreak">Three of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img src="./Assets/Cards/wingedSpirit/67.jpg" alt="4 of Pentacles"`,
            title: `<h4 class="pBreak">Four of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img src="./Assets/Cards/wingedSpirit/68.jpg" alt="5 of Pentacles"`,
            title: `<h4 class="pBreak">Five of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img src="./Assets/Cards/wingedSpirit/69.jpg" alt="6 of Pentacles"`,
            title: `<h4 class="pBreak">Six of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img src="./Assets/Cards/wingedSpirit/70.jpg" alt="7 of Pentacles"`,
            title: `<h4 class="pBreak">Seven of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img src="./Assets/Cards/wingedSpirit/71.jpg" alt="8 of Pentacles"`,
            title: `<h4 class="pBreak">Eight of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img src="./Assets/Cards/wingedSpirit/72.jpg" alt="9 of Pentacles"`,
            title: `<h4 class="pBreak">Nine of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img src="./Assets/Cards/wingedSpirit/73.jpg" alt="10 of Pentacles"`,
            title: `<h4 class="pBreak">Ten of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img src="./Assets/Cards/wingedSpirit/74.jpg" alt="Page of Pentacles"`,
            title: `<h4 class="pBreak">Page of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img src="./Assets/Cards/wingedSpirit/75.jpg" alt="Knight of Pentacles"`,
            title: `<h4 class="pBreak">Knight of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img src="./Assets/Cards/wingedSpirit/76.jpg" alt="Queen of Pentacles"`,
            title: `<h4 class="pBreak">Queen of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img src="./Assets/Cards/wingedSpirit/77.jpg" alt="King of Pentacles"`,
            title: `<h4 class="pBreak">King of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
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
;}



// 🌎 END GLOBAL SCOPE •••

        
// 🏡 LOCAL SCOPE START•••

        // •• 🧠 LOGIC: if num returns a value under 14, search in the suite array for the suite. Use the returned suite value to find the array in 'tarotCard' object.
        // Use a variable assigned to RNG and use RNG as index for random search within suite array for a card number, and return value in console log/append to read panel.

$('.deck7').on('click', function () {
    //for major arcana and card number.
        // •• SET UP: random number generator for cards 1 - 13 + 22 major arcana.
        let num = Math.round(Math.random() * 35) + 1;

        if (num < 14) {//for non-major arcana

            suiteIndex = getRandom(suites.length); // gives # for [#] within suite array
            //return Int value for suit index = 0-3 ❌

            findSuite = suites[suiteIndex];  // variable to hold suite of card when not a major arcana = "wands, cups, swords, pentacles" ❌
            
            //  DELETE: append reading to read panel
            // $('.readSpace').append("<li>" + "You've pulled " + num + " of " + findSuite + "</li>");            


        } else if (num > 14) { //for major arcana
            majArcana = getRandom(tarotCard.majorArcana.length); 
            //return Int value for majorArcana index = 0-21 ✔ 
        };
        
        // •••append reading to appropriate placeholders
        // •• SET UP: click counter  ✔    
        counter ++;

        // •• SET UP: function to append data from cards ✔
        const htmlToAppend = function(placeholderSpot) {
            $(placeholderSpot).append(`${tarotCard.majorArcana[majArcana].card}`);
        };

        const htmlToAppend2 = function(placeholderSpot2) {
            $(placeholderSpot2).append(`${tarotCard[findSuite][suiteIndex].card}`);
        };

        const divHtmlToAppend= function(placeholderSpot3) {
            $(placeholderSpot3).append(`<p>Here Is Your Reading For Draw ${counter}: </p>`);

            //div
            $(".readSpace").append(`${tarotCard[findSuite][suiteIndex].title}`);
            $(".readSpace").append(`${tarotCard[findSuite][suiteIndex].generalMeaning}`);
            $(".readSpace").append(`${tarotCard[findSuite][suiteIndex].advice}`);
        };

        // 🚑 DEBUGGING CONSOLE LOG CHAIN •••
        // •• console log to check strings
        console.log('Testing of variables:');
        console.log('1. num result:', num);
        console.log("2. counter", counter);
        console.log('3. majArcana:', majArcana);
        console.log('4. suiteIndex: ', suiteIndex);
        console.log('5. findSuite: ', findSuite);
        console.log('6. majorArcana:', tarotCard.majorArcana);
        console.log('7. major Arcana Title:',tarotCard.majorArcana[majArcana].title); // ❌
        console.log('8. findSuite[suiteIndex]:', findSuite[suiteIndex]) // ❌
        console.log(`9. non maj arcana: ${tarotCard[findSuite][suiteIndex].card}`); // ❌
        console.log(`10. maj arcana: ${tarotCard.majorArcana[majArcana].card}`); // ❌
        
        //end check

        // •• LOCAL APPEND WITHIN ON CLICK FUNCTION
        if (counter === 1 && num < 14) {

            //Placeholder1
            htmlToAppend(".placeholder1");
            divHtmlToAppend('.readSpace');

        } else if (counter === 1 && num > 14) {

            // Placeholder1
            htmlToAppend2(".placeholder1");
            divHtmlToAppend(".readSpace");

        } else if (counter === 2 && num > 14) {

            // Placeholder2
            htmlToAppend2(".placeholder2");
            divHtmlToAppend(".readSpace");

        } else if (counter === 2 && num < 14) {

            // Placeholder 2
            htmlToAppend(".placeholder2");
            divHtmlToAppend(".readSpace");

        } else if (counter === 3 && num < 14) {

            //Placeholder 3
            htmlToAppend(".placeholder3");
            divHtmlToAppend(".readSpace");

        } else if (counter === 3 && num > 14) {

            // Placeholder3
            htmlToAppend2(".placeholder3");
            divHtmlToAppend(".readSpace");

        } else {
            alert ('Please Refresh To Pull Again');
        };
    
});
// 🏡 LOCAL SCOPE END •••




