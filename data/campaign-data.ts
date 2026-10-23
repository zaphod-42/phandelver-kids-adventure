export const wildMagicSurges: WildMagicSurge[] = [
  {
    id: 1,
    effect: "The dragon egg glows brightly and pulses with warmth!",
    duration: "1 minute",
    visual: "🥚✨ Bright golden light",
    kidFriendly: true,
    eggInteraction: "The egg grows noticeably warmer and you hear a faint tapping from inside."
  },
  {
    id: 2,
    effect: "Sparkles burst from your hands in rainbow colors!",
    duration: "Instant",
    visual: "🌈✨ Rainbow sparkles everywhere",
    kidFriendly: true,
    eggInteraction: "The sparkles swirl around the egg, and it rocks gently in the backpack."
  },
  {
    id: 3,
    effect: "You grow a fluffy tail... wait, you already have one! It gets EXTRA fluffy!",
    duration: "1 hour",
    visual: "😸💫 Super fluffy tail",
    kidFriendly: true
  },
  {
    id: 4,
    effect: "You accidentally cast Grease under your own feet and slip!",
    duration: "1 minute",
    visual: "🧈 Slippery!",
    kidFriendly: true,
    eggInteraction: "The egg jiggles and seems to... laugh?"
  },
  {
    id: 5,
    effect: "Butterflies appear and flutter around everyone!",
    duration: "1 minute",
    visual: "🦋🦋🦋 Beautiful butterflies",
    kidFriendly: true
  },
  {
    id: 6,
    effect: "Your fur changes to a random bright color!",
    duration: "1 day",
    visual: "🎨 Bright pink, blue, or purple fur!",
    kidFriendly: true
  },
  {
    id: 7,
    effect: "You sneeze and tiny harmless fireballs shoot out!",
    duration: "Instant",
    visual: "🔥😸 Achoo! *poof poof*",
    kidFriendly: true,
    eggInteraction: "The egg absorbs the warmth and glows softly for a moment."
  },
  {
    id: 8,
    effect: "Musical notes float in the air and play a funny tune!",
    duration: "1 minute",
    visual: "🎵🎶 Silly circus music",
    kidFriendly: true
  },
  {
    id: 9,
    effect: "You swap places with the Ranger! *Poof!*",
    duration: "Instant",
    visual: "💨✨ Teleport swap!",
    kidFriendly: true,
    eggInteraction: "The egg stays with the Ranger and feels extra warm."
  },
  {
    id: 10,
    effect: "You levitate 3 feet off the ground for a bit!",
    duration: "1 minute",
    visual: "🎈 Floating!",
    kidFriendly: true
  },
  {
    id: 11,
    effect: "Your whiskers grow super long and curl at the ends!",
    duration: "1 hour",
    visual: "😸 Magnificent whiskers!",
    kidFriendly: true
  },
  {
    id: 12,
    effect: "Flower petals swirl around you in a tornado!",
    duration: "1 round",
    visual: "🌸🌺 Flower tornado!",
    kidFriendly: true
  },
  {
    id: 13,
    effect: "The dragon egg shoots out a tiny puff of smoke!",
    duration: "Instant",
    visual: "🥚💨 Baby dragon sneeze!",
    kidFriendly: true,
    eggInteraction: "A small crack appears on the egg's surface! It's getting closer to hatching!"
  },
  {
    id: 14,
    effect: "You hiccup and bubble-like shields appear around both of you!",
    duration: "1 minute, +1 AC",
    visual: "🫧✨ Bubble shields!",
    kidFriendly: true
  },
  {
    id: 15,
    effect: "Your eyes glow like a cat's in the dark - you can see perfectly!",
    duration: "10 minutes",
    visual: "👀✨ Glowing cat eyes!",
    kidFriendly: true
  },
  {
    id: 16,
    effect: "Tiny illusory fish swim through the air around you!",
    duration: "1 minute",
    visual: "🐟🐠 Flying fish!",
    kidFriendly: true
  },
  {
    id: 17,
    effect: "Your spell makes silly sound effects: BOING! WHOOSH! POW!",
    duration: "Next spell",
    visual: "💥 Comic book sounds!",
    kidFriendly: true
  },
  {
    id: 18,
    effect: "Everyone nearby smells fresh cookies!",
    duration: "5 minutes",
    visual: "🍪 Mmm, cookies!",
    kidFriendly: true,
    eggInteraction: "The egg warms up and smells faintly of cinnamon."
  },
  {
    id: 19,
    effect: "You purr REALLY loudly - everyone can hear it!",
    duration: "1 minute",
    visual: "😸 *PURRRRRR*",
    kidFriendly: true
  },
  {
    id: 20,
    effect: "The egg glows so bright that you and the Ranger both feel braver! (+1 to next roll)",
    duration: "Next roll",
    visual: "🥚⭐ Brilliant golden light!",
    kidFriendly: true,
    eggInteraction: "The egg is almost ready to hatch! You can feel movement inside!"
  }
];

export const lmopNPCs: NPCQuick[] = [
  {
    name: "Gundren Rockseeker",
    role: "Dwarf patron, captured by goblins",
    location: "Captured → Cragmaw Castle",
    voiceNote: "Gruff but kind dwarf accent, excited about his discovery",
    questHook: "The whole adventure starts with escorting his supplies!",
    kidEngagementTip: "Kids love rescue missions - make Gundren grateful and give small rewards"
  },
  {
    name: "Sildar Hallwinter",
    role: "Human fighter, Lords' Alliance",
    location: "Cragmaw Hideout → Phandalin",
    voiceNote: "Noble knight, honorable and brave",
    questHook: "Looking for Iarno Albrek (actually the Redbrands' leader)",
    kidEngagementTip: "He's impressed by the kids' bravery - give encouragement and praise"
  },
  {
    name: "Sister Garaele",
    role: "Elf cleric at Shrine of Luck",
    location: "Phandalin - Shrine of Luck",
    voiceNote: "Gentle, kind, mysterious",
    questHook: "Wants party to find Agatha the banshee",
    kidEngagementTip: "Can heal the party and bless the dragon egg!"
  },
  {
    name: "Elmar Barthen",
    role: "Human merchant, runs trading post",
    location: "Phandalin - Barthen's Provisions",
    voiceNote: "Friendly shopkeeper, grateful for supply delivery",
    questHook: "Pays for the supply delivery (10gp each)",
    kidEngagementTip: "Let kids browse cool adventuring gear"
  },
  {
    name: "Toblen Stonehill",
    role: "Innkeeper at Stonehill Inn",
    location: "Phandalin - Stonehill Inn",
    voiceNote: "Warm, welcoming, good source of rumors",
    questHook: "Knows about Redbrand troubles, various local quests",
    kidEngagementTip: "His kids can befriend the party! Give them a free room."
  },
  {
    name: "Halia Thornton",
    role: "Miner's Exchange leader, secret Zhentarim",
    location: "Phandalin - Miner's Exchange",
    voiceNote: "Professional, businesslike, secretly scheming",
    questHook: "Wants party to deal with Redbrand leader (for her own gain)",
    kidEngagementTip: "Keep the Zhentarim secret simple or skip it for kids"
  },
  {
    name: "Glasstaff (Iarno Albrek)",
    role: "Wizard, Redbrand leader",
    location: "Redbrand Hideout under Tresendar Manor",
    voiceNote: "Snooty, thinks he's better than everyone",
    questHook: "Main villain in Phandalin",
    kidEngagementTip: "Describe his glass staff glowing - kids love magic items!"
  }
];

export const dmTipsForKids: DMTip[] = [
  {
    category: 'kids',
    title: 'Keep Combat Visual & Exciting',
    forAge: '9-11',
    content: 'Use miniatures or tokens. Describe attacks dramatically: "Your arrow WHOOSHES through the air and THUNKS into the goblin!" Let them describe their own attacks too.'
  },
  {
    category: 'kids',
    title: 'The Rule of Cool',
    forAge: '9-11',
    content: 'If they want to try something creative and fun, let them! "I want to swing on the chandelier and kick the goblin!" → "Roll Athletics!" Success is more fun than strict rules.'
  },
  {
    category: 'pacing',
    title: 'Session Length: 60-90 Minutes',
    forAge: '9-11',
    content: 'Kids focus best for 60-90 minutes. End on a cliffhanger or victory. You can always continue next time!'
  },
  {
    category: 'pacing',
    title: 'One Big Thing Per Session',
    forAge: 'All',
    content: 'Plan one main event: a combat, a puzzle, or a big roleplay moment. Everything else is bonus. This keeps sessions focused and satisfying.'
  },
  {
    category: 'combat',
    title: 'Make Enemies Fun, Not Scary',
    forAge: '9-11',
    content: 'Goblins are cowardly and silly. They trip, argue with each other, and run away. The dragon egg can glow when enemies are near!'
  },
  {
    category: 'combat',
    title: 'Fudge Dice When Needed',
    forAge: 'All',
    content: "If a fight is going badly and isn't fun, the next enemy attack misses. If it's too easy, enemies get smarter. Your job is FUN, not TPK."
  },
  {
    category: 'roleplay',
    title: 'NPCs React to Their Characters',
    forAge: 'All',
    content: 'Townspeople are AMAZED by a Dragonborn and a Tabaxi! Kids love feeling special. "Wow, I\'ve never seen a Dragonborn before!" or "What soft fur!"'
  },
  {
    category: 'roleplay',
    title: 'Let Them Talk to Each Other',
    forAge: 'All',
    content: 'Ask "What do you two do?" or "How does your character feel about this?" Let them roleplay together. Sibling teamwork is magical!'
  },
  {
    category: 'rules',
    title: 'Advantage/Disadvantage > Modifiers',
    forAge: 'All',
    content: 'Skip complicated math. Creative idea? Advantage! Bad situation? Disadvantage! This keeps the game moving.'
  },
  {
    category: 'rules',
    title: 'Level Up After Big Victories',
    forAge: 'All',
    content: 'Lost Mine suggests: Level 2 after Cragmaw Hideout, Level 3 after Redbrand Hideout, Level 4 after Cragmaw Castle, Level 5 before Wave Echo Cave.'
  },
  {
    category: 'kids',
    title: 'Dragon Egg as Story Glue',
    forAge: 'All',
    content: 'The egg reacts to danger (glows), Wild Magic (warms up), and victories (pulses happily). This connects both characters\' stories constantly!'
  },
  {
    category: 'kids',
    title: 'Wild Magic = Fun, Not Punishment',
    forAge: 'All',
    content: 'Every spell triggers Wild Magic! Keep effects silly and visual. The 9-year-old will LOVE the chaos. Use the kid-friendly table in this app!'
  },
  {
    category: 'pacing',
    title: 'Start In Media Res',
    forAge: 'All',
    content: 'Lost Mine starts with a goblin ambush on the road - perfect! Jump right into action. Backstories come up naturally during travel and rest.'
  },
  {
    category: 'combat',
    title: 'Describe the Kill Shot',
    forAge: 'All',
    content: 'When they defeat an enemy, let THEM describe the final blow. "How do you finish off the goblin?" This makes them feel heroic!'
  },
  {
    category: 'kids',
    title: 'Treasure = Motivation',
    forAge: '9-11',
    content: 'Kids love loot! Gold, magic items, cool weapons. Let them find things slightly earlier than the book suggests. A +1 weapon at level 2 is fine!'
  },
  {
    category: 'roleplay',
    title: 'Fail Forward',
    forAge: 'All',
    content: 'Failed a check? Something still happens, just with a complication. Failed stealth? You get in, but a guard is coming! Failure shouldn\'t stop the story.'
  }
];

export const quickReferenceDCs = [
  { dc: 5, difficulty: 'Very Easy', example: 'Climb a rope with knots' },
  { dc: 10, difficulty: 'Easy', example: 'Hear a guard behind a door' },
  { dc: 15, difficulty: 'Medium', example: 'Pick a simple lock' },
  { dc: 20, difficulty: 'Hard', example: 'Climb a slippery wall' },
  { dc: 25, difficulty: 'Very Hard', example: 'Swim in stormy water' },
  { dc: 30, difficulty: 'Nearly Impossible', example: 'Convince a dragon to leave' }
];

export const conditions = [
  {
    name: 'Blinded',
    effect: 'Can\'t see, auto-fail sight checks, attacks have disadvantage, attacks against have advantage'
  },
  {
    name: 'Charmed',
    effect: 'Can\'t attack charmer, charmer has advantage on social checks'
  },
  {
    name: 'Frightened',
    effect: 'Disadvantage on checks while source is in sight, can\'t move closer to source'
  },
  {
    name: 'Grappled',
    effect: 'Speed = 0, can\'t benefit from speed bonuses'
  },
  {
    name: 'Poisoned',
    effect: 'Disadvantage on attack rolls and ability checks'
  },
  {
    name: 'Prone',
    effect: 'Disadvantage on attacks, attacks within 5ft have advantage, ranged attacks have disadvantage'
  },
  {
    name: 'Restrained',
    effect: 'Speed = 0, attacks have disadvantage, attacks against have advantage, Dex saves have disadvantage'
  },
  {
    name: 'Stunned',
    effect: 'Incapacitated, can\'t move, can speak only falteringly, auto-fail Str/Dex saves, attacks against have advantage'
  },
  {
    name: 'Unconscious',
    effect: 'Incapacitated, can\'t move/speak, unaware of surroundings, drops held items, falls prone, auto-fail Str/Dex saves, attacks against have advantage, hits within 5ft are crits'
  }
];
