'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { wildMagicSurges, lmopNPCs, dmTipsForKids, quickReferenceDCs, conditions } from '@/data/campaign-data';
import { storyChaptersTemplate, locationsTemplate, questsTemplate } from '@/data/story-data';
import type { CombatantTracker } from '@/types/campaign';
import StoryTracker from '@/components/StoryTracker';

export default function DMCompanion() {
  const [combatants, setCombatants] = useState<CombatantTracker[]>([]);
  const [currentSurge, setCurrentSurge] = useState<typeof wildMagicSurges[0] | null>(null);
  const [eggProgress, setEggProgress] = useState({ surges: 0, warmth: 30 });
  const [inCombat, setInCombat] = useState(false);

  const rollWildMagic = () => {
    const roll = Math.floor(Math.random() * wildMagicSurges.length);
    const surge = wildMagicSurges[roll];
    setCurrentSurge(surge);
    
    if (surge.eggInteraction) {
      setEggProgress(prev => ({
        surges: prev.surges + 1,
        warmth: Math.min(100, prev.warmth + 10)
      }));
    }
  };

  const addCombatant = (name: string, isPlayer: boolean) => {
    const newCombatant: CombatantTracker = {
      id: Date.now().toString(),
      name,
      initiative: Math.floor(Math.random() * 20) + 1,
      maxHp: isPlayer ? 20 : 7,
      currentHp: isPlayer ? 20 : 7,
      ac: isPlayer ? 15 : 12,
      conditions: [],
      isPlayer
    };
    setCombatants(prev => [...prev, newCombatant].sort((a, b) => b.initiative - a.initiative));
  };

  const updateHp = (id: string, change: number) => {
    setCombatants(prev => prev.map(c => 
      c.id === id ? { ...c, currentHp: Math.max(0, Math.min(c.maxHp, c.currentHp + change)) } : c
    ));
  };

  const clearCombat = () => {
    setCombatants([]);
    setInCombat(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 py-6">
          <h1 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400">
            🐉 DM Companion
          </h1>
          <p className="text-lg text-blue-200">Lost Mine of Phandelver • Kids Edition</p>
          <p className="text-sm text-blue-300 mt-2">Dragonborn Ranger & Tabaxi Wild Magic Sorcerer</p>
        </header>

        <Tabs defaultValue="story" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6 bg-black/30">
            <TabsTrigger value="story">📜 Story</TabsTrigger>
            <TabsTrigger value="combat">⚔️ Combat</TabsTrigger>
            <TabsTrigger value="wildmagic">✨ Wild Magic</TabsTrigger>
            <TabsTrigger value="egg">🥚 Dragon Egg</TabsTrigger>
            <TabsTrigger value="reference">📖 Reference</TabsTrigger>
            <TabsTrigger value="tips">💡 DM Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="story" className="space-y-4">
            <StoryTracker 
              initialChapters={storyChaptersTemplate}
              initialLocations={locationsTemplate}
              initialQuests={questsTemplate}
            />
          </TabsContent>

          <TabsContent value="combat" className="space-y-4">
            <Card className="bg-black/40 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-red-400">⚔️ Combat Tracker</CardTitle>
                <CardDescription className="text-gray-300">
                  Quick initiative and HP tracking
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Button 
                    onClick={() => addCombatant('Dragonborn Ranger', true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    + Ranger
                  </Button>
                  <Button 
                    onClick={() => addCombatant('Tabaxi Sorcerer', true)}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    + Sorcerer
                  </Button>
                  <Button 
                    onClick={() => addCombatant('Goblin', false)}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    + Goblin
                  </Button>
                  <Button 
                    onClick={() => addCombatant('Enemy', false)}
                    variant="outline"
                  >
                    + Other Enemy
                  </Button>
                  {combatants.length > 0 && (
                    <Button 
                      onClick={clearCombat}
                      variant="destructive"
                      className="ml-auto"
                    >
                      Clear All
                    </Button>
                  )}
                </div>

                {combatants.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <p>No combatants yet. Add players and enemies above!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {combatants.map((combatant, index) => (
                      <Card key={combatant.id} className={`${combatant.isPlayer ? 'bg-blue-900/50 border-blue-400' : 'bg-red-900/50 border-red-400'} border-2`}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <Badge className="text-lg font-bold bg-yellow-500 text-black">
                                {combatant.initiative}
                              </Badge>
                              <span className="font-bold text-lg text-white">{combatant.name}</span>
                              <Badge variant="outline">AC {combatant.ac}</Badge>
                            </div>
                            <Button
                              onClick={() => setCombatants(prev => prev.filter(c => c.id !== combatant.id))}
                              variant="ghost"
                              size="sm"
                            >
                              ✕
                            </Button>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="text-sm">HP: {combatant.currentHp}/{combatant.maxHp}</span>
                              <Progress 
                                value={(combatant.currentHp / combatant.maxHp) * 100} 
                                className="flex-1"
                              />
                            </div>
                            
                            <div className="flex gap-2">
                              <Button
                                onClick={() => updateHp(combatant.id, -1)}
                                size="sm"
                                variant="destructive"
                              >
                                -1
                              </Button>
                              <Button
                                onClick={() => updateHp(combatant.id, -5)}
                                size="sm"
                                variant="destructive"
                              >
                                -5
                              </Button>
                              <Button
                                onClick={() => updateHp(combatant.id, 1)}
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                +1
                              </Button>
                              <Button
                                onClick={() => updateHp(combatant.id, 5)}
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                +5
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wildmagic" className="space-y-4">
            <Card className="bg-black/40 border-pink-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-400">✨ Wild Magic Surge Generator</CardTitle>
                <CardDescription className="text-gray-300">
                  Kid-friendly, fun effects! Roll whenever the Sorcerer casts a spell.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={rollWildMagic}
                  className="w-full text-xl py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600"
                >
                  🎲 Roll Wild Magic Surge!
                </Button>

                {currentSurge && (
                  <Card className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 border-pink-400 border-2">
                    <CardContent className="p-6 space-y-3">
                      <div className="text-4xl text-center mb-2">{currentSurge.visual}</div>
                      <p className="text-xl font-bold text-center">{currentSurge.effect}</p>
                      <p className="text-center text-gray-300">Duration: {currentSurge.duration}</p>
                      
                      {currentSurge.eggInteraction && (
                        <div className="mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg">
                          <p className="text-yellow-300 font-semibold">🥚 Dragon Egg Reaction:</p>
                          <p className="text-yellow-100">{currentSurge.eggInteraction}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}

                <Card className="bg-black/40">
                  <CardHeader>
                    <CardTitle className="text-sm">All Possible Surges ({wildMagicSurges.length} total)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="max-h-60 overflow-y-auto space-y-2 text-sm">
                      {wildMagicSurges.map(surge => (
                        <div key={surge.id} className="border-b border-gray-700 pb-2">
                          <span className="text-gray-400">#{surge.id}:</span> {surge.effect}
                          {surge.eggInteraction && <span className="ml-2">🥚</span>}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="egg" className="space-y-4">
            <Card className="bg-black/40 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-400">🥚 Dragon Egg Tracker</CardTitle>
                <CardDescription className="text-gray-300">
                  The egg warms and glows with each Wild Magic surge!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">🥚</div>
                  <p className="text-2xl font-bold mb-2">
                    {eggProgress.warmth >= 100 ? '🎉 READY TO HATCH!' : 'Growing...'}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Warmth Level</span>
                      <span>{eggProgress.warmth}%</span>
                    </div>
                    <Progress value={eggProgress.warmth} className="h-4" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Wild Magic Surges</span>
                      <span>{eggProgress.surges} / 10 (Level 3)</span>
                    </div>
                    <Progress value={(eggProgress.surges / 10) * 100} className="h-4" />
                  </div>
                </div>

                <Card className="bg-blue-900/30 border-blue-400">
                  <CardContent className="p-4 space-y-2 text-sm">
                    <p className="font-bold text-blue-300">📜 Story Connection:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• The Tabaxi's Wild Magic keeps the egg warm</li>
                      <li>• The Ranger can feel the egg pulse after surges</li>
                      <li>• The egg hatches when the Ranger hits Level 3!</li>
                      <li>• It becomes the Drakewarden's Drake companion</li>
                      <li>• Describe it glowing, moving, and warming up</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex gap-2">
                  <Button
                    onClick={() => setEggProgress(prev => ({ ...prev, surges: prev.surges + 1, warmth: Math.min(100, prev.warmth + 10) }))}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    + Add Surge
                  </Button>
                  <Button
                    onClick={() => setEggProgress({ surges: 10, warmth: 100 })}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    Ready to Hatch!
                  </Button>
                  <Button
                    onClick={() => setEggProgress({ surges: 0, warmth: 30 })}
                    variant="outline"
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reference" className="space-y-4">
            <Card className="bg-black/40 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">📖 Quick Reference</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">Difficulty Classes (DCs)</h3>
                  <div className="space-y-2">
                    {quickReferenceDCs.map(dc => (
                      <div key={dc.dc} className="flex justify-between items-center p-2 bg-black/30 rounded">
                        <div>
                          <span className="font-bold text-yellow-400">DC {dc.dc}</span>
                          <span className="ml-2 text-gray-300">- {dc.difficulty}</span>
                        </div>
                        <span className="text-sm text-gray-400">{dc.example}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">Common Conditions</h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {conditions.map(condition => (
                      <Card key={condition.name} className="bg-black/30">
                        <CardContent className="p-3">
                          <p className="font-bold text-red-400">{condition.name}</p>
                          <p className="text-sm text-gray-300">{condition.effect}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="bg-purple-900/30 border-purple-400">
                  <CardContent className="p-4 space-y-2 text-sm">
                    <p className="font-bold text-purple-300">🎯 Advantage/Disadvantage</p>
                    <p className="text-gray-300"><strong>Advantage:</strong> Roll 2d20, take higher. Use for clever ideas!</p>
                    <p className="text-gray-300"><strong>Disadvantage:</strong> Roll 2d20, take lower. Use for bad situations.</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            <Card className="bg-black/40 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-400">💡 First-Time DM Tips</CardTitle>
                <CardDescription className="text-gray-300">
                  Running Lost Mine of Phandelver for kids (ages 9-11)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {dmTipsForKids.map((tip, index) => (
                    <Card key={index} className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-blue-400/30">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2 mb-2">
                          <Badge className={
                            tip.category === 'kids' ? 'bg-pink-600' :
                            tip.category === 'pacing' ? 'bg-blue-600' :
                            tip.category === 'combat' ? 'bg-red-600' :
                            tip.category === 'roleplay' ? 'bg-purple-600' :
                            'bg-green-600'
                          }>
                            {tip.category}
                          </Badge>
                          {tip.forAge && <Badge variant="outline">{tip.forAge}</Badge>}
                        </div>
                        <h4 className="font-bold text-lg mb-2 text-yellow-300">{tip.title}</h4>
                        <p className="text-gray-200">{tip.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-yellow-500/30">
              <CardHeader>
                <CardTitle className="text-xl text-yellow-400">📍 Key NPCs in Phandalin</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {lmopNPCs.map((npc, index) => (
                    <Card key={index} className="bg-gradient-to-r from-slate-900/50 to-slate-800/50">
                      <CardContent className="p-3 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-lg text-cyan-300">{npc.name}</h4>
                          <Badge variant="outline" className="text-xs">{npc.location}</Badge>
                        </div>
                        <p className="text-sm text-gray-400">{npc.role}</p>
                        {npc.voiceNote && (
                          <p className="text-sm text-blue-300">🎭 {npc.voiceNote}</p>
                        )}
                        {npc.questHook && (
                          <p className="text-sm text-yellow-300">⚡ {npc.questHook}</p>
                        )}
                        {npc.kidEngagementTip && (
                          <p className="text-sm text-green-300">💡 {npc.kidEngagementTip}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-8 text-center text-sm text-gray-400 pb-4">
          <p>Have fun and remember: The Rule of Cool always wins! 🎲✨</p>
        </footer>
      </div>
    </div>
  );
}
