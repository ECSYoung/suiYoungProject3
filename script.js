// document ready
// $(document).ready(function () {
//     console.log('ready');
// });

// 🌎 GLOBAL SCOPE •••
//button to empty inputs:
$('.buttonStyle').on('click', function () {
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
        {//array index: 8
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
        {//array index: 9
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
        {//array index: 10
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
        {//array index: 11
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
        {//array index: 12
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
        {//array index: 13
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
        {//array index: 14
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
        {//array index: 15
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
        {//array index: 16
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
        {//array index: 17
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
        {//array index: 18
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
        {//array index: 19
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
        {//array index: 20
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
        {//array index: 21
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
        {//array index: 22
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
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
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

// first random number generator to start the process. // ✔
let num = Math.round(Math.random() * 35) + 1;

// function that ill provide a randomNumber // ✔
function getRandom(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
    ;
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



    // •• DECLARE: suite variables. // ✔
    findSuite = suites[suiteIndex];  // variable to hold suite of card when not a major arcana = "wands, cups, swords, pentacles" ✔

    tarotCardSuite = tarotCard[findSuite]; // variable to hold non-major arcana suites within main array. ✔

    tarotSuiteIndex = getRandom(tarotCardSuite.length);
    // console.log(tarotSuiteIndex); //✔


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
    let spliceUsedMaj = tarotCard.majorArcana.splice(tarotCard.majorArcana[majArcana], 1);
    let spliceUsedNotMaj = tarotCardSuite.splice(tarotCardSuite[tarotSuiteIndex], 1);

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
            spliceUsedNotMaj;

        } else if (counter === 2 && num < 14) {

            // Placeholder 2
            htmlToAppend(".placeholder2");
            spliceUsedNotMaj;

        } else if (counter === 3 && num < 14) {

            //Placeholder 3
            htmlToAppend(".placeholder3");
            spliceUsedNotMaj;
            downloadPdf;
        } else {
            alert('Please Refresh To Pull Again');
        };

    } else if (num > 14) { //for major arcana

        if (counter === 1 && num >= 14) {

            // Placeholder1
            htmlToAppend2(".placeholder1");
            spliceUsedMaj;

        } else if (counter === 2 && num >= 14) {

            // Placeholder2
            htmlToAppend2(".placeholder2");
            spliceUsedMaj;

        } else if (counter === 3 && num >= 14) {

            // Placeholder3
            htmlToAppend2(".placeholder3");
            spliceUsedMaj; 
            downloadPdf
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
