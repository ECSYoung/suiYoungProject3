// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// 🌎 GLOBAL SCOPE •••
//button to empty inputs:
$('.buttonStyle').on('click', function() {
    location.reload();
});

// declare global variables 
let suiteIndex;
let findSuite;
let majArcana;
let tarotCardSuite;
let counter = 0;

// set up arrays:
tarotCard = {
    majorArcana: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/0.jpg" alt="The Fool Card">`,
            title: `<h4 class="pBreak">The Fool</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Pamela Coleman-Smith's artful rendition of The Fool in the Rider-Waite Tarot deck is often used to represent Tarot in general. Early classical versions of The Fool card, however, portray quite a different character -- a person driven by base needs and urges, who has fallen into a state of poverty and deprivation.</span>

            <span class="pBreak">In some earlier instances, The Fool is made out to be a carnival entertainer or a huckster. In others, he is portrayed as decrepit and vulnerable -- as the cumulative result of his delusions and failures. Not until the 20th century do you see the popular Rider-Waite image of The Fool arise -- that of an innocent soul before its fall into matter, untainted by contact with society and all its ills.</span>

            <span class="pBreak">Modern decks usually borrow from the Rider-Waite imagery. Most Fool cards copy the bucolic mountainside scene, the butterfly, and the potential misplaced step that will send The Fool tumbling into the unknown. Don't forget, though, that the earlier versions of this card represented already-fallen humanity, over-identified with the material plane of existence, and beginning a pilgrimage toward self-knowledge and, eventually, wisdom. The Fool reminds us to recognize the path of personal development within ourselves -- and the stage upon that path where we find ourselves -- in order to energize our movement toward deeper self-realization.</span></p>
            `,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Fool advises that you lighten up. Let yourself be spontaneous enough to stretch beyond the realm of logic. There is no advantage to be gained by thinking you possess the knowledge, power, or control to direct reality. Open and receive without question, instead of trying to manage what's happening right now. The Fool has no ambition to manipulate a specific outcome. Just be happy to be part of the whole.</span>

            <span class="pBreak">Release any demands or expectations. Give your complete attention to events as they are occurring in the present moment.</span>
            
            </p>`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/1.jpg" alt="The Magician">`,
            title: `<h4 class="pBreak">The Magician</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, The Magician is one who can demonstrate hands-on magic -- as in healing, transformative rituals, alchemical transmutations, charging of talismans, and the like. A modern Magician is any person who completes the circuit between heaven and Earth; one who seeks to bring forth the divine gold within her or himself.</span>

            <span class="pBreak">At the birth of Tarot, even a gifted healer who was not an ordained clergyman was considered to be in league with The Devil! For obvious reasons, the line between fooling the eye with sleight of hand and charging the world with magical will, was not clearly differentiated in the early Tarot cards.</span>

            <span class="pBreak">Waite's image of The Magician as the solitary ritualist communing with the spirits of the elements -- with its formal arrangement of symbols -- is a token of the freedom we have in modern times to declare our spiritual politics without fear of reprisal. The older cards were never so explicit about what The Magician was doing. It's best to keep your imagination open with this card. Visualize yourself manifesting something unique, guided by evolutionary forces that emerge spontaneously from within your soul.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">Have faith in your innate creativity. The Magician advises you give your questioning nature and free-associating mind plenty of room to explore the subject at hand. Behave just as if you were an open-minded and curious scientist. Through this process, you may bring freshness and clarity into the situation that is both stimulating and catalytic.</span>

            <span class="pBreak">You do not have to understand it all intellectually. Besides, intuition is your ace in the hole. Respond in a spontaneous manner to what is right in front of you. There is no reason to hold yourself back. Your natural urges are exactly what is needed, and, your ingenuous timing and elegant style will help smooth over any awkwardness.<span>
            
            </p>`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/2.jpg" alt="High Priestess">`,
            title: `<h4 class="pBreak">High Priestess</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The High Priestess is a Major Arcana, or "trump" card, that represents human wisdom. The High Priestess can be viewed as a kind of female Pope (a Papess), or the ancient Egyptian Priestess of Isis, the even more ancient snake and bird goddesses, the Greek goddess Persephone, or Eve, before the fall.</span>

            <span class="pBreak">For the accused heretics who were burnt at the stake for revering her in the 14th and 15th century, the Priestess symbolized the prophecy of the return of the Holy Spirit, which was perceived as the female aspect of the Holy Trinity.</span>

            <span class="pBreak">In terms of the Major Arcana ordering of cards, The High Priestess appears in the sequence as soon as the Fool decides he wants to develop his innate powers, making a move toward becoming a Magician. The High Priestess is his first teacher, representing the inner life and the method for contacting it, as well as the contemplative study of nature and spiritual mystery.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The High Priestess advises you to adhere to your chosen spiritual practice on a more regular basis. If you want the benefits of evolution, you'll have to cooperate with spirit. We all have distractions, demands -- a whole life full of reasons why we cannot find the time to retreat into our inner sanctum.</span>

            <span class="pBreak">Until you consider this as vital to your well-being as the need to eat and sleep, you are likely to be eternally restless and deeply dissatisfied. A spiritual routine that suits your temperament, practiced every day, is the most trustworthy path to freedom.</span>
            
            </p>`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/3.jpg" alt="The Empress">`,
            title: `<h4 class="pBreak">The Empress</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Empress is a Major Arcana, or "trump" card, that portrays the energy of the great mother. She is nature, around us but also within us, the ever-unfolding source of life-giving power. The Empress is often pictured as a pre-Christian Goddess, as the one whom The High Priestess is channeling down to Earth for the rest of us.</span>

            <span class="pBreak">In medieval Europe, The Empress card was painted to represent whatever queen currently ruled the land, probably to satisfy the Inquisitors. But the scholars of the Renaissance and beyond had no doubt of her true identity -- she could not be fully revealed on Tarot cards as "the woman clothed with the sun" until after the French Revolution.</span>

            <span class="pBreak">This supreme archetype of femininity also symbolizes fertility. It is The Empress who provides us nourishment and security. She is also sometimes seen as delighting us with flowers and fruit. A potentially terrifying aspect of this archetype manifests itself whenever karmic mood swings wipe out our plans, like a storm that has come upon us. Whatever happens, The Empress is the source of our embodiment and of natural lLaw. She might even be called "The Great Recycler."</span>
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Empress advises you to trust in the good sense you have shown up to this point. Recognize your good intentions in carrying out your responsibilities as a compassionate human. You are capable of demonstrating the finest aspects of your personality.</span>

            <span class="pBreak">Demonstrate this through caring actions, a forgiving and generous attitude, and wise understanding of others' needs and struggles. Bring a healing influence to the current situation and take full credit for the supportive part you play.</span>
            
            
            </p>`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/4.jpg" alt="The Emperor">`,
            title: `<h4 class="pBreak">The Emperor</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">In the most practical terms, The Emperor Tarot card represents the highest leadership, a head of state, or the most exemplary and powerful person in the realm. This archetypal ruler is responsible for the affairs of a society or community, which are directly proportional to his well being and happiness.</span>

            <span class="pBreak">The more enlightenment and cosmic perspective this energy brings, the better life is for all. The Emperor archetype masters the world of matter and physical manifestation. When you apply this card to your situation, acknowledge your potentials for mastery. Reinforce a sense of sovereignty within yourself, despite any self-limiting beliefs, habits, or appearances to the contrary.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">When the Emperor arises, he advises you get in touch with your inner sovereignty and natural self-possession. Realize that somewhere deep inside you is the memory of royalty. Reach within to find that strain of natural nobility and leadership. These innate qualities will help you manage your current situation.</span>

            <span class="pBreak">The Emperor suggests that you have the necessary abilities to be the final authority. This situation is an opportunity to showcase your competence and skill. Act with the confidence of someone who knows how to take care of business.</span>
            
            </p>`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/5.jpg" alt="The Hierophant">`,
            title: `<h4 class="pBreak">The Hierophant</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Hierophant Tarot this card refers to a master and the learning of practical lessons from the study of natural law. This energy of this card points to some agent or resource that can reveal the secrets of life, the cycles of the Moon and tides, the links between human beings and the heavens.</span>

            <span class="pBreak">Because monasteries were the only places a person could learn to read and write in the Middle Ages, a Hierophant was one to whom a student would petition for entry. He was the one to set the curriculum for the neophyte's course of study.</span>

            <span class="pBreak">Often pictured with the right hand raised in blessing, the Hierophant is linked with the ancient lineage of Melchezidek, initiator of the Hebrew priestly tradition, the one who passes on the teachings. All shamans of any tradition draw upon this archetype.</span>
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Hierophant advises that you return to the role of a meticulous student. Learn everything you can about your chosen area. Let that knowledge become a part of you and an operative influence on your day-to-day awareness. In this way, you can slowly and steadily establish real credibility in your field or chosen subject.<span>

            <span class="pBreak">Earn respect and recognition by completing your education and broadening your experience. If you already have all the necessary experience you need, then rewrite your resume so others can appreciate who you are and what you can bring to a situation. Focus on your goal and be determined. You may be destined to be a master in your realm.</span>
            </p>`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/6.jpg" alt="The Lovers">`,
            title: `<h4 class="pBreak">The Lovers</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/7.jpg" alt="The Chariot">`,
            title: `<h4 class="pBreak">The Chariot</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Although it has taken on a strictly romantic revision of meaning in some modern decks, traditionally The Lovers Tarot card reflected the challenges of choosing a partner. At a crossroads, one cannot take both paths. The images on this card in different decks have varied more than most, because we have had so many ways of looking at sex and relationships across cultures and centuries.</span>

            <span class="pBreak">Classically, the energy of this card reminded us of the real challenges posed by romantic relationships, with the protagonist often shown in the act of making an either-or choice. To partake of a higher ideal often requires sacrificing the lesser option. The path of pleasure eventually leads to distraction from spiritual growth. The gratification of the personality eventually gives way to a call from spirit as the soul matures.</span>

            <span class="pBreak">Modern decks tend to portray the feeling of romantic love with this card, showing Adam and Eve at the gates of Eden when everything was still perfect. This interpretation portrays humanity before the fall, and can be thought to imply a different sort of choice -- the choice of evolution over perfection, or the choice of personal growth through relationship -- instead of a fantasy where everything falls into place perfectly and is taken care of without effort.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/8.jpg" alt="The Strength">`,
            title: `<h4 class="pBreak">The Strength</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/9.jpg" alt="The Hermit">`,
            title: `<h4 class="pBreak">The Hermit</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/10.jpg" alt="The World">`,
            title: `<h4 class="pBreak">The World</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/11.jpg" alt="The Justice">`,
            title: `<h4 class="pBreak">The Justice</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/12.jpg" alt="The Hanged Man">`,
            title: `<h4 class="pBreak">The Hanged Man</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 14
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/13.jpg" alt="Death">`,
            title: `<h4 class="pBreak">Death</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
        },
        {//array index: 15
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/14.jpg" alt="Temperance">`,
            title: `<h4 class="pBreak">Temperance</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 16
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/15.jpg" alt="The Devil">`,
            title: `<h4 class="pBreak">The Devil</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 17
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/16.jpg" alt="The Tower">`,
            title: `<h4 class="pBreak">The Tower</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 18
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/17.jpg" alt="The Star">`,
            title: `<h4 class="pBreak">The Star</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 19
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/18.jpg" alt="The Moon">`,
            title: `<h4 class="pBreak">The Moon</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 20
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/19.jpg" alt="The Sun">`,
            title: `<h4 class="pBreak">The Sun</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 21
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/20.jpg" alt="Judgement">`,
            title: `<h4 class="pBreak">Judgement</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 22
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/21.jpg" alt="The World">`,
            title: `<h4 class="pBreak">The World</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    wands: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/22.jpg" alt="The Ace of Wands">`,
            title: `<h4 class="pBreak">The Ace of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/23.jpg" alt="2 of Wands">`,
            title: `<h4 class="pBreak">Two of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/24.jpg" alt="3 of Wands">`,
            title: `<h4 class="pBreak">Three of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/25.jpg" alt="4 of Wands">`,
            title: `<h4 class="pBreak">Four of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/26.jpg" alt="5 of Wands">`,
            title: `<h4 class="pBreak">Five of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/27.jpg" alt="6 of Wands">`,
            title: `<h4 class="pBreak">Six of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/28.jpg" alt="7 of Wands">`,
            title: `<h4 class="pBreak">Seven of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/29.jpg" alt="8 of Wands">`,
            title: `<h4 class="pBreak">Eight of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/30.jpg" alt="9 of Wands">`,
            title: `<h4 class="pBreak">Nine of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/31.jpg" alt="10 of Wands">`,
            title: `<h4 class="pBreak">Ten of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/32.jpg" alt="Page of Wands">`,
            title: `<h4 class="pBreak">Page of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/33.jpg" alt="King of Wands">`,
            title: `<h4 class="pBreak">King of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/34.jpg" alt="Queen of Wands">`,
            title: `<h4 class="pBreak">Queen of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/35.jpg" alt="King of Wands">`,
            title: `<h4 class="pBreak">King of Wands</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    cups: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/36.jpg" alt="The Ace of Cups">`,
            title: `<h4 class="pBreak">The Ace of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/37.jpg" alt="2 of Cups">`,
            title: `<h4 class="pBreak">Two of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/38.jpg" alt="3 of Cups">`,
            title: `<h4 class="pBreak">Three of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/39.jpg" alt="4 of Cups">`,
            title: `<h4 class="pBreak">Four of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/40.jpg" alt="5 of Cups">`,
            title: `<h4 class="pBreak">Five of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/41.jpg" alt="6 of Cups">`,
            title: `<h4 class="pBreak">Six of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/42.jpg" alt="7 of Cups">`,
            title: `<h4 class="pBreak">Seven of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/43.jpg" alt="8 of Cups">`,
            title: `<h4 class="pBreak">Eight of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/44.jpg" alt="9 of Cups"`,
            title: `<h4 class="pBreak">Nine of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/45.jpg" alt="10 of Cups">`,
            title: `<h4 class="pBreak">Ten of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/46.jpg" alt="Page of Cups">`,
            title: `<h4 class="pBreak">Page of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/47.jpg" alt="Knight of Cups">`,
            title: `<h4 class="pBreak">Knight of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/48.jpg" alt="Queen of Cups">`,
            title: `<h4 class="pBreak">Queen of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/49.jpg" alt="King of Cups">`,
            title: `<h4 class="pBreak">King of Cups</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    swords: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/50.jpg" alt="The Ace of Swords">`,
            title: `<h4 class="pBreak">The Ace of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/51.jpg" alt="2 of Swords">`,
            title: `<h4 class="pBreak">Two of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/52.jpg" alt="3 of Swords">`,
            title: `<h4 class="pBreak">Three of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/53.jpg" alt="4 of Swords">`,
            title: `<h4 class="pBreak">Four of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/54.jpg" alt="5 of Swords">`,
            title: `<h4 class="pBreak">Five of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/55.jpg" alt="6 of Swords">`,
            title: `<h4 class="pBreak">Six of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/56.jpg" alt="7 of Swords">`,
            title: `<h4 class="pBreak">Seven of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/57.jpg" alt="8 of Swords">`,
            title: `<h4 class="pBreak">Eight of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/58.jpg" alt="9 of Swords">`,
            title: `<h4 class="pBreak">Nine of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/59.jpg" alt="10 of Swords">`,
            title: `<h4 class="pBreak">Ten of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/60.jpg" alt="Page of Swords">`,
            title: `<h4 class="pBreak">Page of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/61.jpg" alt="Knight of Swords">`,
            title: `<h4 class="pBreak">Knight of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/62.jpg" alt="Queen of Swords">`,
            title: `<h4 class="pBreak">Queen of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/62.jpg" alt="King of Swords">`,
            title: `<h4 class="pBreak">King of Swords</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        }
    ],
    pentacles: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/64.jpg" alt="The Ace of Pentacles">`,
            title: `<h4 class="pBreak">The Ace of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/65.jpg" alt="2 of Pentacles">`,
            title: `<h4 class="pBreak">Two of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/66.jpg" alt="3 of Pentacles">`,
            title: `<h4 class="pBreak">Three of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/67.jpg" alt="4 of Pentacles">`,
            title: `<h4 class="pBreak">Four of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/68.jpg" alt="5 of Pentacles">`,
            title: `<h4 class="pBreak">Five of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/69.jpg" alt="6 of Pentacles">`,
            title: `<h4 class="pBreak">Six of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/70.jpg" alt="7 of Pentacles">`,
            title: `<h4 class="pBreak">Seven of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/71.jpg" alt="8 of Pentacles">`,
            title: `<h4 class="pBreak">Eight of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/72.jpg" alt="9 of Pentacles">`,
            title: `<h4 class="pBreak">Nine of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/73.jpg" alt="10 of Pentacles">`,
            title: `<h4 class="pBreak">Ten of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/74.jpg" alt="Page of Pentacles">`,
            title: `<h4 class="pBreak">Page of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/75.jpg" alt="Knight of Pentacles">`,
            title: `<h4 class="pBreak">Knight of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/76.jpg" alt="Queen of Pentacles">`,
            title: `<h4 class="pBreak">Queen of Pentacles</h4>`,
            generalMeaning: `header`,
            advice: `p text`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/77.jpg" alt="King of Pentacles">`,
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
        suiteIndex = getRandom(suites.length); // gives # for [#] within suite array
        //return Int value for suit index = 0-3 ✔

        majArcana = getRandom(tarotCard.majorArcana.length); 
        //return Int value for majorArcana index = 0-21 ✔

        

        // •• DECLARE: suite variables.
        findSuite = suites[suiteIndex];  // variable to hold suite of card when not a major arcana = "wands, cups, swords, pentacles" ✔

        tarotCardSuite = tarotCard[findSuite]; // variable to hold non-major arcana suites within main array. ✔

        tarotSuiteIndex = getRandom(tarotCardSuite.length);
        // console.log(tarotSuiteIndex); //✔


        // •• SET UP: click counter  ✔    
        counter ++;

        // •• SET UP: function to append data from cards ✔
            // for major arcana
            const htmlToAppend2 = function(placeholderSpot) {
                // in placeholder
                $(placeholderSpot).append(`${tarotCard.majorArcana[majArcana].card}`);

                //div
                $(placeholderSpot).append(`<p>Here Is Your Reading For Draw ${counter}: </p>`);

                $(".readSpace").append(`${tarotCard.majorArcana[majArcana].title}`);
                $(".readSpace").append(`${tarotCard.majorArcana[majArcana].generalMeaning}`);
                $(".readSpace").append(`${tarotCard.majorArcana[majArcana].advice}`);
            };

            // for non major arcana
            const htmlToAppend = function(placeholderSpot2) {
                // in placeholder
                $(placeholderSpot2).append(`${tarotCardSuite[tarotSuiteIndex].card}`);

                //div
                $(placeholderSpot2).append(`<p>Here Is Your Reading For Draw ${counter}: </p>`);

                $(".readSpace").append(`${tarotCardSuite[tarotSuiteIndex].title}`);
                $(".readSpace").append(`${tarotCardSuite[tarotSuiteIndex].generalMeaning}`);
                $(".readSpace").append(`${tarotCardSuite[tarotSuiteIndex].advice}`);
                };




        // •• 📝 LOCAL APPEND WITHIN ON CLICK FUNCTION

        if (num < 14) {//for non-major arcana

            if (counter === 1 && num < 14) {

                //Placeholder1
                htmlToAppend(".placeholder1");

            } else if (counter === 2 && num < 14) {

                // Placeholder 2
                htmlToAppend(".placeholder2");

            } else if (counter === 3 && num < 14) {

                //Placeholder 3
                htmlToAppend(".placeholder3");

            } else {
                alert ('Please Refresh To Pull Again');
            };

        } else if (num > 14) { //for major arcana

            if (counter === 1 && num > 14) {

                // Placeholder1
                htmlToAppend2(".placeholder1");

            } else if (counter === 2 && num > 14) {

                // Placeholder2
                htmlToAppend2(".placeholder2");

            } else if (counter === 3 && num > 14) {

                // Placeholder3
                htmlToAppend2(".placeholder3");

            } else {
                alert ('Please Refresh To Pull Again');
            };
        };
        

        

        // 🚑 DEBUGGING CONSOLE LOG CHAIN •••
        // •• console log to check strings
        console.log('Testing of variables:');
        console.log('1. num result:', num);
        console.log("2. counter", counter);
        console.log('3. majArcana:', majArcana);
        console.log('4. suiteIndex: ', suiteIndex); // ✔
        console.log('5. findSuite: ', findSuite); // ✔
        console.log('6. majorArcana:', tarotCard.majorArcana);
        console.log('7. major Arcana Title:', tarotCard.majorArcana[majArcana].title, tarotCard.majorArcana[majArcana].card ); // ✔
        console.log('8. findSuite[suiteIndex]:', tarotCardSuite[tarotSuiteIndex].title, tarotCardSuite[tarotSuiteIndex].card); // ✔
        console.log(`9. non maj arcana: ${tarotCardSuite[tarotSuiteIndex].card}`); // ✔
        console.log(`10. maj arcana: ${tarotCard.majorArcana[majArcana].card}`); // ✔
        console.log("11. tarotCardSuite: ", tarotCardSuite);
        console.log("12. tarotCard the Array: ", tarotCard);

        //end check

});
// 🏡 LOCAL SCOPE END •••




