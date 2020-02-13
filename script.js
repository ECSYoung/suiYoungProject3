// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// 🌎 GLOBAL SCOPE •••
//button to empty inputs:
$('.buttonStyle').on('click', function () {
    location.reload(true);
});

// declare global variables 
let suiteIndex;
let findSuite;
let majArcana;
let tarotSuiteIndex;
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
        {//array index: 5
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
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/6.jpg" alt="The Lovers">`,
            title: `<h4 class="pBreak">The Lovers</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Although it has taken on a strictly romantic revision of meaning in some modern decks, traditionally The Lovers Tarot card reflected the challenges of choosing a partner. At a crossroads, one cannot take both paths. The images on this card in different decks have varied more than most, because we have had so many ways of looking at sex and relationships across cultures and centuries.</span>
            <span class="pBreak">Classically, the energy of this card reminded us of the real challenges posed by romantic relationships, with the protagonist often shown in the act of making an either-or choice. To partake of a higher ideal often requires sacrificing the lesser option. The path of pleasure eventually leads to distraction from spiritual growth. The gratification of the personality eventually gives way to a call from spirit as the soul matures.</span>
            <span class="pBreak">Modern decks tend to portray the feeling of romantic love with this card, showing Adam and Eve at the gates of Eden when everything was still perfect. This interpretation portrays humanity before the fall, and can be thought to imply a different sort of choice -- the choice of evolution over perfection, or the choice of personal growth through relationship -- instead of a fantasy where everything falls into place perfectly and is taken care of without effort.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Lovers card advises that you study your options and make the wisest choice. Carefully consider your long-term interests. There is no judgment on what you choose to keep from the array of possibilities before you. Just watch out for choices that will produce dissatisfaction and discontent.</span>
            <span class="pBreak">Be willing to make some compromises, then stick with the commitments you finally make. Trust your intuition along with your rational intellect, and once you make your choice, carry it out with conviction.</span>
            
            </p>`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/7.jpg" alt="The Chariot">`,
            title: `<h4 class="pBreak">The Chariot</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Chariot Tarot card points to a triumphal feeling of freedom, as if the Charioteer is being paraded through the streets as a hero (or heroine). The card reflects congratulations for high achievement, and serves as a sign of empowerment.</span>
            <span class="pBreak">Huge wheels and frisky steeds speed the rate at which the driver's will power can be realized. This kind of charge makes more of the world accessible to one ambitious enough to seize The Chariot's reins. But there is danger in this feeling of freedom, because of the increased rate of change and its power to magnify mistakes in judgment. As a seasoned warrior, the Charioteer is called upon to be extra attentive to the way ahead.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Chariot advises that you be prepared for changes that might include a move or an opportunity to travel. The Charioteer travels light and stays open to fresh experiences that change with every valley or mountain pass.</span>
            <span class="pBreak">You may be asked to live out of a suitcase and consider every place your home for a while. Be receptive to new people who come into your life. Most especially, become more fluid and taste the joys of freedom. The Charioteer is nothing if not self-sufficient.</span>
            
            </p>`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/8.jpg" alt="The Strength">`,
            title: `<h4 class="pBreak">The Strength</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Strength Tarot card represents nature, which, however wild in its primal form, is tamed by our subtler, finer self -- our feminine side, our inner self. The will and passion of our instinctive nature does not need to be broken, but refined and brought to consciousness, so that all levels of creation may come into harmony.</span>
            <span class="pBreak">The feminine soul-force contains a persuasive power that can nurture and induce cooperation from others, stilling disruptive energies by harmonizing differences in the spirit of collective good will.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Strength card advises that you assertively discipline yourself and separate self interest from enlightened wisdom. Deliberately identify with your intuition, even if it works against the desires of your willful ego.</span>
            <span class="pBreak">Demand and expect the same from others who have some power in this situation. You cannot challenge them to live to a higher standard if you, yourself, have not yet done so. Influence others by setting an example of integrity. Your self-esteem will increase to the degree that you succeed in your efforts.</span>
            
            </p>`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/9.jpg" alt="The Hermit">`,
            title: `<h4 class="pBreak">The Hermit</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">
            The challenge of The Hermit card is to be able to recognize a teacher in a humble disguise. This font of mysterious knowledge will not make it easy for the student to acquire his wisdom, as it takes time and long contemplation to fathom what he knows. He often speaks wordlessly, or in ancient and barbaric tongues, communicating with the elements, animals, and nature herself.</span>
            <span class="pBreak">While an hourglass was an identifying feature on the earliest Hermit Tarot cards, more modern cards have shifted the metaphor, showing more or less light released from his lantern. In either case, the Hermit card reminds us of the value of time away from the hubbub of civic life, to relax the ego in communion with nature.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Hermit advises that you think things through carefully. The demands on you have been high, giving you scant time for reflection. While you have a gift for understanding the larger implications involved, you need some private time to consider the steps to take in the future. You can't just lock yourself in your room for fifteen minutes and expect to come up with profound solutions. You need more seclusion and time to assimilate and process.</span>
            <span class="pBreak">Now may be the moment for you to tell everyone to leave you alone. When you are fully ready, you will be able and willing to give others what they need.</span>
            
            </p>`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/10.jpg" alt="The World">`,
            title: `<h4 class="pBreak">The World</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The central theme of The Wheel of Fortune card is cyclical change. The wheel keeps on rolling, churning events in a ceaseless progression of ups and downs, either way freeing us from the past. No one can escape its cyclical action, which can feel somewhat terrifying -- no matter whether we are rising or falling. When one is balanced on top of the wheel, there is a moment of crystal clarity. However, the only part of the wheel that's actually not going up and down is the hub, which represents your eternal self.</span>
            <span class="pBreak">Every one of us will occupy all the points on the wheel at one point or another. The cycle of the wheel is its lesson -- and we can learn to take comfort in it. If you don't like the look of things right now, just wait -- things will change. Of course, if you do like the look of things right now, enjoy it while it lasts, because that will change too!</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Wheel of Fortune advises you follow the flow of events. Physical moves, spiritual awakenings, or dramatically changing social patterns could arise now. Accept these transformations.</span>
            <span class="pBreak">This is a safe place for you to be. You are watched over and protected as you go round and round the wheel. You will learn a lot. You will also learn it quickly, and what you absorb will benefit you for a long time to come.</span>
            
            </p>`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/11.jpg" alt="The Justice">`,
            title: `<h4 class="pBreak">The Justice</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Justice Tarot card has to do with moral sensitivity and that which gives rise to empathy, compassion, and a sense of fairness. Since the time of Solomon, this image has represented a standard for the humane and fair-minded treatment of other beings.</span>
            <span class="pBreak">Often including the image of a fulcrum or scale which helps to balance competing needs against the greater good, and a two-edged sword to symbolize the precision needed to make clear judgments, this card reminds us to be careful to attend to important details. It's a mistake to overlook or minimize anything where this card is concerned. The law of karma is represented here -- what goes around comes around.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Justice card advises you to listen carefully as others explain to you their version of events and the parts they played. It is unnecessary to offer feedback. Your role is to observe, listen closely, give a full hearing and keep your wits about you as the story takes shape.</span>
            <span class="pBreak">As you witness people's account of themselves, your understanding will go beyond the words you hear. Subtle inferences and clues will reveal the truths that will enable you to make a wise and accurate assessment.</span>
            
            </p>`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/12.jpg" alt="The Hanged Man">`,
            title: `<h4 class="pBreak">The Hanged Man</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Hanged Man usually indicates a lack of ability to help oneself through independent action. The energy is arrested and awaiting judgment. With this card, there is no avenue for the will to regain control until the situation has passed.</span>
            <span class="pBreak">This represents a good time to be philosophical, to study and meditate upon the position you find yourself in, and to form resolutions for the moment you become free again. Only those who possess wisdom, patience, and optimism will be able to see through limitations, including possible humiliation, to grasp the inspiring lesson one can gain from such an experience.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Hanged Man advises you to surrender illusions of control. Accept that you have been overcome and deceived by your own devices. Having made your bed, you now need to lie in it. This is not a negative judgment. It's just that sometimes there are consequences for being in the wrong place at the wrong time. Bad things can happen to good people. These consequences are not fatal, even if they are inconvenient -- or perhaps even embarrassing.</span>
            <span class="pBreak">Stop resisting your circumstances and let some time go by. Eventually, you will be released a little wiser and not much the worse for wear. You will come to realize in time how you collaborated with the problem. However, the issues you were stuck on when you were first hung up have subsided and no longer concern you. You are free to take up new endeavors. You will ultimately feel refreshed and grateful that you were derailed from your former track.</span>
            
            </p>`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/13.jpg" alt="Death">`,
            title: `<h4 class="pBreak">Death</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Death card is not about the literal death of any person. It may represent the death of something else, like a project, plan, or relationship. This card also points to a time of harvest, symbolized in classical decks by the reaping skeleton. Unless the fruits of summer are harvested, they are lost to winter's harshness, and the people do not eat. As the scythe cuts the cords that link us to the past, it liberates us to go forward without fear, because we have nothing left to lose. Everything being pruned away is recycled for the fertility of the future, so that nothing is really ever lost, despite seasonal cycles of gain and loss.</span>
            <span class="pBreak">In more modern Tarot decks, we see Death mounted on a horse and wearing black armor. The emphasis in these decks is on the punishment of sin, as in the way the medieval Plague (which the Death image was based on) was used to explain the wrath of God. Luckily, in modern times, we are not so encumbered with such a guilt-ridden philosophy.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Death card advises you to detach from the old order. You may want to close accounts, complete unfinished tasks, and gather your harvest. It is time to move on. If you cut the cords that have bound you to old ways and outdated conventions, you could free yourself to join the sweep of incoming light. This is not an excuse to reject others or hurt them in any way. It is simply a time to move toward your ultimate interests.</span>
            <span class="pBreak">Do not allow nostalgia and outworn loyalties to hold you back. Be willing to go through whatever it takes to get to where you really want to be.</span>
            
            </p>`
        },
        {//array index: 14
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/14.jpg" alt="Temperance">`,
            title: `<h4 class="pBreak">Temperance</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Temperance card is a reference to the soul. Classically female, the woman or angel on the Temperance card is mixing up a blend of subtle energies for the evolution of the personality. One key to interpreting this card can be found in its title -- a play on the process of tempering metals in a forge.</span>
            <span class="pBreak">Metals must undergo extremes of temperature, folding, and pounding, but the end product is infinitely superior to impure ore mined from the earth. In this image, the soul volunteers the ego for a cleansing and healing experience, which may turn the personality inside-out, but which brings out the gold hidden within the heart.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Temperance card advises you to identify and seek the missing ingredients in your life. Marshal your known skills and abilities and do what needs to be done to complete your mission.</span>
            <span class="pBreak">Prepare to use spiritual practices, studies, or lifestyle changes that can assist you in your quest. A tremendous amount of benefit is available if you can organize yourself and be disciplined at this time.</span>
            
            </p>`
        },
        {//array index: 15
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/15.jpg" alt="The Devil">`,
            title: `<h4 class="pBreak">The Devil</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Devil Tarot card expresses the realm of the taboo -- the culturally rejected wildness and undigested shadow side that each of us carries in our subconscious. This shadow is actually at the core of our being, which we cannot get rid of and will never succeed in taming. From its earliest versions, which portrayed a vampire-demon, The Devil evoked the church-fueled fear that a person could "lose their soul" to wild and passionate forces.<span>
            <span class="pBreak">The Devil image which emerged in the mid-1700s gives us a more sophisticated rendition -- that of the "scapegoated goddess," whose esoteric name is Baphomet. Volcanic reserves of passion and primal desire empower her efforts to overcome the pressure of stereotyped roles and experience true freedom of soul.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Devil card advises that you show some spunk. There may be nothing to be gained by trying to be subtle or strategic in this situation. Assert your agenda, express yourself honestly, and let the chips fall where they may. Your best bet could be to express your true emotions, possibly even including anger. Acknowledge that you have whatever feelings you have. While it may not be necessary to act out what you feel in every situation, accepting the power and depth of your inner experience enables you to remain true to yourself.</span>
            
            </p>`
        },
        {//array index: 16
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/16.jpg" alt="The Tower">`,
            title: `<h4 class="pBreak">The Tower</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">In practically all renditions of the Tower card, disaster is striking or has just struck. The demons of madness and despair are released from ancient hiding places, and nature conspires with human failings to destabilize a society. The upheaval is collective and impersonal. Let us remember these images were created for the educated nobles and clergy -- reminding them that they have the most to lose if the hierarchy is toppled.</span>
            <span class="pBreak">Lightning is a fitting karmic payback for the guilt of those whose fortunes come from the exploitation or abuse of others. A modern subtitle might be "revolution," indicating that through drastic social change, oppressed people can find renewed hope of better times. The Tower experience comes like a flash of lightning to topple the hierarchy of the old order, after which everyone can have a fresh start on a more equal footing.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">With the Tower card, think of yourself as an agent of transformation. This self-sacrificing role is likely to create stressful situations. Your vision shows you that a radical change has already been unleashed by forces much larger than mere mortals, and therefore you are no longer resisting.</span>
            <span class="pBreak">Now you may be at the forefront, acknowledging and accepting the bracing presence of the future bursting in on the present. Try to mediate the harsher parts of the changes as they unfold, so the most vulnerable are the most cushioned. Acknowledge yourself, as well as the others in your life, who are offering their resources to usher in a better future.</span>
            
            </p>`
        },
        {//array index: 17
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/17.jpg" alt="The Star">`,
            title: `<h4 class="pBreak">The Star</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Star Tarot card is about reconnecting one's soul with the divine -- the transcending of personality, family, community, and reputation. It has to do ultimately with the freedom to be one's self. The soul is responding to celestial influences -- forces that can provide the personality with a stronger sense of purpose. The Star card helps us to remember our exalted origins and our attraction to a higher union.</span>
            <span class="pBreak">This card could also be called The Celestial Mandate -- that which refers us back to our reason for being, our mission in this lifetime. The Star reminds us that, in a sense, we are agents of divine will in our day-to-day lives. If we let go of the idea that we are supposed to be in control, we can more easily notice and appreciate the synchronicities that are nudging us along. In this way, we become more conscious of the invisible helping hand, and we better understand our place within -- and value to -- the larger cosmos.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Star card advises that you rededicate yourself to your higher values, increase your spiritual cultivation and meditation practice, and surrender to the greater good. Connect to your higher self -- a being of a larger realm traveling on an evolutionary course that started long ago and runs indefinitely into the future. This is the part you wish to contact and communicate with.</span>
            <span class="pBreak">Now is a period for quiet contemplation. Listen for the voice within. Anything that would interfere with this communion may not be serving your best interests right now.</span>
            
            </p>`
        },
        {//array index: 18
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/18.jpg" alt="The Moon">`,
            title: `<h4 class="pBreak">The Moon</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Moon card refers to a deep state of sensitivity and imaginative impressionability, developed within a womb of deep relaxation. Here we dream and go into trance, have visions and receive insights, wash in and out with the psychic tides, and experience deep mystical and/or terrifying realities beyond our ordinary senses. In a state of expanded consciousness, we cannot always control what happens. The Moon card represents the ultimate test of a soul's integrity, where the membrane between the self and the unknown is removed, and the drop of individuality re-enters the ocean of being. What transpires next is between a soul and its maker.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Moon card advises that you trust your instincts and intuitions. Your aboriginal body, which is connected to all living things, is sharper and quicker than the cultivated, civilized self. The everyday mind may not be prepared for strange oceanic circumstances. Plus, it has no game plan. Your intuitive body will support you unerringly if you do not interfere with or try to control what you perceive. A better approach would be to meditate. Try to just be a witness. Do nothing; let nature carry you forward. This may be your best option in this situation.</span>
            
            </p>`
        },
        {//array index: 19
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/19.jpg" alt="The Sun">`,
            title: `<h4 class="pBreak">The Sun</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Sun card is about the self -- who you are and how you cultivate your personality and character. The Sun's radiance is where one's original nature can be encountered in health and safety. The limitations of time and space are stripped away; the soul is refreshed and temporarily protected from the chaos outside the garden walls. Under the light of the Sun, life reclaims its primordial goodness, truth, and beauty. If one person is shown on this card, it is usually signifying a human incarnation of the divine. When two humans are shown, the image is portraying a resolution of the tension between opposites at all levels. It's as if this card is saying "You can do no wrong -- it's all to the good!"</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Sun card advises you to have confidence in your natural divinity. Throw off any cultural conditioning that keeps you from being authentic with yourself. Step into the full light of truth and reveal your motives and principles. Once done, you will no longer give away power to the people that criticize and shame you. Focus on the positive and the real. Your authentic shining self can be a light for others if you project it without contrivance.</span>
            
            </p>`
        },
        {//array index: 20
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/20.jpg" alt="Judgement">`,
            title: `<h4 class="pBreak">Judgement</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Judgement card, sometimes called "Resurrection," represents the great reunion that the ancients believed would happen once in every age. This was the time when souls are harvested and taken home to their place of origin, outside the solar system. Then the world is seeded with a batch of new souls and the process starts over.</span>
            <span class="pBreak">From a modern point of view, this great reunion -- which includes every personality that you have ever been and every soul that you have done deep work with -- reunites to consciously complete the process. In a way, we symbolically celebrate this returning to center every year on our birthday.</span>
            <span class="pBreak">In personal terms, the Judgment Tarot card points to freedom from inner conflicts, and so clear a channel, that the buried talents and gifts of past incarnations can come through an individual in this lifetime. This card counsels you to trust the process of opening yourself, because what emerges is of consistently high quality. You can effortlessly manifest as a multi-dimensional being, and assist in evoking that response from others.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Judgment card advises that you allow yourself to grow, transform, and release hidden potentials within yourself. Divest yourself of fruitless endeavors without neglecting your duties. At the same time, invest your energies in new growth.</span>
            <span class="pBreak">It's not necessary to reject others, but refuse to be manipulated by those who cry foul. This process isn't about them anyway. It is about you and the desire you feel to change your life and become a more complete person. Trust your impulses and allow this remarkable awakening to happen.</span>
            
            </p>`
        },
        {//array index: 21
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/21.jpg" alt="The World">`,
            title: `<h4 class="pBreak">The World</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The World card points to the presiding wisdom which upholds life on this and all worlds. In most Tarot decks, it is a female figure that has become our standard World image. She originates in Hebrew, Gnostic, and Alchemical lore, and stands between heaven and Earth as the cosmic mother of souls, the wife of God, and our protector from the karmic forces we have set loose upon the Earth in our immaturity and ignorance.</span>
            <span class="pBreak">The goddess of The World card invites us into cosmic citizenship -- once we come to realize our soul's potential for it. It announces the awakening of the soul's immortal being, accomplished without the necessity of dying.</span>
            <span class="pBreak">This card, like the Sun, is reputed to have no negative meaning no matter where or how it appears. If the Hermetic axiom is "Know Thyself", this image represents what becomes known when the true nature of self is followed to creative freedom and its ultimate realization.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The World card may be giving you permission to do whatever you want. Presently, your motivation is close to the will of the divine. Even if you commit an error, it will be turned to the greater good. Stay active and just keep moving forward. It is unnecessary to keep checking or interrupting your spontaneity with calculation. Rather than look for consensus or affirmation from others, simply dance the dance. In other words, express yourself, react naturally, and let the chips fall where they may.</span>
            <span class="pBreak">What matters is divine intention. Whether or not human beings approve is less important. If you allow your ego to inflate, however, you cease to be useful to the greater plan.</span>
            
            </p>`
        }
    ],
    wands: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/22.jpg" alt="The Ace of Wands">`,
            title: `<h4 class="pBreak">The Ace of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">An Ace of this suit in this position symbolizes a pivotal act, or fateful step, that will set loose a chain of events leading toward your desired goal. It refers to a birth or new beginning, the inauguration of an endeavor, and the building of the necessary commitment to see a project or plan through. It personifies an aroused Will that is totally focused, aiming at the bulls-eye.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ace of Wands in this position encourages energetic movement toward activity. Brace yourself and get ready to spring into action. You may need to make your move soon, so make sure you are fully prepared. Trust your instincts and spontaneity. When the opportunity comes, you may want to seize it without hesitation.</span>

            <span class="pBreak">So quicken your senses and raise your antenna. There's excitement in the air, and supports your immediate ambitions.</span>
            
            </p>`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/23.jpg" alt="2 of Wands">`,
            title: `<h4 class="pBreak">Two of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Two in this suit, often portrayed as crossed wands, imply a deadlock due to energies working at cross-purposes. This could refer to an internal split -- perhaps a duel between optimistic and pessimistic parts of your psyche, for example -- or some situation where you feel "damned if you do, damned if you don't." This could be a standoff with another person or rubbing up against limitations that are currently imposed upon you.</span>

            This card points to the possibility of creeping self-doubt -- the kind that arises in a situation where one has bitten off more than one can chew. Give yourself a moment to take in the full implications of your situation. Find your bearings again before launching back into action. Deal with real concerns now -- before they become regrets!</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Two of Wands in this position advises you to respect your own decision making process. Instead of criticizing yourself for indecisiveness, appreciate the various implications of possible choices. Avoid pushing yourself to make a commitment.</span>

            <span class="pBreak">Keep meditating, watching the situation and witnessing the forces at work. At some point you will have enough information to see clearly. The decision-making process will be over and the choice will be clear.</span>
            
            </p>`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/24.jpg" alt="3 of Wands">`,
            title: `<h4 class="pBreak">Three of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">A Three in this suit symbolizes an inner balance that allows you to feel more optimistic about new endeavors you are committed to, or want to commit to. In the illustrated Tarots, the human character is standing on his balcony, watching ships leave the harbor, loaded with his goods for far-off ports, dreaming of the fortune he will reap if all goes well. Summon the optimism within you.</span>

            <span class="pBreak">This energy must be patient and trusting, because he or she will have to wait some time to find out how the ships have fared. Meanwhile, a lot of resources are tied up until they return with the bounty. Only those truly confident in their ideas and abilities would undertake such a risk. This card represents the energy a person needs to take on great adventures and accomplish noble (and remunerative) deeds.</span>

            <span class="pBreak">A detail that sometimes appears in the more esoteric Tarots is a winged wand with two snakes twining around it, called the Caduceus, which is Mercury's wand. This is an ancient symbol of the healer or shaman, one who can travel between the worlds to rescue souls from death or possession. Perhaps the feeling of empowerment this card represents points to the internal mechanisms of self-healing. Perhaps it refers to the courage it takes to be an entrepreneur or an inventor, which is in itself a magical process -- bringing not only opportunity for success, but also an awakening to higher potentials.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Three of Wands in this position advises you to act quickly and powerfully on an idea or desire you have been feeling. This card suggests exquisite timing, staying in the moment and responding to your instinct or intuition.</span>

            <span class="pBreak">Every fiber of your being may be saying this is a great opportunity, even if those around you aren't as convinced. There's nothing to lose from taking a risk; this is a great moment in your entrepreneurial growth. Make your move and sort out the details later.</span>
            
            </p>`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/25.jpg" alt="4 of Wands">`,
            title: `<h4 class="pBreak">Four of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.

            <span class="pBreak">A Four in this suit is the teamwork card, often symbolized by two couples who have come together to create something profitable and enduring. Quite likely, they will create a gift for the future -- a business, hospital, theater or university. They represent the founding families of the future community that will grow around their inspiration. Teamwork is the key.</span>

            <span class="pBreak">It takes time to build a grand vision; and other people of ambition and talent must be attracted to it for it to fulfill its potential. What we see here is the start-up group, the founding visionaries committing their energies to designing the blueprints and laying the groundwork. This partnership is the prototype for society or any grouping where the whole is greater than the sum of the parts.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Four of Wands in this position supports your good, productive, evolutionary ideas. Concentrate on networking: use your charisma and power to attract like-minded souls so you can significantly increase your sphere of influence -- the more people you can reach, the better.</span>

            <span class="pBreak">Your enthusiasm empowers your vision, which is thriving with possibilities. As you share more freely what is on your mind and in your heart, others will see themselves in your vision, so you naturally receive approval, support, assistance and abundance. In your own way, you are addressing a universal need.</span>
            
            </p>`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/26.jpg" alt="5 of Wands">`,
            title: `<h4 class="pBreak">Five of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Five of this suit symbolizes struggles caused by ambitious maneuvering and a competitive urge. This could be about someone who is pushing his or her agenda forward at the expense of others.</span>

            <span class="pBreak">There can be a fine line between demonstrating personal excellence and making others feel like losers. It may be necessary to ask yourself, who is it that really benefits when we all fight so hard for such small rewards? Am I serving a negative, manipulative agenda when I start applying battle metaphors to business?</span>

            <span class="pBreak">Even when your only motive is to be the best you can be, it is understandable to want recognition for what is fine and unique about you. However, minimize the number of egos bruised in the process or your success will be celebrated alone.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Five of Wands in this position encourages you to find your natural ambition. Identify what energizes you, what you would fight for and what you are passionate about -- even when you're tired or discouraged. Strive to make that the centerpiece of your mission.</span>

            <span class="pBreak">This is how you find your livelihood and establish your path of service.</span>
            
            </p>`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/27.jpg" alt="6 of Wands">`,
            title: `<h4 class="pBreak">Six of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Six of this suit points to the respect and acknowledgment due to you for your efforts to solve the problems of your community. The image is usually of a victory parade, after the celebrated leader helped troops win a pivotal battle.</span>

            <span class="pBreak">It took the whole tribe to win the victory, of course, but it was the leader's heroism and clarity under pressure that inspired them to overcome. The team is thrilled that the leader led them to victory. This card points to a time to let everyone relax and celebrate -- if you are the leader, let them applaud you. They are seeing their better selves reflected in you -- a victory indeed!</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Six of Wands in this position advises taking action on your most burning and passionate convictions, no matter what the social consequences. Continue to articulate and define yourself in light of the torch you are carrying. This inspires others to conceive some new ideas of their own.</span>

            <span class="pBreak">You may find yourself becoming something of a leader. Usually the first person to break away from conventional thought is the one to define a new trend. Under the circumstances, there is a solid need for a fresh voice and vision -- so make your move. Those around you who are ready for change will support your leadership.</span>
            
            </p>`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/28.jpg" alt="7 of Wands">`,
            title: `<h4 class="pBreak">Seven of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Seven of this suit generally shows a person who is nearly always successful in working his or her will in the world. This is a person who is truly gifted, standing head and shoulders above the rest. This person is sets standards and sets examples that exceed previous conceptions of what is possible.</span>

            <span class="pBreak">In historical Tarot, this person would most likely be portrayed as an admired and feared warrior who has vanquished his adversaries against all odds. Such an outstanding feat could just as easily apply to the world of the media, politics or business.</span>

            <span class="pBreak">Beware of conceitedness that can be hinted at by this card. Being successful does not make you invincible, and it does not protect you against errors! Enjoy your "fifteen minutes of fame" and then get back to your tasks, or your head will swell, to the detriment of your ability to succeed again.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Seven of Wands in this position tells you that the time for peak performance is now. Even if slightly unprepared, you may want to push yourself beyond your usual limits, thinking in larger terms and tweaking your competitive nature. Time and effort spent in preparation could pay off handsomely. You might be the one who vaults right over the heads of those who thought they could outdo you.<span>

            <span class="pBreak">Move beyond rhetoric and verbal challenges. Now could be the moment to prove what puts you head and shoulders above the rest by demonstrating it in action.</span>
            
            </p>`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/29.jpg" alt="8 of Wands">`,
            title: `<h4 class="pBreak">Eight of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Eight of this suit often shows a flight of spears or staffs moving through the air in formation, as if a hidden group of archers had let them fly all at once. This can refer to swiftly unfolding events, whether of unintentional or intentional design. There are also versions that emphasize the agricultural cycle, paralleling the yearly crop cycle with the swift growth of children into adults with children of their own.</span>

            <span class="pBreak">In each case, the emphasis is on the necessity of change and the challenge of keeping up with it. With the turning of the seasons, we are constantly being forced to deal with change and there is no remedy but to live with that in mind. So, get busy -- there is no time to waste!</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">With the Eight of Wands in this position, learn all you can from recent successful experiences. Take note of what worked before and what did not. You possess awareness as to how to effectively apply your imagination to shape the world in productive and aesthetic ways. Thus, the testament to your talents may be revealed for everyone to see and admire.</span>

            <span class="pBreak">Even if you had to leave it all behind, you know you could start all over among total strangers and succeed once again. This valuable self-confidence makes you free to strike out in new directions and not just cling to past successes and previous accomplishments.</span>
            
            </p>`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/30.jpg" alt="9 of Wands">`,
            title: `<h4 class="pBreak">Nine of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Nine of this suit usually indicates a need for rest; some time out to mend wounds and savor victories. Although it may be hard to do, this card would have you leave the field to fresher teammates for now. Release any attachment you may feel to being in a leadership role for now.</span>

            <span class="pBreak">In the pictured Tarot decks, the protagonist is shown as too exhausted to be effective in defending his gains, yet resisting the suggestion to ask for help or step down. He or she hasn't had the chance to totally heal from past blows, and is still up there taking another beating. This is the fix that comes from making oneself irreplaceable. Fight off the maniacal thought that only you can save the day! Stop rejecting loved ones who want to help you.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">When the Nine of Wands is in this position, you have done everything you can to bring a situation to a successful conclusion. The full range of possibilities has been exhausted and all the creative energy that is available has already been put to use. This may be a great time to lay down your concerns and enjoy a rest. There is nothing more to bring to the mission unless you regenerate and restore the energy you have put into the cause.</span>

            <span class="pBreak">While it is praiseworthy to give all you have for something or someone that means a lot to you, masochism and martyrdom are ill advised. Take a break. No one can fault you for it now.</span>
            
            </p>`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/31.jpg" alt="10 of Wands">`,
            title: `<h4 class="pBreak">Ten of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">The Ten of this suit represents an all-out effort, an obsessive commitment to a task which demands everything you've got. The person shown in decks with pictures is in no position to rest until he makes it inside the stout walls of the well-defended castle in the distance. If he fails, he will become prey for the highway robbers after dark.</span>

            <span class="pBreak">It doesn't matter that he's overloaded and underfed. With this card, you have to do whatever it takes to get to completion -- nothing can be allowed to interfere.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ten of Wands in this position advises you to remember the true, simple heart of your youth and all the idealism it held. Now may be the time to reach deep into yourself and identify your purest, most wholesome impulses. As you do this, allow your optimistic and honorable side to see what's good about the world.</span>

            <span class="pBreak">Look beyond the challenges, setbacks, disappointments and frustrations you tend to see so easily. As you reawaken your high minded inner child, you will refresh your daily life with a joyful purpose.</span>
            
            </p>`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/32.jpg" alt="Page of Wands">`,
            title: `<h4 class="pBreak">Page of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">This card is traditionally entitled the Page, but in some modern decks appears as a Princess. This archetype is that of a unique individual, a nonconformist, often something of a bohemian, definitely independent by nature. He or she requires little in the way of affirmation or approval. Perhaps a mischief-maker, often an innovator or inventor, the energy represented by this card will only serve others until he or she figures out how to get others to serve him/her.</span>

            <span class="pBreak">This person's freedom is so important they would rather go as a peasant among strangers than inherit a fortune with strings attached. Don't be fooled by this humble appearance. This person is a future captain of industry or world leader, now serving an apprenticeship. These people are sometimes seen planting a staff like a flagpole into the earth in the far off wilderness (where they can start fresh without having to make any compromises). You could think of this card as a wild card.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">This card is traditionally entitled a Page, but in some modern decks as a Princess. In this position, this card suggests that you cannot know how to facilitate communication until you have studied your environment. Your task may be to blend into your surroundings so you can gather information and get a clear sense of what is going on around you.</span>

            <span class="pBreak">Think of yourself as a secret agent for the greater good. In due time, others may recognize the role you play in the transformation from divisiveness to unity. However, right now you are being asked to watch quietly from the sidelines.</span>
            
            </p>`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/33.jpg" alt="King of Wands">`,
            title: `<h4 class="pBreak">King of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">This character is traditionally called the Knight, but in some modern decks appears as the Prince. Traditionally, this card indicates the energy of an instigator, a fire-starter, a feisty and easily provoked character who is liable to attack first and ask questions later. This energy is quick to anger and enjoys a fight -- so much so that the thought of a diplomatic solution can provoke a secret disappointment! Nevertheless, he sees himself as trying to help, rescuing the world from its madness by imposing his sense of order upon it.</span>

            <span class="pBreak">His vices are bossiness, paranoia and a tendency towards overkill. Nevertheless, there are times when his energy is perfectly appropriate, like when his assertively protective nature is defending threatened treasures or interfering with dark forces. The trick is to keep a sense of proportion when this Knight unleashes his fire, because he enjoys intense experiences and is always ready to take it to the next level. Once in awhile, this kind of intensity is called for, but on a daily basis it is exhausting.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Knight of Wands (in some decks, a Prince) in this position advises that you modify your self-image in order to get a sense of yourself as a person of action. No matter what your past patterns have been, it is fully possible to place yourself solidly on the road toward the future.</span>

            <span class="pBreak">Not only can you get a clear sense of the proper path, but you will also have enough instructions to be self-directing. Necessary skills and resources are available to you, and the time is right for you to act. Once you get started, you may be surprised how easy it can feel, but don't be seduced by that feeling. There will be comfortable stretches of the road and there will be distinctly uncomfortable ones. Know that any form of motion is better than no motion.</span>
            
            </p>`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/34.jpg" alt="Queen of Wands">`,
            title: `<h4 class="pBreak">Queen of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">Traditionally, representing the energy of a Queen, this woman represents the natural manager, whose gift is to inspire teamwork and divvy up tasks. She is the one who sees ensures everything runs smoothly. She'll be sweating in the sun along with her family or crew, inspiring everybody to keep up and supporting morale with her infectious energy.</span>

            <span class="pBreak">She is the best kind of manager to have, because she is like a challenging but encouraging mother, who knows you have it in you. She believes in her charges and they work hard to please her. She is not, however, sentimental. Like a good farmer, she views her crops, her animals, even the people who work for her, as necessary resources for the achievement of the higher goal. If any aspect is no longer productive or cost-effective, she can let them go without a second thought. Do not look to her for sympathy.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Queen of Wands in this position reveals a need to hold your place in the chain of command and respect the hierarchy (at least for now). This may not be a time for you to be at the helm, even if you are motivated by a strong dedication to completing a project or overcoming a challenge.</span>

            <span class="pBreak">A perceived deficiency in leadership may make you want to take hold of the reins, but don't do it! Restrain yourself and remain loyal to your higher-ups. Stay focused and energetic. Enthusiastically confront the challenges directly in front of you. Perform in good faith and encourage others to do the same.</span>
            
            </p>`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/35.jpg" alt="King of Wands">`,
            title: `<h4 class="pBreak">King of Wands</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often called "Wands" and sometimes called "Rods" or "Staves," represents initiative, ambition, drive and desire. This is the suit of enterprise and risk-taking.</span>

            <span class="pBreak">Traditionally representing the energy of a dynamic King, this card represents the classic conquering hero. He's a charismatic leader, entrepreneurial and ambitious, always creating new adventures. He does this because he doesn't like to stay home or to have to "mind the store" -- he gets to feeling restless and bored with the predictable. If you need a crusader, or someone to take on a big challenge, he's your man. He needs a big assignment, and would rather lead than follow.</span>

            <span class="pBreak">It could be said that he has a bit of an ego, as evidenced in his enjoyment of flattery and praise. A bit of a performer, he overachieves in situations where it will be noticed, but in private he wants to be served and adored like the head lion of a pride. A benevolent dictator, he makes life wonderful for those he loves and just the opposite for those who displease him.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The King of Wands in this position reminds us that our lives are designed to bring us eventually to a place of self-ownership. An opportunity for self-empowerment is presenting itself to you now. Recognize that through your attitude and the way you express yourself to others, you hold the power over your own experiences in life.</span>

            <span class="pBreak">You are the determining factor in this situation and circumstances will proceed in the direction that you steer them. Indecision or doubt are not appropriate responses when clarity and confidence are critical. As you take on a bigger role, it will begin to feel more comfortable.</span>

            <span class="pBreak">Seize the opportunity to influence events, because everything is waiting for you.</span>
            
            </p>`
        }
    ],
    cups: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/36.jpg" alt="The Ace of Cups">`,
            title: `<h4 class="pBreak">The Ace of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The suit in Tarot known as Cups is also referred to as Chalices or Hearts. It represents the emotional and psychic aspects of life -- fantasy, imagination, feelings, love.</span>

            <span class="pBreak">An Ace of this suit in this position generally shows a hand holding up an overflowing cup, which gives forth an endless stream of water, wine, blood or soma for the people's refreshment and healing.</span>

            <span class="pBreak">This card represents an unfailing source of balm for body, heart and soul. It suggests that you can relax into a safety net of love, support and communion.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ace of Cups in this position advises you to challenge yourself and discover what is good about every relationship. Practice looking at the world through the eyes of the Divine. Allow your imagination to perceive the spiritual or evolutionary potential in every person and experience.</span>

            <span class="pBreak">Look with the eye of a loving parent or companion upon the people and things you come into contact with. Make a conscious decision to approve of and delight in even the quirky developments that make the world turn. No one can be perfect at such unconditional acceptance. Still the practice will sweeten your day to day life. Your magnetism will increase and more loving people may enter your life. The whole world will benefit as this becomes second nature to you.</span>
            
            </p>`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/37.jpg" alt="2 of Cups">`,
            title: `<h4 class="pBreak">Two of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Two in this suit signifies a union of souls. This card traditionally describes a romantic relationship, but also includes the idea that all good friendships and partnerships are based on a natural affinity and a deep mutual understanding. As a personal reflection, it can also signify that your mind and your soul are discovering each other, maybe for the first time.</span>

            <span class="pBreak">This card also symbolizes a karmic tie, often portrayed by a wreath or figure-eight ribbon twining around the two cups. Occasionally you see a symbol referring to the union of alchemical opposites (as in sacred sex), pictured as a long-necked flask twined with serpents, its mouth spouting flames, sometimes with wings. This image is from Alchemy, indicating the refining and mutually completing effect of a true and lasting love.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Two of Cups in this position advises you to speak your heart. It may be likely that the person you are trying to connect with feels the same. Still the other needs to hear this more fully. So why not make it clear and why not now?</span>

            <span class="pBreak">The Two of Cups is the image of the heart making a vow. This card advises that you pledge yourself to this friendship and put your heart on the line. You have nothing to lose and everything to gain. Life is a relationship game. It's a great privilege to share with others who are so complementary and compatible.</span>
            
            </p>`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/38.jpg" alt="3 of Cups">`,
            title: `<h4 class="pBreak">Three of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Three of this suit is often entitled Consent, or simply Yes. This card resonates with a spirit of agreement, mutual support, encouragement and teamwork.</span>

            <span class="pBreak">Often pictured as three women celebrating their connectedness in a dance with lifted cups, it could also be called "sisterhood," a real mutual admiration society. It points to all the benefits of harmonious relationship.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Three of Cups in this position advises that you tune in with your family and fully inform them about what's going on with you. Let them add substance to your ideas with their talent and imagination. Think of this occasion as a celebration, where their support helps you find success in your work. There may be something here for everyone to contribute. Put yourself in the loving hands of your family connections and your trust will be well rewarded. The synergy between you could enhance each individual's talent and creativity. You will love the results!</span>
            
            </p>`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/39.jpg" alt="4 of Cups">`,
            title: `<h4 class="pBreak">Four of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The suit often named Cups is also referred to as Chalices or Hearts. It represents the emotional and psychic aspects of life -- fantasy, imagination, feelings, love.</span>

            <span class="pBreak">A Four in this suit refers to a restless time, where a person may have become dissatisfied with life, and emotionally uncomfortable. Feeling stagnated, longing for change, the heart ponders its options ... as it should.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Four of Cups in this position wants you to take a clear look at how stalled or distracted you have become. You may have been bogged down by negativity, hopelessness or a sense of limitation. It is not to your advantage, however, to see the world through such a narrow lens. Cut through some of the forces that undermine you, causing you to feel incapable. Sometimes you have to define what you are "for" by defining what you are "against." Decide that you are not as heavy as the cup of earth, not placid as is the cup of water, not turbulent as is the cup of air. Rather, now may be the time to be as aroused as is the cup of fire. This arousal may constitute liberation from the circumstances that may have brought you here.</span>
            
            </p>`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/40.jpg" alt="5 of Cups">`,
            title: `<h4 class="pBreak">Five of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Five of this suit traditionally portrays the mess that is left after an emotional upheaval, such as a tantrum or fit of rage. Consequences run the gamut from a hangover and lost wages, to abuse and ruined relationships.</span>

            <span class="pBreak">This card is also sometimes called Inheritance, suggesting the cross-generational legacy of such tragedies. Violent family patterns magnified to a much larger scale can become war.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Five of Cups in this position advises you to tighten your belt, make do with less and show more appreciation for the things you do have. If something is truly yours, it cannot be lost. When you are experiencing feelings of loss, it may be because of an inappropriate emotional attachment. If you promise things that you cannot deliver, then you might be setting yourself up for disappointment to follow. In overestimating our abilities, we are forced to face our limits.</span>

            <span class="pBreak">Be grateful that as the cups fell, you lost only three of the five. Two are still intact, pristine and full of sacred energy. Do not cling to the setback. Focus on the potential.</span>
            
            </p>`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/41.jpg" alt="6 of Cups">`,
            title: `<h4 class="pBreak">Six of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Six of this suit generally represents a refreshing openness and innocence, a willingness to learn and an optimism that things will get better as we advance together in understanding. The traditional title, The Past, reminds us of our original nature, when we were young and enthusiastic, when anything was possible and the future was an open book. We are to remember that this same freshness, those new possibilities, are always available to us, even now.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">When the Six of Cups is in this position, take a look at what is repetitive or cyclical in your life; what links the present situation to the last such experience. A new beginning requires new energy and concentration. Until you analyze the past, you will continue to drift with its current.</span>

            <span class="pBreak">Distill everything that is worthwhile from your memories and get as much value from it as you can. Then use this as motivation for change. Make the very best use of hindsight, employing new strategies and trying new angles on these recurring issues.</span>
            
            </p>`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/42.jpg" alt="7 of Cups">`,
            title: `<h4 class="pBreak">Seven of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Seven of this suit typically refers to works of the imagination, the use of dream and vision to invent a future different than the life one is currently living. This card reminds us that our outcomes are not set in stone.</span>

            <span class="pBreak">We can raise our hopes and expectations and upgrade our results. Do not be fooled by the title Fantasy which this card is sometimes given -- this card indicates the truly magical quality of awakened imagination.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Seven of Cups in this position advises that you relax your mind and open to the dreams and imaginings your inner child loves to entertain. Allow yourself to imagine a truly positive outcome for this situation. Perform an exercise in creative visualization by relaxing your guard and letting go of your fears.</span>

            <span class="pBreak">As the dreamscape unfolds, your electro-magnetic chemistry is stimulated to a point of achieving greater confidence in yourself and in what you are doing. Even if it's only a temporary break from your fears, this is a helpful exercise because it gives your psyche and body a dose of unlimited thinking and optimism. Think positively -- the results could truly be amazing.</span>
            
            </p>`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/43.jpg" alt="8 of Cups">`,
            title: `<h4 class="pBreak">Eight of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Eight of this suit is often used to signify a disappointment, emotional setback, betrayal or injury to the heart. Some Tarot decks illustrate this principle showing a young woman who has just been molested and then cast aside by a stranger passing through her village.</span>

            <span class="pBreak">His heartless act has left her vulnerable, with potentially drastic consequences. This is a difficult card, but a realistic one, insofar as it warns against misplaced trust and unguarded vulnerability.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">With the Eight of Cups in this position, look inside and recognize the part of you that still nurses an old grudge from a past injury or trauma. For the most part, your forward-looking self has gotten up and moved along. You are getting on with your life. There may still a part of you, however, that holds out and resists the healing. Are you nursing old wounds from painful losses of faith and trust? If so, now may be a good time to scrutinize your current motives.</span>

            <span class="pBreak">See if you are still being influenced by the part of yourself that cuts short your enthusiastic, optimistic impulses. Do not deny this pessimistic tendency. Failing to recognize the truth only causes repression that flares up in another part of our psyche. Instead, seek to understand and accept the hesitation and the fear you may feel, and come to terms with them. Then you can put some old emotions in their rightful place--out of the way.</span>
            
            </p>`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/44.jpg" alt="9 of Cups">`,
            title: `<h4 class="pBreak">Nine of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Nine of this suit is sometimes titled Happiness, but it is also known as Victory. The image on several versions of this card often shows an innkeeper doing a brisk business and feeling very happy about it all.</span>

            <span class="pBreak">The rewards of high achievement are not all monetary, however. This happiness also refers to the feelings of fulfillment that come from good service to the community and support of one's family, as well as gratitude for all the blessings in one's life.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Nine of Cups in this position advises that you open yourself to circumstances around you. There may be no need to manage a situation that does not require a lot of control or leadership. The tone of the moment is heartfelt and bonded. It is nurturing. Open up and choose to be receptive. Proceed from your heart, relying on your intuition. This is your truest source of information right now.</span>

            <span class="pBreak">Allow yourself to be attracted to what feels supportive. Avoid what feels harsh, critical and judgmental. If this requires that you change your style, so be it. The results of being intuitive are generally far superior to the results of being emotionally guarded and overly rational.</span>
            
            </p>`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/45.jpg" alt="10 of Cups">`,
            title: `<h4 class="pBreak">Ten of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Ten of this suit traditionally signifies family and community, often showing a celebratory scene including many generations, crowned by a rainbow signifying the end of hard times.</span>

            <span class="pBreak">See this vision -- love and support extending in all directions -- a huge emotional safety net for everyone.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">With the Ten of Cups in this position, prioritize teamwork over your personal goals. Everyone needs to feel they made a contribution. The crew needs to feel they are all in this together, and everyone needs to be rewarded when the ship comes in.</span>

            <span class="pBreak">It's essential to follow a teamwork approach in order to maximize the benefits for yourself. The good will that will emerge from such an approach will last long after the project is over. You will be generously rewarded later if you take a selfless approach at this time.</span>
            
            </p>`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/46.jpg" alt="Page of Cups">`,
            title: `<h4 class="pBreak">Page of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This card is traditionally entitled the Page, but in some modern decks appears as a Princess. In this suit this card represents a poetic, mystical, emotionally open young person, still tender and idealistic, given to flights of imaginative fantasy.</span>

            <span class="pBreak">This energy is exquisitely refined and fine-tuned. It may be that a sense of being grounded in reality has not yet entirely set in, such that he or she is easily tossed about by external forces and events. This person must work to achieve a stronger will and a more calculating mind, to balance and protect all that wonderful sensitivity.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Page of Cups (in some decks, a Princess) in this position advises you to study the best ways to be of service. Strive to discern what would give more pleasure, comfort and emotional security. Then, provide it. Understand that what is happening has little or nothing to do with you personally. The best you can do is to offer support and listen closely.</span>

            <span class="pBreak">Make sure you understand what is needed and serve the situation with loyalty. Look at individuals around you as the embodiment of the Divine, and try to fulfill each one's needs. Be unconcerned with the outcome. Later you will understand why you needed to be in this position.</span>
            
            </p>`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/47.jpg" alt="Knight of Cups">`,
            title: `<h4 class="pBreak">Knight of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This card is traditionally entitled the Knight, but in some modern decks appears as the Prince. Traditionally, this card in this suit has pictured a homecoming -- portraying a return to his true heart's home after a long journey. Like the prodigal son, he may be returning after long estrangement from all he holds dear.</span>

            <span class="pBreak">His taste for adventure is exhausted -- there is no more romanticizing of battles or travel in strange lands. Now he wants to go where he will be recognized, wanted and welcome -- where he doesn't have to fight at every turn. He has the attitude of one who has become older and wiser, the prodigal son.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Knight of Cups (in some decks, a Prince) in this position advises that you jump into your new situation with both feet. Get involved with what is happening in the present. Think no more about the route you had to travel to get back here. There is no need to be cavalier about what seems familiar.</span>

            <span class="pBreak">Look deeply at the underlying values here. You may find that they represent something you mistakenly rejected in the past. Be humble enough to look at things through new eyes. At a deep level, your heart and soul are being nourished. Don't be tempted to run away again -- this is where you belong. Your entire journey was designed to bring you home with new appreciation.</span>
            
            </p>`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/48.jpg" alt="Queen of Cups">`,
            title: `<h4 class="pBreak">Queen of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, representing the energy of a Queen, this card traditionally portrays a sensitive, vulnerable, omniscient woman who offers unconditional love. She is supremely empathic -- sometimes to a fault. Her caring nature exposes her to everybody else's emotions and needs.</span>

            <span class="pBreak">This person sometimes has difficulty identifying her own best interests in the midst of her responsiveness to others. As a result, she sometimes appears slightly unfocused or perhaps overwhelmed, filled as she is with "spirits". She represents the Grail Queen, as well as the Goddess of the Family.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Queen of Cups in this position encourages you to be generous, kind and forgiving. Support the ability of others to get what they want. Nevertheless, remember as with anyone in a caretaking position, you have a fine line to walk. You do not want your loved ones or teammates to become complacent or dependent, as if they can take your support for granted with little or no consideration for your needs.</span>

            <span class="pBreak">Cultivate an awareness of love as freely giving and receiving. In the process, help clarify the important difference between receiving energy and taking it. Do not allow your willingness to give be misunderstood or abused, as if it were a weakness.</span>
            
            </p>`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/49.jpg" alt="King of Cups">`,
            title: `<h4 class="pBreak">King of Cups</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, representing the energy of a King, this card usually portrays a watery background, with a man seated on a throne, holding the Cup of Mystery in his hand. Occasionally, his cup is fulminating like the mouth of a volcano, emanating light, but never boiling over.</span>

            <span class="pBreak">The man in this card doesn't need to speak to communicate strength, passion and commitment. Sometimes he is robed like a priest or shaman. Intense and intuitive, he is a force to be reckoned with.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The King of Cups in this position advises that you closely examine your conscience and bring your personal mission into alignment with what is best for everyone. You can then step into your community or situation with integrity and an ability to communicate the highest wisdom.</span>

            <span class="pBreak">As this sweetens the environment, others will be inspired to raise their own motives and intentions to match yours. You will be providing an important kind of leadership that uses strong reassurance to help everyone work together. The most persuasive thing about you is the example of generous behavior that you exhibit -- much more powerful than preaching alone.</span>
            
            </p>`
        }
    ],
    swords: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/50.jpg" alt="The Ace of Swords">`,
            title: `<h4 class="pBreak">The Ace of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit represents the rational mind and its ability to discriminate. Swords cut through things in order to pierce illusion, to differentiate between fantasy and reality.</span>

            <span class="pBreak">In the image of this Ace, a single upraised sword represents your prime motive or guiding ideal -- the vision that guides you through life's changing fortunes with single-minded clarity.</span>

            <span class="pBreak">The sword is sometimes shown piercing a silver and/or laurel crown, a symbol of optimism implying evolution, progress, a sense of hope and victory. It is occasionally shown pointed downwards -- a darker message, which refers to sacrifice, challenges and a critical environment.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ace of Swords in this position advises you to be steady--you are about to reach your objective. There may be no need to hesitate. Just concentrate on making your impact. This could be your moment. The arrow is pointed straight at the target. Your eye is keen, your grip is firm. Let that arrow fly! If you set aside distractions and hit your mark, you will be rewarded with insight and clarity.</span>       

            <span class="pBreak">Remember that this is not the time to hold back, worrying about the consequences. When you access this level of truth, you are very likely to cut through all illusion and nonsense.</span>
            
            </p>`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/51.jpg" alt="2 of Swords">`,
            title: `<h4 class="pBreak">Two of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Two in this suit usually represents conflicting ideas or visions. These must be reconciled by communication in order to arrive in a harmonious place or to complete strategic negotiations. Mixed signals prevail.</span>

            <span class="pBreak">While they may be appearing to try to communicate, opposite sides are missing each other entirely, with possibly drastic consequences. In the best case, a frank discussion would clear the air and serve both sides, but one cannot expect that in every instance where this card appears.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Two of Swords in this position advises that this may not be a good time to make a decision. Neither allow others to push you beyond your boundaries, nor permit yourself to act impulsively. You need to fully assimilate the situation before making any moves -- even if not having a solution as soon as you want causes tension.</span>

            <span class="pBreak">Have patience. There are circumstances in which action is better than non-action. This, however, is not one of them. Remain silent as much as possible and allow things to settle. A little meditation can help you achieve greater objectivity. You do not have enough information, as all the evidence hasn't come in yet.</span>
            
            </p>`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/52.jpg" alt="3 of Swords">`,
            title: `<h4 class="pBreak">Three of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, the Three of Swords signified separation or the breakup of a significant relationship, including the tragic emotions that come along with such an event. Some cards show the horizon filled with storm clouds and flashing lightning.</span>

            <span class="pBreak">The positive side of this card would be the ending of draining or frustrating associations, to become free again. One message this card brings is to cut some things loose. In spite of sentimental memories and emotional attachments, we need to let go of relationships that either cannot live up to their promise or have outlived the pleasure and support we once found in them.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Three of Swords in this position advises you to strike out on your own. Become more independent. Separate yourself from people and forces you do not feel compatible with. Grow a thicker skin.</span>

            <span class="pBreak">Use your creativity and imagination and seek out situations where the way you see things makes sense to those around you. Move towards those who can embrace and appreciate your talents and all you have to contribute.</span>
            
            </p>`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/53.jpg" alt="4 of Swords">`,
            title: `<h4 class="pBreak">Four of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">A Four in this suit sends a message to take some time out, surrendering worldly concerns and retreating to a sheltered place of serenity away from the hustle and bustle. The oldest Tarot card images suggest a visit to the tombs of our ancestors, a place to contemplate your mortality and breathe in the dust of those who brought you here.</span>

            <span class="pBreak">A vision quest or pilgrimage to one's own center allows us to contemplate our roots, values and goals. Here you will see your place in the flow of time ... and unfolding generations.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Four of Swords in this position strongly urges that you keep your own counsel in this situation. There may be too much fear and hostility in the environment for you to be heard. It might be that your ideas are not ripe enough or that you are not ready to listen to feedback from others.</span>

            <span class="pBreak">If you spend more time in contemplation, you may successfully disregard the emotional occupations and biases of others. For now, closely observe inner events. The time for sharing will come later.</span>
            
            </p>`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/54.jpg" alt="5 of Swords">`,
            title: `<h4 class="pBreak">Five of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, the Five of this suit references the grim and sobering process of cleaning up the battlefield after a conflict. The war as a whole has not been won or lost yet, but in this skirmish there were grievous casualties. This card admonishes the loser to study carefully what went wrong, so that a new strategy can be devised and more setbacks forestalled. There is a need to regroup and rethink the game plan, discover your blind spots and weak links, and take corrective measures before getting back into the field for another round.</span>

            <span class="pBreak">In these modern times, when the battle is more often being waged with words, laws and contracts instead of weapons, we have even more reason to examine our approach, our style, strengths and weaknesses. If we have underdeveloped communication skills or lose our objectivity in tense moments, our ability to reach our goals and dreams will decline. But, if we avoid letting ourselves be haunted by the misfortunes and detours that inevitably befall us, we will go on to achieve those goals. Do not obsess. Try to learn something.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Five of Swords in this position advises you to prepare yourself for disappointment over how your fellow humans are setting their priorities. It seems that the lower end of human nature may be eroding good will in the current situation. Due to a strong cultural trend toward scarcity thinking, a "me first" outlook prevails. If this means that you need to develop a thick skin or carry your sword of truth closer, then do so.</span>

            <span class="pBreak">Try not to be too quick to anger or jump to conclusions. Just because others may have a pessimistic sense of the world, their reality does not have to undermine yours. There is certainly no point in struggling or competing with them. Your challenge now is to learn how to sidestep confrontation and evoke a more evolved response from people. At the very least, be assertive about setting boundaries for yourself.</span>
            
            </p>`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/55.jpg" alt="6 of Swords">`,
            title: `<h4 class="pBreak">Six of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Six of this suit has generally been associated with the objectivity of scientific method, employed through the generations to sift fact from superstition, build facts into theories, and theories into laws which we can trust and use to improve our lives. One early title for this card was The Navigator -- one who has learned enough about the relation between the Earth and the heavens to be able to set a course across trackless oceans and arrive at a chosen spot on distant shores.</span>

            <span class="pBreak">At the time of the first Tarot decks, this skill was considered akin to magic, so few were the individuals who understood the principles involved. So the person who draws this card is being typified as a person with special knowledge, an insight into sophisticated techniques that may be powerful enough to effect a rescue in a dangerous time. Other related titles that are common to this card are The Path (out of danger) and The Way Through.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Six of Swords in this position reminds you that time is of the essence. You've seen the big picture, and good ideas have occurred to you about what needs to be done. Now it is necessary to take action. There may be no more time for debate.</span>

            <span class="pBreak">If the game plan has become clear, your next step could be to commit yourself to pursue changes that will lead to improvement. Overcome the tendency to get distracted. You do not have time for approval seeking. Once you initiate action, others will be grateful for your clear thinking and quick reflexes. It's a special gift to be able to navigate in times of rapidly changing and unpredictable circumstances, when a cool head and right timing are most essential.</span>
            
            </p>`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/56.jpg" alt="7 of Swords">`,
            title: `<h4 class="pBreak">Seven of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Seven of this suit typically refers to mental preparedness, acquired through the use of imagination, including the rehearsing and visualizing of desired results. This card represents the positive mental habits of a natural winner. The image most often associated with this card is that of a canny warrior who has infiltrated into the enemy camp on the eve of a fateful battle, checking out their preparations and stealing their swords. Such a move is guaranteed to demoralize the enemy and undermine their performance in the upcoming confrontation. </span>

            <span class="pBreak">Putting it in modern terms, one who draws this card needs to work smarter, not harder. Think long and deep, study all the angles and put yourself in the shoes of your competition. As a result, you will have such a thorough grasp of the whole situation that there will be no surprises -- and no excuses for anything but success. Skillful preparation justifies the optimism of the natural winner.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Seven of Swords in this position suggests that deep within you already know exactly what has to happen. You know what steps to take and what order to take them in to bring about a desirable outcome in this situation.</span>

            <span class="pBreak">You may have enough of an overview to see how to advance through the maze and achieve your goal. Continue to envision unobstructed success. Even as the path you are walking changes and the circumstances around you obscure your view, keep the desired outcome clear and sharp in your mind. You will quite likely reach your goal and gain tremendous self esteem in the process.</span>
            
            </p>`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/57.jpg" alt="8 of Swords">`,
            title: `<h4 class="pBreak">Eight of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Often called "The Test," the Eight of this suit usually pictures a warrior running the gauntlet, subjected to harsh examination, who finds out just how tough he or she is (or isn't) in the process. Life provides us with plenty of experiences that put us in situations of close scrutiny -- whether it's an entrance exam, a decisive job interview or even the tough conversations that follow upon a breach of trust in a close relationship.</span>

            <span class="pBreak">Sometimes the challenge or obstacle course has nothing to do with other people, as when an inventor has to face the question "Does it really work?" or when the aspirant has to decide how badly he desires to go through some sort of initiation. This card shows what happens to that great idea in real time, where the rubber meets the road. The Test represents your chance to vindicate the time and energy spent in getting ready for a big moment. In most cases, you will either pass or fail, with little in the way of available middle ground.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">With the Eight of Swords in this position, you are being reminded that every setback you experience is a teacher awakening you to renewed effort. This is a learn-by-doing situation; there is no formula that guarantees outcome. You can be sure, however, that an open-minded and optimistic attitude will serve you better in the face of surprising developments.</span>

            <span class="pBreak">Be willing to make the rigorous effort that is being called for now. Perform wholeheartedly, with good faith and hopefulness. As such, you'll forestall bickering and criticism, prevail against negative forces and overcome the demons of doubt and resistance. Get excited about your challenges; be confident that you have what it takes to improve the situation. If you do your internal homework, the external situation will open up for you.</span>
            
            </p>`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/58.jpg" alt="9 of Swords">`,
            title: `<h4 class="pBreak">Nine of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Nine of this suit has a special resonance with the Middle Ages, because it figures the plight of a woman who is alone in the world, during the centuries when women had no personal rights, no ability to inherit property or use the law in their own defense. We generally see her sitting up in bed weeping, grieving and in fear of abandonment because of her vulnerability, wondering what will happen to her now that her protector (father, brother, husband, or son) is gone.</span>

            <span class="pBreak">The swords above her head may indicate that the loss has come through some cruel conflict, the outcome of which has left her behind as chattel, the spoils of war. Really what we are looking at is the price of pride, which creates losers as a side effect of glorifying winners. The woman in the picture represents the concerns of the heart, the damage to the soul and to vulnerable ones, when the ego-mind becomes so invested in control and domination that it does not count the human costs. A sensitive, subtle, heartfelt approach to nature (the "feminine") is trampled and thrown aside in service to a "winner takes all" mentality.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Nine of Swords in this position advises you to confront your fear of being alone and acknowledge the different limits you may have put on yourself because of that fear. In the name of being safe, you may have adhered to lower standards than you are capable of achieving. If so, then you may have resisted striking out on your own. Perhaps you have bargained away creativity and joy in order to avoid being challenged. These kinds of tradeoffs never work.</span>

            <span class="pBreak">This could be a time to cut your losses. If so, recognize how much time and energy you have sacrificed to a way of being that's not right for you. If you can do this you will look back at this time in your life as a turning point. This may be an opportunity to heal as you shed a heavy burden that weighs you down.</span>
            
            </p>`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/59.jpg" alt="10 of Swords">`,
            title: `<h4 class="pBreak">Ten of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Ten of this suit represents finality, the end of something. As is easy to grasp from the picture in many decks, there is no hope for revival here. A limit has been reached, a line has been crossed and there is no turning back. In some situations this may be felt as a tragic loss, but it often brings with it a paradoxical sense of release and closure. The waiting and wondering are over. There is no more ambiguity. You can rightly let go and move on, as there is no more progress to be made here.</span>       

            <span class="pBreak">Emotionally and psychologically, this card appears when one is exhausted and used up, burnt out by the effort of caring and responding and trying to make a difference. When a person feels this way, they have reached burnout and can no longer be held responsible for anything, and therefore can be forgiven for caving in or ceding the fight. The simple instructions are: "Go no further along these lines!" </span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ten of Swords in this position advises that you lay low for a while. Don't make a move. Keep yourself as safe as possible until the drama, even the possible trauma, plays itself out. Once the turmoil dies down, then you can assess the damage and start to make repairs. The situation can be compared to a hurricane moving through the neighborhood. You can't be sure whether it is going to pass over a corner of the field or whether it is going to slam into your house.</span>

            <span class="pBreak">In the face of such unpredictability, protect yourself, hope for the best and wait it out. Sometimes, an extreme turn of events serves as a pressure relief valve for all the unexpressed and unresolved energy that had been building up. Trust the process even though things may seem pretty drastic right now.</span>
            
            </p>`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/60.jpg" alt="Page of Swords">`,
            title: `<h4 class="pBreak">Page of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This card is traditionally entitled The Page, but in some modern decks appears as a Princess. The traditional interpretation is about a messenger, an emissary or liaison between separate camps, charged with faithfully representing one side's communications to the other. Because of this role, we do not think of this person as a servant, but rather as a diplomat, facilitating sensitive negotiations, often under difficult conditions.</span>

            <span class="pBreak">This person is acting as the eyes and ears of her patron, and so she is sometimes referred to as The Watchman. Even kings are powerless if this messenger chooses to use her access to sensitive information for her own gain, as is implied by her other name, The Spy.</span>

            <span class="pBreak">She could even be working as a double agent, playing both sides against each other to serve her own agenda. Her title is really camouflage in itself, serving as protective coloration so she can move among the people unrecognized, collecting information anonymously. Her vigilance often conceals an ulterior motive. She is a watcher who must herself be watched, because she dreams of someday taking matters into her own hands, preempting the plans of her employers.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">When the Page of Swords (in some decks, a Princess) is in this position, the situation requires subtle change in order for it to be brought to the highest good for all concerned. In contrast to times when one can best serve the greater good by being visible and heroic, this is a time when you must keep your own counsel, cover your tracks and stealthily accomplish what would be impossible to complete without privacy.</span>

            <span class="pBreak">Reduce your profile and increase your anonymity, no matter how your self-image might suffer. Although it would be gratifying to accomplish what needs to be done and be aboveboard about it, that cannot be a priority at present.</span>
            
            </p>`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/61.jpg" alt="Knight of Swords">`,
            title: `<h4 class="pBreak">Knight of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This card is traditionally entitled The Knight, but in some modern decks appears as The Prince. Traditionally, this card portrays the restless mind, aroused by thoughts of offense and defense, storming around searching for a target to pounce on. He often feels slighted, has a chip on his shoulder and bristles with a hostile attitude. His usual method is to look for someone to blame for his irritation.</span>

            <span class="pBreak">Furthermore, in an attitude of righteousness, he may assign himself the job of correcting the offender. Jumping easily to conclusions, he shoots first, asks questions later and is therefore often guilty of overkill. This is not to say that he does not have his heroic side; a single-minded combativeness can have its value. However, even when he is doing the right thing, he is likely to be doing it for the wrong reasons. Apt advice for this card is to deeply question your motives for what you are thinking about doing. Forethought will assist you in discriminating between righteous and unrighteous causes. Control any traces of impulsive judgement!</span>

            <span class="pBreak">Occasionally you will notice in the detail on the card, that the person can be a woman rather than the expected man. There is some evidence that the tradition of knighthood included a certain number of "anonymous knights" who took mythic names and veiled their true identities. Living on the road with few or no servants, they served as freelance defenders of travelers, champions of the little people against the exploitation of both highway robbers and the wealthy classes. Odds are that some of these knights-errant were camouflaged women, and that idea is preserved with the traditional representation of the Sword Knight.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Knight of Swords in this position advises you to remain open to conflicting ideas instead of surrounding yourself exclusively with people who agree with you. This Knight is most effective when testing his ideas in a debate. Emulate his ability to communicate successfully by keeping your conversations impersonal and humorous so no hurt feelings are provoked.</span>

            <span class="pBreak">Practice your negotiation skills so you will be in shape for imminent diplomatic challenges as they arise. A sparring partner could help you learn to control impulsive comments and stem your urge to be right at the expense of others being wrong.</span>
            
            </p>`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/62.jpg" alt="Queen of Swords">`,
            title: `<h4 class="pBreak">Queen of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Representing the energy of a Queen, this feminine power was traditionally known as a widow, crone or divorcee. In modern times, she can be viewed as a model of self-sufficiency, independence and intelligence. She often has extremely high standards due to her subtle sensitivities, which can be perceived by those around her as being critical or hard to please. Her true motive is to refine the world, to upgrade peoples' understanding -- so that everyone can have the space they need to become fully themselves.</span>

            <span class="pBreak">She is not interested in conforming. She is too intelligent to be confined to the role of housewife or nursemaid, although she is perfectly competent in those areas. She chooses her associations (or her solitude), and is seldom caught up in dependent relationships -- at least not for long. Her intelligence is not always the most comfortable to be around, but she can be counted on to see through superficiality and point to the truth of a situation.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Queen of Swords in this position advises that you refrain from remaining dependent on others at this time. Instead of placing too much confidence in the promises people have made, harbor only those ambitions you know you can accomplish yourself.</span>

            <span class="pBreak">The Queen of Swords does not want to wait and see what others would think, say or do. She knows what she wants and how to get it. She doesn't ask permission or even subject herself to much influence. There are times in life when no one can take care of you as well as you can. Leave sentimentality behind and take action. Make important decisions for yourself because it's up to you. You are the final judge.</span>
            
            </p>`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/62.jpg" alt="King of Swords">`,
            title: `<h4 class="pBreak">King of Swords</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, representing the energy of a King, this masculine energy form is The Adjudicator, the wise judge or mediator. He helps parties in conflict discover common ground and build upon it, and guides societies to see their greater good. His archetype is Solomon, ancient lawgiver and philosopher of the Old Testament. Sometimes appearing cool and detached, he can be misunderstood as not caring.</span>

            <span class="pBreak">But emotional displays are just not his medium, nor is he moved by appeals to sympathy or pity. With the philosophical overview that comes from long experience, he listens deeply, watches closely and speaks last. In the end, his even-handedness and objectivity earn him the respect he receives from his community, and those who cannot work out their problems come to him voluntarily for advice.</span>

            <span class="pBreak">Occasionally this man is subtly detailed to imply that he is a woman in male armor. If you notice this theme in your deck, it is a reference to Joan of Arc, the Maid of Orleans, archetype of a devout and inspired woman warrior, who was mystically led to abandon her social role to defend what she saw as the greater good. Although she was martyred young, her model crystallizes the message that sometimes the good of the whole is more important than the good of the individual, and in that case, even if you lose, you win just for being there.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">In this position, the King of Swords advises that you research your situation and in the process question existing authorities. It may be time to examine underlying assumptions and bring greater clarity into areas that have been left in the dark. Don't wait for others to do it. Instead, draw your own conclusions.</span>

            <span class="pBreak">Spend time reviewing all the ramifications because this King of Swords requires a thorough, methodical examination of ideas and possibilities. Call forth the sober and wise part of yourself -- the elder father figure. Then act on the instructions given you.</span>
            
            </p>`
        }
    ],
    pentacles: [
        {//array index: 0
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/64.jpg" alt="The Ace of Pentacles">`,
            title: `<h4 class="pBreak">The Ace of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often named "Coins" or "Pentacles", is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.</span>

            <span class="pBreak">The Ace of this suit is usually pictured with a garden or agricultural backdrop, and symbolizes a seed. If this "talent" is planted and tended carefully, it will sprout and reward you with a good harvest. Think of it as a seed of your future fulfillment. An Ace represents the first step to a goal, and if that step is repeated, it will cover great distances. Generally, the suit of Coins are referring to the tangible realities in daily life, but in the case of the Ace, it could be symbolizing a winning idea, game plan or blueprint for eventual materialization.</span>

            <span class="pBreak">Occult tradition sometimes interpreted this Ace as representing the alchemist's gold -- the light within matter, the 3rd eye of the energy-body. This recommends meditating upon the light within, and pointing oneself toward the archetype of humanity enlightened. By practicing such a meditation, one eventually gains enough control of the celestial radiance to heal the body, untangle the emotions and complete the growth of the soul.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ace of Coins in this position advises that you apply nature's lesson of compound interest and develop your project gradually. A slow and steady buildup -- visible or invisible -- makes change and growth inevitable. Akin to the changing of the seasons, you do not notice this trend from day to day. As the year comes full circle, however, you cannot miss the changes.</span>

            <span class="pBreak">This card advises that if you work a little bit every day toward your long-term goal, at some time in the future you will discover that you have accumulated magnificent results. The secret of achieving success does not lie in inflating your dreams to grandiose levels; instead it comes about by choosing your direction wisely, while humbly and faithfully taking one step at a time.</span>
            
            </p>`
        },
        {//array index: 1
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/65.jpg" alt="2 of Pentacles">`,
            title: `<h4 class="pBreak">Two of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often named "Coins" or "Pentacles", is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, or a material or financial resource.</span>

            <span class="pBreak">The Two in this suit generally features a youth juggling, with two coins juggled in figure-eight fashion, or just the coins without the youth -- one heads up, the other tails -- both flipping in the air. It is clear that until one or the other coin drops, the final call can not be made; there is more to learn before a decision can be made about appropriate action.</span>

            <span class="pBreak">This card counsels patience, so do not allow yourself to be rushed. The figure-eight image is a symbol of immortality and eternity. Its message is "No need to hurry. You have all the time you need to work this out, no matter how things appear right now." Implied within this scenario is the idea that changes are in the works, but you will do better to stay calm until you have more information. Everything is in flux at a time like this.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Two of Coins in this position advises you not to choose anything definitive for the time being. Give yourself a little more time to sort out your feelings and any mixed messages you may be receiving from others.</span>

            <span class="pBreak">Ask yourself -- are all the facts in yet? Or is the coin still flipping in the air? There is no need to be goaded into premature decisions or actions. Act only when you are able to do so with a unified heart and mind.</span>
            
            </p>`
        },
        {//array index: 2
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/66.jpg" alt="3 of Pentacles">`,
            title: `<h4 class="pBreak">Three of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often named "Coins" or "Pentacles", is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.</span>

            <span class="pBreak">The Three is traditionally the card of genius. Here we usually see a master craftsman conferring with his masons on the installation of a beautiful stained-glass window in the cathedral. This designer is often likened to Leonardo da Vinci or Michelangelo, a multi-talented visionary who has no peers in talent or productivity.</span>

            <span class="pBreak">The masterwork is being proudly showcased for future generations, as an object of personal and collective pride. On some cards, the genius is portrayed at his studio, alone and burning the midnight oil, in a creative ferment -- driven to draw, paint, invent, or whatever work genius wants to bring into creation. As a subtext to the rewards of genius are the days and weeks of intense concentration it takes to solve the problems that great works entail.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Three of Coins in this position suggests that you showcase your unique capabilities. Let the world in on who you really are. This is a good time to seek recognition. Once you receive the appreciation you deserve, accept and savor the acknowledgment.</span>

            <span class="pBreak">Expect new and exciting offers. When they arrive, accept them graciously. Why hide your light under a bushel? It does not become you to display false modesty. Practice saying to yourself, "Thank you, I accept the compliment" until you learn to fully let in this kind of affirmative grace with ease.</span>
            
            </p>`
        },
        {//array index: 3
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/67.jpg" alt="4 of Pentacles">`,
            title: `<h4 class="pBreak">Four of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often named Coins or Pentacles, is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.</span>

            <span class="pBreak">A Four in this suit has been used to express the paradoxical aspect of material security -- the two-edged sword of having been well supported and protected. It sounds completely idyllic until one investigates the real demands that prosperity places upon people -- the pressure of big decisions, responsibilities toward dependents or employees, and even tougher decisions in times of insecurity.</span>

            <span class="pBreak">An immature person thrust into such a position would lack the perspective to sensibly assess risks and rewards, would be vulnerable to bad advice or surprise developments, and could even put the livelihoods of loyal assistants at risk. This card also can refer to the subtler dependencies that comfort encourages, allowing laxness and self-indulgence to quietly degrade one's reserve of will.</span>

            <span class="pBreak">The character this card represents needs to move slowly and deliberately if change is required, as the consequences will affect more than just her or himself.</span>

            <span class="pBreak">Note: In the English decks, like Rider-Waite, we see a person who is stuck in their misunderstanding of how the material plane works. He's afraid to let go of his four measly coins, because he doesn't know he has to give in order to get. When looked at this way, this is the card of poverty consciousness.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Four of Coins in this position signifies a young person, naive and pampered, who has been left an estate. Think conscientiously about all those people whom your activities impact, including those whose work and effort went into building what you inherited and those whose welfare depends upon your right management.</span>

            <span class="pBreak">What you have been given is abundant; still, it is not without limits. If you are prudent and responsible, the endowment will grow. However, if you are frivolous or foolish, your behavior could undermine both your inheritance and the well being of others who are connected to it.</span>         

            <span class="pBreak">In many decks, we see the image of a person who is stuck in his or her misunderstanding of how the material plane works. He's afraid to let go of his four measly coins, because he doesn't know he has to give in order to get. When looked at this way, this is the card of "poverty consciousness."</span>
            
            </p>`
        },
        {//array index: 4
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/68.jpg" alt="5 of Pentacles">`,
            title: `<h4 class="pBreak">Five of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often named "Coins" or "Pentacles", is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.</span>

            <span class="pBreak">The Five of this suit is the card of desire and gratification, expressed in classical tradition as flattery and false promises. This card represents both the seducer and the one seduced. There is undeniable excitement in the attraction of opposites; we have all had delightful moments of magnetism with a stranger. However, if promises are only spoken to achieve short-term gratification with no intent of follow-through, or the attraction appears as competition to more fulfilling relationships, the long-term result won't be worth the thrill of the chase.</span>

            <span class="pBreak">The appearance of a viable relationship does not always bear out, so don't put anything of real value at risk over an infatuation. Since the suit here is Coins, this is as likely to be related to business as to pleasure. Try to remove the influence of glamour from your thinking.</span>

            <span class="pBreak">Note: In the English decks, like the Rider-Waite, the sickly poor freezing outside a well lit church warn of the painful outcomes of bad choices, rather than focusing on the dynamic tension of the choosing itself.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Five of Coins in this position advises you to create contractual agreements with those around you who have similar interests. In this kind of situation, there is strength in numbers. Put your heads together and devise a bold plan for future objectives and decide how to invest in their success. This Five of Coins recommends teamwork and the mutual benefits a combined effort can yield.</span>

            <span class="pBreak">Note: In the English decks, like the Rider-Waite, the sickly poor freezing outside a well-lit church warn of the painful outcomes of bad choices, rather than focusing on the dynamic tension of the choosing itself.</span>
            
            </p>`
        },
        {//array index: 5
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/69.jpg" alt="6 of Pentacles">`,
            title: `<h4 class="pBreak">Six of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This suit, most often named "Coins" or "Pentacles", is a symbol for a magical talisman that represented wealth or potential. This suit represents something supportive that is available to you -- whether it be health, some kind of talent, a material or financial resource.</span>

            <span class="pBreak">The Six of this suit is the card of patronage -- generosity with strings attached. The picture shows a rich man giving alms, his reputation enhanced from his giving, but without having helped anybody really better him or herself. Sometimes there is an inference that the giver will be expecting something back for his giving, perhaps sexual favors.</span>

            <span class="pBreak">Sometimes this card is interpreted as referring to some kind of patron or benefactor who rescues a talented person from oblivion, but then wants to dictate what the artist works on as his fame grows. Inequality of power is generally a factor in this card, and the person being helped needs to be careful not to trade off heart and soul for a shortcut to fame or fortune. Each player in this scenario needs to examine the possibility they are taking one side or the other in an unbalanced power struggle.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Six of Coins in this position asks you to think of yourself as a cosmic talent agent, seeking individuals who show a spark or gift. You may help them refine and upgrade their skills to fit a larger context. The outcome is a peer relationship with a sense of mutual regard and admiration.</span>

            <span class="pBreak">This is a delicate operation. You have to constantly check your intentions so that you are not expecting something in return. Do not for a minute feel proud about doing someone a favor. In truth what you are doing is paying back an old debt to those who served as your mentors.</span>
            
            </p>`
        },
        {//array index: 6
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/70.jpg" alt="7 of Pentacles">`,
            title: `<h4 class="pBreak">Seven of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Seven of this suit is typically a paean to the humble laborer who is willing to show up every day and sweat in the sun for next season's bounty. The traditional concept is cultivation, with an attitude that slow and steady wins the race, with faith in nature's assistance. The protagonist of this card doesn't make excuses, isn't whimsical or moody, but is dedicated and sees the job through. Of course, it's no good to count your chickens before they hatch, but there's no question that the person who is vigilant over a project is more likely to get the desired result.</span>

            <span class="pBreak">Someone who works with nature, cooperating with her ways, will waste less energy and time than the person who works against her. As a side meaning, we sometimes see this normally humble farmer in a moment of frenzy, betting the crop on a roll of the dice. This represents a moment of dementia, addiction or desperation which hopefully will not last long enough for the farmer to lose everything!</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Seven of Coins in this position advises you to focus on the long run. Look beyond this week or this month. This card exemplifies the magic of compound interest. You'll have much better results with a slow and steady investment of time, energy and labor than you would generate by trying to win the lottery.</span>

            <span class="pBreak">The path to success is paved by perseverance. Glamorous or flashy moves cannot take the place of consistent steps in the right direction. If you do not understand this, perhaps you are moving in the wrong direction or are not motivated strongly enough.</span>
            
            </p>`
        },
        {//array index: 7
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/71.jpg" alt="8 of Pentacles">`,
            title: `<h4 class="pBreak">Eight of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Eight of this suit is the card of works. We see here the successful artisan spending time at his bench, hammering out the commissions he has attracted because of his skill. This artist is the best in her or his class, so popular that it's become difficult keep up with demand. She is paid whatever she asks and accepts only the most worthy assignments.</span>

            <span class="pBreak">If there is a problem in this card, it has to do with the trap of workaholism, the feeling of being so indispensable that you will not ask for help or delegate anything. There is also the issue of becoming so identified as the creator of elegant works, that the personal identity of the creator becomes consumed by the works themselves. This artisan seldom gets to have a home life, time off, much time for friends. The solution lies in balancing creative energy with a personal life.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Eight of Coins in this position recommends that you focus on your main project and produce as much as you can, while staying healthy. This is an important time for meeting goals. However, do not work so hard that quality suffers.</span>

            <span class="pBreak">You are in a position where your effort can make a big difference. Apply yourself. Do the work and you will be rewarded with flexibility and freedom.</span>
            
            </p>`
        },
        {//array index: 8
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/72.jpg" alt="9 of Pentacles">`,
            title: `<h4 class="pBreak">Nine of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Nine of this suit points to a person who is financially secure enough to live comfortably. This is about someone supported by her own business, inheritance or property. This is one person in a thousand.</span>

            <span class="pBreak">This fortunate individual has turned a historical accident into a personal opportunity. This is one who has the vision and strength of character to hold onto gains against all odds. Do not be fooled at the apparent ease displayed on this card -- the person pictured is at the tail end of a long and stressful process of winning the right to be taken seriously. All of this grace has been paid for several times over.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Nine of Coins in this position suggests that you prepare yourself for greater resources to be flowing in your direction. If you pay attention -- and keep the faith -- you can make a smooth transition into a state of well being and peace of mind. Hard work has brought you to a place where you could earn and receive grace, comfort, and freedom -- whether that be personal, emotional or financial.</span>

            <span class="pBreak">Exercise your imagination and create an abundant, sustainable, and enjoyable lifestyle (or relationship) for yourself. Acknowledge the friends and others who were loyal to you during the difficult times. Gather your dreams and get ready. You deserve this happiness.</span>
            
            </p>`
        },
        {//array index: 9
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/73.jpg" alt="10 of Pentacles">`,
            title: `<h4 class="pBreak">Ten of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">The Ten of this suit represents the final result of cumulative efforts -- perhaps after generations of effort -- resulting in such abundance that it directly and indirectly supports a lot of people. One layer of meaning refers to the pride of supporting your own lineage of well-loved souls.</span>

            <span class="pBreak">Imagine a flow of abundant resources so abundant that you are filled with not only pride but self-respect and gratitude. Such bounty can impact the destiny of many families and generations. Nobility obligates is possessors, and the obligation must be passed down from generation to generation along with the abundance and freedom.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Ten of Coins in this position advises that you think of yourself as one who may be of great benefit to people. No matter whether it be a service, an invention or an idea -- you know you are holding a storehouse of value. Your potential treasure is enough to take care of you and yours for a long time. Exactly how are you going to administer the rewards of your talent?</span>

            <span class="pBreak">Recall the time when you began this current path or endeavor. Remember your sincerity, your innocence and your original vision. Can you reproduce success and sustain inspiration as the administrator of your present abundance? Think of every act of spending and investing and securing as the sowing of seed that will sprout and produce another money tree in somebody else's yard. How can you get really clever and inventive at throwing those seeds? This is your next assignment.</span>
            
            </p>`
        },
        {//array index: 10
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/74.jpg" alt="Page of Pentacles">`,
            title: `<h4 class="pBreak">Page of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This card is traditionally entitled The Page, but in some modern decks appears as a Princess. This card's energy has to do with learning about compound interest and abundance. Her attention is focused on learning the natural laws that pertain to natural synergies.</span>

            <span class="pBreak">Whether the learning is about growing vegetables, the stock market or culturing new medicines in the lab, this Page wants to understand the underlying mechanism that supports the creation of results and abundance.</span>

            <span class="pBreak">You may see this person in the position of the attendant or junior partner, but that is only a current appearance. That demeanor of humility or servitude will soon enough disappear, as her sense of mastery increases. By studying the example of those around her, successful and unsuccessful, she is building a game plan that will lift her from obscurity and make her successful in her own right. She just has to collect the necessary education and experience, which she is doing right now.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Page of Coins (in some decks, a Princess) in this position advises that you study your chosen field seriously, gaining intellectual knowledge plus whatever experiential learning you can pick up as well. Listen to the stories of others, both their successes and their failures, and let yourself be inspired by their dedicated efforts.</span>

            <span class="pBreak">Leave no stone unturned. See if you can figure out why their experiments went the way they did and what you might do differently that could change the outcome. Passionately hunt for the missing pieces overlooked by those who came before you. Remember that the mind of a beginner is an open channel for genius. Let that openness lead you and you will instinctively penetrate to the heart of the matter.</span>
            
            </p>`
        },
        {//array index: 11
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/75.jpg" alt="Knight of Pentacles">`,
            title: `<h4 class="pBreak">Knight of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">This card is usually called The Knight, but in some modern decks appears as the Prince. Traditionally, this card in this suit pictures an overseer of fertility and growth. His period of ascendancy is during the quiet years between conflicts, when everybody can collaborate in raising the collective standard of living. His horse is usually huge and thickset, more suitable to pulling a plow than riding swiftly into battle. His temperament is easygoing and relaxed, he's moving at the rate of the flow, because he knows that you can't hurry time.</span>

            <span class="pBreak">Seeing the bigger picture, like a farmer planning for the future, he doesn't allow momentary fads or fancies to distract him, and he doesn't take seriously those who do. One can feel his stability and dedication -- he is totally responsible and even somewhat predictable when it comes to his projects. He is earthy and gentle, as simple and deep as the soil he tills and the flowers he loves.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">When the Knight of Coins (in some decks, The Prince) falls in this position you are being advised to offer up your services to some project or enterprise in front of you. Your willing participation can make the difference between a marginal performance and a great one.</span>    

            <span class="pBreak">The entire endeavor will be enhanced significantly by the resources you bring to it and you will be blessed tenfold. Expect to supervise and guide the project as well as influence the outcome of events. Without you on board, this endeavor is just another good idea.</span>
            
            </p>`
        },
        {//array index: 12
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/76.jpg" alt="Queen of Pentacles">`,
            title: `<h4 class="pBreak">Queen of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Traditionally, representing the energy of a Queen, this feminine guardian is endowed with enormous good sense and problem solving energy, but she is not particularly entrepreneurial. She loves to advise, encourage, and empower those she gets involved with, studying their problems with them and setting them up to solve them. Traditionally, she was pictured as the Sibyl or Oracle, perhaps a Tarot reader, who made herself available to people in need, no matter what their social class or situation. In modern times, she will be found educating, healing, managing disaster aid programs or a charitable drive of some sort.</span>

            <span class="pBreak">In every case, she does not see the benefits that exist in her life as belonging solely to her. She feels the needs of her people and will spend freely of her time, energy, skills, money to see that nobody is left out. For this, and because she likes to work in an atmosphere of beauty, enjoyment and abundance, she is sometimes accused of being extravagant. But she works hard, and she sees no reason to deny herself the rewards of a job well done. Everyone who comes in contact with her feels enriched by her enjoyment in living.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The Queen of Coins in this position advises you to trust the forces that have taken care of you up to this point. Continue to express your truth without worrying that you are going to lose the roof over your head or the bed you sleep in. It is your destiny to be safe and sound at this time in your life.</span>

            <span class="pBreak">Proceed with confidence and do what you so strongly feel must be done. Since the Queen of Coins is often the person with the best intuition in the crowd, you may feel at first as if you are going against the grain, only to later find yourself becoming the leader of a new trend.</span>
            
            </p>`
        },
        {//array index: 13
            card: `<img class = "cardFront" src="./Assets/Cards/wingedSpirit/77.jpg" alt="King of Pentacles">`,
            title: `<h4 class="pBreak">King of Pentacles</h4>`,
            generalMeaning: `
            <h5>General Meaning:</h5>
            <p><span class="pBreak">Representing the energy of a King, this card in the suit of Coins or Pentacles displays one who has accomplished a lot in life and has arranged his or her affairs so that he has much good to show for it. Possessing a practical genius in the ways of the world, he loves to build things. Because he's so good at deal-making, this character is privy to the biggest deals in town. He has the power to make or break people financially. Although this does not always win him love, it certainly earns him respect.</span>

            <span class="pBreak">In previous centuries this card referred to the myth of Midas, who loved gold so much that he was cursed so that everything he touched turned to gold. One day his daughter reached out to him and was turned into a golden statue. This story illustrates the downside of letting material security take too much precedence.</span>

            <span class="pBreak">While the character of this card understands the value of wealth, including the burden it produces, he or she is mature enough to keep things in perspective. Even though the suit of Coins represents the material realm, this King is not just a materialist -- his sovereignty reflects higher values, as well as general welfare and prosperity.</span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak">The King of Coins in this position advises you to behave as if you already were a success. Project confidence that your plans and goals are in the process of unfolding perfectly.</span>

            <span class="pBreak">Make your moves with authority and trust in your actions without waiting for acknowledgment or approval. Soon enough you will receive blessing after blessing. If you can learn to feel that kind of confidence in your body and get comfortable with it as your natural state, you will attract the support you desire.</span>
            
            </p>`
        }
    ],
}

suites = [
    'wands', //0
    'cups', //1
    'swords', //2
    'pentacles' //3
]// end of card arrays

// first random number generator to start the process. // ✔
let num = Math.round(Math.random() * 35);

// function that ill provide a randomNumber // ✔
function getRandom(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}



// ••• FUNCTION TO OPERATE WITHIN THE EVENT LISTENERS:

const eventFunction = function () {
    //for major arcana and card number.
    // •• SET UP: random number generator for cards 1 - 13 + 22 major arcana.
    let num = Math.round(Math.random() * 35) + 1; // ✔

    suiteIndex = getRandom(suites.length); // gives # for [#] within suite array
    //return Int value for suit index = 0-3 ✔

    majArcana = getRandom(tarotCard.majorArcana.length);
    //return Int value for majorArcana index = 0-21 ✔



    // •• DECLARE: suite variables function. // ✔
    findSuite = suites[suiteIndex];  // variable to hold suite of card when not a major arcana = "wands, cups, swords, pentacles" ✔

    tarotCardSuite = tarotCard[findSuite]; // variable to hold non-major arcana suites within main array. ✔

    tarotSuiteIndex = getRandom(tarotCardSuite.length);
    console.log('tarotsuiteIndex', tarotSuiteIndex); //✔


    // •• SET UP: click counter  ✔    
    counter++;

    // •• SET UP: function to append data from cards ✔ ❌❗ // sometimes error?
    // for major arcana // ✔
    const htmlToAppend2 = function (placeholderSpot) {
        // in placeholder
        $(placeholderSpot).append(`${tarotCard.majorArcana[majArcana].card}`);

        //div
        $(".readSpace").append(`${tarotCard.majorArcana[majArcana].title}`);
        $(".readSpace").append(`${tarotCard.majorArcana[majArcana].generalMeaning}`);
        $(".readSpace").append(`${tarotCard.majorArcana[majArcana].advice}`);
    };

    // for non major arcana// ✔
    const htmlToAppend = function (placeholderSpot2) {
        // in placeholder
        $(placeholderSpot2).append(`${tarotCardSuite[tarotSuiteIndex].card}`);

        //div
        $(".readSpace").append(`${tarotCardSuite[tarotSuiteIndex].title}`);
        $(".readSpace").append(`${tarotCardSuite[tarotSuiteIndex].generalMeaning}`);
        $(".readSpace").append(`${tarotCardSuite[tarotSuiteIndex].advice}`);
    };

    // •• SET UP:  variables to splice used cards.❌❗❗❗
    let spliceUsedMaj = function(){
        tarotCard.majorArcana.splice(tarotCard.majorArcana[majArcana], 1)
    };
    let spliceUsedNotMaj = function() {
        tarotCardSuite.splice(tarotCardSuite[tarotSuiteIndex], 1);
    };

    // •• SET UP: Download button; only on 3rd click to appear under appended text ❌
    // source: https://forum.jquery.com/topic/how-to-convert-html-div-to-pdf-format-in-jquery
    const downloadPdf = function (){
        $(".readSpace").append(`<button id="download">Download As Pdf</button>`);
        $('#download').on('click', function(){
            let doc = new jsPDF();
            doc.append($('.readSpace'), 15, 15, {
                'background': '#FFFFFF',
                'border':'2px solid white',
                }, function(){
                    doc.save('myReading.pdf');
                });
        });
    };




    // •• 📝 LOCAL APPEND WITHIN ON CLICK FUNCTION

    if (num < 14) {//for non-major arcana

        if (counter === 1 && num < 14) {

            //Placeholder1
            htmlToAppend(".placeholder1");
            // splice card to usedCard array
            spliceUsedNotMaj();

        } else if (counter === 2 && num < 14) {

            // Placeholder 2
            htmlToAppend(".placeholder2");
            spliceUsedNotMaj();

        } else if (counter === 3 && num < 14) {

            //Placeholder 3
            htmlToAppend(".placeholder3");
            spliceUsedNotMaj();
            // downloadPdf;
        } else {
            alert('Please Refresh To Pull Again');
        };

    } else if (num > 14) { //for major arcana

        if (counter === 1 && num >= 14) {

            // Placeholder1
            htmlToAppend2(".placeholder1");
            spliceUsedMaj();

        } else if (counter === 2 && num >= 14) {

            // Placeholder2
            htmlToAppend2(".placeholder2");
            spliceUsedMaj();

        } else if (counter === 3 && num >= 14) {

            // Placeholder3
            htmlToAppend2(".placeholder3");
            spliceUsedMaj(); 
            // downloadPdf
        } else {
            alert('Please Reset To Pull Again');
        };
    };
};




// 🌎 END GLOBAL SCOPE •••


// 🏡 LOCAL SCOPE START•••

// •• 🧠 LOGIC: if num returns a value under 14, search in the suite array for the suite. Use the returned suite value to find the array in 'tarotCard' object.
// Use a variable assigned to RNG and use RNG as index for random search within suite array for a card number, and return value in console log/append to read panel.

// •• on mouse click: // ✔
$('.deck7').on('click', function () {
    eventFunction();

    // 🚑 DEBUGGING CONSOLE LOG CHAIN •••
    // •• console log to check strings
        console.log('Testing of variables:');
        console.log('1. num result:', num);
        console.log("2. counter", counter);
        console.log('3. majArcana:', majArcana);
        console.log('4. suiteIndex: ', suiteIndex); // ✔
        console.log('5. findSuite: ', findSuite); // ✔
        console.log('6. majorArcana:', tarotCard.majorArcana);
        console.log('7. major Arcana Title:', tarotCard.majorArcana[majArcana].title, tarotCard.majorArcana[majArcana].card); // ✔
        console.log('8. findSuite[suiteIndex]:', tarotCardSuite[tarotSuiteIndex].title, tarotCardSuite[tarotSuiteIndex].card); // ✔
        console.log(`9. non maj arcana: ${tarotCardSuite[tarotSuiteIndex].card}`); // ✔
        console.log(`10. maj arcana: ${tarotCard.majorArcana[majArcana].card}`); // ✔
        console.log("11. tarotCardSuite: ", tarotCardSuite);
        console.log('12. tarotCard the Array: ', tarotCard);

});

//  •• on key press (space & i)// ✔
$(document).keydown(function (e) {
    e.preventDefault();
    if (e.which === 32) {
        // logic for enter key}
        eventFunction();

        // 🚑 DEBUGGING CONSOLE LOG CHAIN •••
        // •• console log to check strings
        console.log('Testing of variables:');
        console.log('1. num result:', num);
        console.log("2. counter", counter);
        console.log('3. majArcana:', majArcana);
        console.log('4. suiteIndex: ', suiteIndex); // ✔
        console.log('5. findSuite: ', findSuite); // ✔
        console.log('6. majorArcana:', tarotCard.majorArcana);
        console.log('7. major Arcana Title:', tarotCard.majorArcana[majArcana].title, tarotCard.majorArcana[majArcana].card); // ✔
        console.log('8. findSuite[suiteIndex]:', tarotCardSuite[tarotSuiteIndex].title, tarotCardSuite[tarotSuiteIndex].card); // ✔
        console.log(`9. non maj arcana (tarotCardSuite[tarotSuiteIndex)]): ${tarotCardSuite[tarotSuiteIndex]}`); // ✔
        console.log(`10. maj arcana (tarotCard.majorArcana[majArcana]): ${tarotCard.majorArcana[majArcana]}`); // ✔
        console.log("11. tarotCardSuite: ", tarotCardSuite);
        console.log('12. tarotCard the Array: ', tarotCard);

    };
    if (e.which === 73) {
        $('.instruction').fadeToggle();
    }
});

$('.instructionButton').on('click', function () {
    $('.instruction').fadeToggle();
});

//  •• on key press (up and down)// ✔
$(window).keydown(function (e) {
    e.preventDefault();
    if (e.which === 38) {

        $('.readSpace').scrollTop(-5000);
    };
    if (e.which === 40) {
        $('.readSpace').scrollTop(5000);
    }
    if (e.which === 82) {
        location.reload();
    };
});

alert('Press "i" for instructions, or click the icon!');// ✔

// •• ✨ ANIMATION EFFECTS ** STRETCH GOALS

// SHUFFLE
// source: https://www.hungred.com/how-to/tutorial-shuffle-effect-jquery/
$(function () {
    let s = 0;
    $('.card').on('click', function () {
        $(this)
            .animate({left: '15%;'}, "slow", "easeOutBack", function () { s--; $(this).css('z-index', s) })
            .animate({left: '38%'}, "slow", "easeOutBack");
    });
});



// 🏡 LOCAL SCOPE END •••
