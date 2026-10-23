export interface CombatantTracker {
  id: string;
  name: string;
  initiative: number;
  maxHp: number;
  currentHp: number;
  ac: number;
  conditions: string[];
  isPlayer: boolean;
  notes?: string;
}

export interface WildMagicSurge {
  id: number;
  effect: string;
  duration: string;
  visual: string;
  kidFriendly: boolean;
  eggInteraction?: string;
}

export interface DragonEggProgress {
  currentWarmth: number;
  surgesTriggered: number;
  surgesNeeded: number;
  daysUntilHatch: number;
  recentEvents: string[];
}

export interface DMTip {
  category: 'kids' | 'pacing' | 'combat' | 'roleplay' | 'rules';
  title: string;
  content: string;
  forAge?: string;
}

export interface QuickReference {
  category: string;
  items: {
    name: string;
    description: string;
    mechanics?: string;
  }[];
}

export interface SessionNote {
  id: string;
  timestamp: string;
  type: 'combat' | 'roleplay' | 'discovery' | 'milestone';
  content: string;
}

export interface NPCQuick {
  name: string;
  role: string;
  location: string;
  voiceNote?: string;
  questHook?: string;
  kidEngagementTip?: string;
}
