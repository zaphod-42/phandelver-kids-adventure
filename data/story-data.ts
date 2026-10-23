import type { StoryChapter, Location, QuestLog } from '@/types/story';

// Template structure for Lost Mine of Phandelver
// Fill in details from your adventure book!

export const storyChaptersTemplate: StoryChapter[] = [
  {
    id: 'ch1',
    number: 1,
    title: 'Goblin Arrows',
    status: 'not-started',
    description: 'Add your summary from the book here',
    locations: ['Triboar Trail', 'Cragmaw Hideout'],
    keyNPCs: ['Sildar Hallwinter', 'Klarg', 'Yeemik'],
    objectives: [
      { id: 'obj1-1', text: 'Escort supplies to Phandalin', completed: false, optional: false },
      { id: 'obj1-2', text: 'Investigate the ambush', completed: false, optional: false },
      { id: 'obj1-3', text: 'Rescue Sildar', completed: false, optional: false },
    ],
    notes: '',
    dmNotes: 'Add your DM prep notes here'
  },
  {
    id: 'ch2',
    number: 2,
    title: 'Phandalin',
    status: 'not-started',
    description: 'Add your summary from the book here',
    locations: ['Phandalin', 'Redbrand Hideout', 'Tresendar Manor'],
    keyNPCs: ['Toblen Stonehill', 'Sister Garaele', 'Halia Thornton', 'Glasstaff'],
    objectives: [
      { id: 'obj2-1', text: 'Explore Phandalin', completed: false, optional: false },
      { id: 'obj2-2', text: 'Deal with the Redbrands', completed: false, optional: false },
      { id: 'obj2-3', text: 'Side quests available', completed: false, optional: true },
    ],
    notes: '',
    dmNotes: 'Add your DM prep notes here'
  },
  {
    id: 'ch3',
    number: 3,
    title: 'The Spider\'s Web',
    status: 'not-started',
    description: 'Add your summary from the book here',
    locations: ['Various locations around Phandalin'],
    keyNPCs: [],
    objectives: [],
    notes: '',
    dmNotes: 'Add your DM prep notes here'
  },
  {
    id: 'ch4',
    number: 4,
    title: 'Wave Echo Cave',
    status: 'not-started',
    description: 'Add your summary from the book here',
    locations: ['Wave Echo Cave'],
    keyNPCs: [],
    objectives: [],
    notes: '',
    dmNotes: 'Add your DM prep notes here'
  }
];

export const locationsTemplate: Location[] = [
  {
    id: 'loc1',
    name: 'Cragmaw Hideout',
    chapter: 1,
    description: 'Add description from your book',
    discovered: false,
    encounters: ['Add encounter notes here'],
    treasure: ['Add treasure notes here'],
    secrets: ['Add secrets here'],
    mapNotes: ''
  },
  {
    id: 'loc2',
    name: 'Phandalin',
    chapter: 2,
    description: 'Add description from your book',
    discovered: false,
    encounters: [],
    treasure: [],
    secrets: [],
    mapNotes: ''
  },
  {
    id: 'loc3',
    name: 'Redbrand Hideout',
    chapter: 2,
    description: 'Add description from your book',
    discovered: false,
    encounters: ['Add encounter notes here'],
    treasure: ['Add treasure notes here'],
    secrets: ['Add secrets here'],
    mapNotes: ''
  }
];

export const questsTemplate: QuestLog[] = [
  {
    id: 'main',
    title: 'Find Gundren Rockseeker',
    giver: 'Sildar Hallwinter',
    description: 'Add quest details from your book',
    status: 'active',
    rewards: 'Add rewards here',
    notes: ''
  },
  {
    id: 'side1',
    title: 'The Redbrand Menace',
    giver: 'Townspeople',
    description: 'Add quest details from your book',
    status: 'available',
    rewards: 'Add rewards here',
    notes: ''
  }
];
