# 🐉 DM Companion for Lost Mine of Phandelver

A web-based companion app designed specifically for running **Lost Mine of Phandelver** with kids (ages 9-11). Perfect for first-time DMs who want helpful tools alongside their traditional pencil-and-paper setup!

## 🎯 What This App Does

This is a **companion tool**, not a replacement for your DM screen and notes. It provides:

- **⚔️ Combat Tracker** - Quick initiative and HP management without complicated spreadsheets
- **✨ Wild Magic Generator** - Kid-friendly, fun magical effects (20 custom surges!)
- **🥚 Dragon Egg Progress** - Visual tracker for the Ranger's dragon egg warming up
- **📖 Quick Reference** - DCs, conditions, and common rules at your fingertips
- **💡 DM Tips** - Specific guidance for running D&D with kids ages 9-11

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run the Dev Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser (or on a tablet next to your DM screen!)

### Build for Production

```bash
npm run build
npm start
```

## 📱 How to Use During Sessions

### Before the Session
1. Open the app on a tablet, phone, or laptop
2. Review the **DM Tips** tab for your session focus
3. Check the **Quick Reference** for common DCs and conditions

### During Combat
1. Switch to the **Combat** tab
2. Click "+ Ranger" and "+ Sorcerer" to add the players
3. Click "+ Goblin" or "+ Other Enemy" for monsters
4. The app auto-rolls initiative and sorts the order
5. Use the +/- buttons to track HP quickly
6. Click "Clear All" when combat ends

### When Wild Magic Triggers
1. Switch to the **Wild Magic** tab
2. Click "🎲 Roll Wild Magic Surge!"
3. Read the effect dramatically to the 9-year-old
4. Watch for the 🥚 emoji - those surges warm the dragon egg!
5. The egg progress updates automatically

### Tracking the Dragon Egg
1. Use the **Dragon Egg** tab to show the kids progress
2. Warmth increases with Wild Magic surges
3. At Level 3, click "Ready to Hatch!" for the dramatic moment
4. The Ranger gets their Drake companion (Drakewarden subclass)

## 🎲 Campaign Setup

### Your Party
- **11-Year-Old:** Dragonborn Ranger (will become Drakewarden at Level 3)
- **9-Year-Old:** Tabaxi Wild Magic Sorcerer (chaos and fun!)

### The Story Hook
The Tabaxi's Wild Magic surges generate heat and energy that keeps the Ranger's dragon egg warm and active. They need to travel together - their bond is magical and practical!

### Key Rule Changes for Kids
1. **Automatic Wild Magic**: Every spell the Sorcerer casts triggers a surge (no roll needed)
2. **Kid-Friendly Surges**: All 20 effects are visual, silly, and fun (never harmful or scary)
3. **Egg Hatching**: Happens at Level 3 or after 10 significant Wild Magic surges, whichever you prefer

## 💡 First-Time DM Tips

### Session Length
Aim for **60-90 minutes**. Kids lose focus after that. End on a cliffhanger or victory!

### The Rule of Cool
If they want to try something creative ("I swing on the chandelier and kick the goblin!"), **let them roll for it**! Fun > strict rules.

### Combat Pacing
- Goblins are silly and cowardly (kids find this less scary)
- Describe attacks dramatically: "Your arrow WHOOSHES and THUNKS into the goblin!"
- Let them describe their own killing blows
- If combat is too easy or too hard, fudge the dice - your job is FUN

### Roleplay Tips
- NPCs are AMAZED by a Dragonborn and a Tabaxi - make the kids feel special
- Ask "What do you two do?" to encourage sibling teamwork
- Let them talk to each other in character

### Level Progression (Lost Mine)
- **Level 2**: After Cragmaw Hideout (goblin cave)
- **Level 3**: After Redbrand Hideout 🥚 **EGG HATCHES HERE!**
- **Level 4**: After Cragmaw Castle
- **Level 5**: Before Wave Echo Cave (final dungeon)

## 🗺️ Key NPCs in Phandalin

The app includes quick reference cards for:
- **Gundren Rockseeker** (captured dwarf, quest giver)
- **Sildar Hallwinter** (rescued knight)
- **Sister Garaele** (friendly cleric, can bless the egg!)
- **Toblen Stonehill** (innkeeper with kids to befriend)
- **Elmar Barthen** (merchant, pays for delivery)
- **Glasstaff** (main villain in Phandalin)

Check the **DM Tips** tab → scroll down to see all NPCs with voice notes and engagement tips!

## 🛠️ Tech Stack

- **Next.js 15** (React framework)
- **TypeScript** (type safety)
- **Tailwind CSS** (styling)
- **shadcn/ui** (beautiful components)

## 📝 Customization

### Adding Your Own Wild Magic Surges
Edit `/data/campaign-data.ts` and add to the `wildMagicSurges` array:

```typescript
{
  id: 21,
  effect: "Your custom effect here!",
  duration: "1 minute",
  visual: "🎨 Visual emoji",
  kidFriendly: true,
  eggInteraction: "Optional egg reaction"
}
```

### Adding More NPCs
Edit the `lmopNPCs` array in the same file.

### Adjusting DM Tips
Edit the `dmTipsForKids` array to add your own discoveries and notes.

## 🎉 Have Fun!

Remember: You're not just running a game, you're creating memories with your kids. The best DM is the one who makes everyone laugh, feel heroic, and want to play again next week.

**The Rule of Cool always wins!** 🎲✨

---

## 📚 Additional Resources

- **Lost Mine of Phandelver** (D&D 5e Starter Set)
- [D&D Beyond](https://www.dndbeyond.com/) - Official rules and character sheets
- [/r/DMAcademy](https://www.reddit.com/r/DMAcademy/) - DM advice subreddit

## 🤝 Contributing

This is a personal campaign tool, but feel free to fork it and customize for your own table!

## 📄 License

MIT - Use this however you want for your home games!
