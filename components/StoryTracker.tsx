'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import type { StoryChapter, Location, QuestLog } from '@/types/story';

interface StoryTrackerProps {
  initialChapters: StoryChapter[];
  initialLocations: Location[];
  initialQuests: QuestLog[];
}

export default function StoryTracker({ 
  initialChapters, 
  initialLocations, 
  initialQuests 
}: StoryTrackerProps) {
  const [chapters, setChapters] = useState(initialChapters);
  const [locations, setLocations] = useState(initialLocations);
  const [quests, setQuests] = useState(initialQuests);
  const [editingChapter, setEditingChapter] = useState<string | null>(null);

  const toggleObjective = (chapterId: string, objectiveId: string) => {
    setChapters(prev => prev.map(ch => {
      if (ch.id === chapterId) {
        return {
          ...ch,
          objectives: ch.objectives.map(obj =>
            obj.id === objectiveId ? { ...obj, completed: !obj.completed } : obj
          )
        };
      }
      return ch;
    }));
  };

  const updateChapterStatus = (chapterId: string, status: StoryChapter['status']) => {
    setChapters(prev => prev.map(ch =>
      ch.id === chapterId ? { ...ch, status } : ch
    ));
  };

  const updateChapterNotes = (chapterId: string, notes: string) => {
    setChapters(prev => prev.map(ch =>
      ch.id === chapterId ? { ...ch, notes } : ch
    ));
  };

  const updateQuestStatus = (questId: string, status: QuestLog['status']) => {
    setQuests(prev => prev.map(q =>
      q.id === questId ? { ...q, status } : q
    ));
  };

  const toggleLocation = (locationId: string) => {
    setLocations(prev => prev.map(loc =>
      loc.id === locationId ? { ...loc, discovered: !loc.discovered } : loc
    ));
  };

  const getChapterProgress = (chapter: StoryChapter) => {
    if (chapter.objectives.length === 0) return 0;
    const completed = chapter.objectives.filter(obj => obj.completed).length;
    return (completed / chapter.objectives.length) * 100;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-600';
      case 'in-progress': return 'bg-yellow-600';
      case 'active': return 'bg-blue-600';
      case 'failed': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="chapters" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-black/30">
          <TabsTrigger value="chapters">📖 Chapters</TabsTrigger>
          <TabsTrigger value="quests">⚔️ Quests</TabsTrigger>
          <TabsTrigger value="locations">🗺️ Locations</TabsTrigger>
        </TabsList>

        <TabsContent value="chapters" className="space-y-4 mt-4">
          <Card className="bg-black/40 border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Campaign Chapters</CardTitle>
              <CardDescription className="text-gray-300">
                Track your progress through the adventure
              </CardDescription>
            </CardHeader>
          </Card>

          {chapters.map(chapter => {
            const progress = getChapterProgress(chapter);
            
            return (
              <Card key={chapter.id} className="bg-black/40 border-blue-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-blue-400">
                          {chapter.number}
                        </span>
                        <div>
                          <CardTitle className="text-xl text-white">{chapter.title}</CardTitle>
                          <CardDescription className="mt-1 text-gray-300">
                            {chapter.description}
                          </CardDescription>
                        </div>
                      </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={chapter.status === 'not-started' ? 'default' : 'outline'}
                        onClick={() => updateChapterStatus(chapter.id, 'not-started')}
                      >
                        Not Started
                      </Button>
                      <Button
                        size="sm"
                        variant={chapter.status === 'in-progress' ? 'default' : 'outline'}
                        onClick={() => updateChapterStatus(chapter.id, 'in-progress')}
                        className="bg-yellow-600 hover:bg-yellow-700"
                      >
                        In Progress
                      </Button>
                      <Button
                        size="sm"
                        variant={chapter.status === 'completed' ? 'default' : 'outline'}
                        onClick={() => updateChapterStatus(chapter.id, 'completed')}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        Completed
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {chapter.objectives.length > 0 && (
                    <>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-300">Progress</span>
                          <span className="text-gray-300">{Math.round(progress)}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-300">Objectives:</p>
                        {chapter.objectives.map(objective => (
                          <div
                            key={objective.id}
                            className="flex items-center gap-3 p-2 bg-black/30 rounded cursor-pointer hover:bg-black/50"
                            onClick={() => toggleObjective(chapter.id, objective.id)}
                          >
                            <input
                              type="checkbox"
                              checked={objective.completed}
                              onChange={() => toggleObjective(chapter.id, objective.id)}
                              className="w-5 h-5 cursor-pointer"
                            />
                            <span className={objective.completed ? 'line-through text-gray-500' : 'text-white'}>
                              {objective.text}
                            </span>
                            {objective.optional && (
                              <Badge variant="outline" className="text-xs">Optional</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {chapter.keyNPCs.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Key NPCs:</p>
                      <div className="flex flex-wrap gap-2">
                        {chapter.keyNPCs.map(npc => (
                          <Badge key={npc} variant="outline" className="bg-blue-900/30">
                            {npc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {chapter.locations.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-300 mb-2">Locations:</p>
                      <div className="flex flex-wrap gap-2">
                        {chapter.locations.map(location => (
                          <Badge key={location} variant="outline" className="bg-purple-900/30">
                            🗺️ {location}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm font-semibold text-gray-300">Session Notes:</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setEditingChapter(editingChapter === chapter.id ? null : chapter.id)}
                      >
                        {editingChapter === chapter.id ? 'Done' : 'Edit'}
                      </Button>
                    </div>
                    {editingChapter === chapter.id ? (
                      <Textarea
                        value={chapter.notes}
                        onChange={(e) => updateChapterNotes(chapter.id, e.target.value)}
                        placeholder="Add your notes about this chapter..."
                        className="min-h-[100px] bg-black/30"
                      />
                    ) : (
                      <div className="p-3 bg-black/30 rounded min-h-[60px] text-sm text-gray-300">
                        {chapter.notes || 'No notes yet. Click Edit to add your notes!'}
                      </div>
                    )}
                  </div>

                  {chapter.dmNotes && (
                    <div className="p-3 bg-orange-900/20 border border-orange-500/30 rounded">
                      <p className="text-xs text-orange-400 font-semibold mb-1">💡 DM Note:</p>
                      <p className="text-sm text-gray-300">{chapter.dmNotes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>

        <TabsContent value="quests" className="space-y-4 mt-4">
          <Card className="bg-black/40 border-yellow-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-yellow-400">Quest Log</CardTitle>
              <CardDescription className="text-gray-300">
                Track active and completed quests
              </CardDescription>
            </CardHeader>
          </Card>

          {['active', 'available', 'completed', 'failed'].map(statusFilter => {
            const filteredQuests = quests.filter(q => q.status === statusFilter);
            if (filteredQuests.length === 0) return null;

            return (
              <div key={statusFilter} className="space-y-3">
                <h3 className="text-lg font-bold capitalize text-gray-300">
                  {statusFilter} Quests ({filteredQuests.length})
                </h3>
                {filteredQuests.map(quest => (
                  <Card key={quest.id} className="bg-black/40 border-gray-500/30">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-bold text-lg text-white">{quest.title}</h4>
                            <Badge className={getStatusColor(quest.status)}>
                              {quest.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-400">Given by: {quest.giver}</p>
                        </div>
                      </div>

                      <p className="text-sm text-gray-300 mb-3">{quest.description}</p>

                      {quest.rewards && (
                        <div className="mb-3 p-2 bg-yellow-900/20 border border-yellow-500/30 rounded">
                          <p className="text-xs text-yellow-400 font-semibold">💰 Reward:</p>
                          <p className="text-sm text-gray-300">{quest.rewards}</p>
                        </div>
                      )}

                      {quest.notes && (
                        <div className="mb-3 p-2 bg-blue-900/20 border border-blue-500/30 rounded">
                          <p className="text-xs text-blue-400 font-semibold">📝 Notes:</p>
                          <p className="text-sm text-gray-300">{quest.notes}</p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => updateQuestStatus(quest.id, 'active')}
                          disabled={quest.status === 'active'}
                        >
                          Active
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => updateQuestStatus(quest.id, 'completed')}
                          disabled={quest.status === 'completed'}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Complete
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => updateQuestStatus(quest.id, 'failed')}
                          disabled={quest.status === 'failed'}
                          variant="destructive"
                        >
                          Failed
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            );
          })}
        </TabsContent>

        <TabsContent value="locations" className="space-y-4 mt-4">
          <Card className="bg-black/40 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl text-green-400">Locations</CardTitle>
              <CardDescription className="text-gray-300">
                Track discovered locations and encounters
              </CardDescription>
            </CardHeader>
          </Card>

          {[1, 2, 3, 4].map(chapterNum => {
            const chapterLocations = locations.filter(loc => loc.chapter === chapterNum);
            if (chapterLocations.length === 0) return null;

            return (
              <div key={chapterNum} className="space-y-3">
                <h3 className="text-lg font-bold text-gray-300">
                  Chapter {chapterNum} Locations
                </h3>
                {chapterLocations.map(location => (
                  <Card 
                    key={location.id} 
                    className={`bg-black/40 ${location.discovered ? 'border-green-500/50' : 'border-gray-500/30'}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">
                            {location.discovered ? '✅' : '❓'}
                          </span>
                          <div>
                            <h4 className="font-bold text-lg text-white">{location.name}</h4>
                            <p className="text-sm text-gray-400">{location.description}</p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => toggleLocation(location.id)}
                          className={location.discovered ? 'bg-green-600' : 'bg-gray-600'}
                        >
                          {location.discovered ? 'Discovered' : 'Mark Discovered'}
                        </Button>
                      </div>

                      {location.discovered && (
                        <div className="space-y-2 text-sm">
                          {location.encounters && location.encounters.length > 0 && (
                            <div className="p-2 bg-red-900/20 border border-red-500/30 rounded">
                              <p className="text-xs text-red-400 font-semibold mb-1">⚔️ Encounters:</p>
                              <ul className="list-disc list-inside text-gray-300">
                                {location.encounters.map((enc, i) => (
                                  <li key={i}>{enc}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {location.treasure && location.treasure.length > 0 && (
                            <div className="p-2 bg-yellow-900/20 border border-yellow-500/30 rounded">
                              <p className="text-xs text-yellow-400 font-semibold mb-1">💎 Treasure:</p>
                              <ul className="list-disc list-inside text-gray-300">
                                {location.treasure.map((t, i) => (
                                  <li key={i}>{t}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {location.secrets && location.secrets.length > 0 && (
                            <div className="p-2 bg-purple-900/20 border border-purple-500/30 rounded">
                              <p className="text-xs text-purple-400 font-semibold mb-1">🔍 Secrets:</p>
                              <ul className="list-disc list-inside text-gray-300">
                                {location.secrets.map((s, i) => (
                                  <li key={i}>{s}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
