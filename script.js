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
            <p><span class="pBreak"></span>
            
            </p>`,
            advice: `
            <h5>Advice:</h5>
            <p><span class="pBreak"></span>
            
            </p>`
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
    ;
}



// ••• FUNCTION TO OPERATE WITHIN THE EVENT LISTENERS:

const eventFunction = function () {
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
    counter++;

    // •• SET UP: function to append data from cards ✔
    // for major arcana
    const htmlToAppend2 = function (placeholderSpot) {
        // in placeholder
        $(placeholderSpot).append(`${tarotCard.majorArcana[majArcana].card}`);

        //div
        $(placeholderSpot).append(`<p>Here Is Your Reading For Draw ${counter}: </p>`);

        $(".readSpace").append(`${tarotCard.majorArcana[majArcana].title}`);
        $(".readSpace").append(`${tarotCard.majorArcana[majArcana].generalMeaning}`);
        $(".readSpace").append(`${tarotCard.majorArcana[majArcana].advice}`);
    };

    // for non major arcana
    const htmlToAppend = function (placeholderSpot2) {
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
            alert('Please Refresh To Pull Again');
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
            alert('Please Reset To Pull Again');
        };
    };
};
// 🌎 END GLOBAL SCOPE •••


// 🏡 LOCAL SCOPE START•••

// •• 🧠 LOGIC: if num returns a value under 14, search in the suite array for the suite. Use the returned suite value to find the array in 'tarotCard' object.
// Use a variable assigned to RNG and use RNG as index for random search within suite array for a card number, and return value in console log/append to read panel.

// •• on mouse click:
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
    console.log("12. tarotCard the Array: ", tarotCard);

    //end check

});

//  •• on key press (space & i)
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

//  •• on key press (up and down)
$(window).keydown(function (e) {
    e.preventDefault();
    if (e.which === 38) {

        $('.readSpace').scrollTop(-300);
    };
    if (e.which === 40) {
        $('.readSpace').scrollTop(300);
    }
    if (e.which === 82) {
        location.reload();
    };
});


// 🏡 LOCAL SCOPE END •••
