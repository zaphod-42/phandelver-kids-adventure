export interface StoryChapter {
  id: string;
  number: number;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed';
  description: string;
  locations: string[];
  keyNPCs: string[];
  objectives: StoryObjective[];
  notes: string;
  dmNotes?: string;
}

export interface StoryObjective {
  id: string;
  text: string;
  completed: boolean;
  optional: boolean;
}

export interface Location {
  id: string;
  name: string;
  chapter: number;
  description: string;
  discovered: boolean;
  encounters?: string[];
  treasure?: string[];
  secrets?: string[];
  mapNotes?: string;
}

export interface QuestLog {
  id: string;
  title: string;
  giver: string;
  description: string;
  status: 'active' | 'completed' | 'failed' | 'available';
  rewards?: string;
  notes?: string;
}
