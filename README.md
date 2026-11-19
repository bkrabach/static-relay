# STATIC RELAY

**A co-op extraction shooter on a dead relay line that its own machines have taken over. One to six operators drop
in, do the job, and decide how far to push before they get out. Free. Mac and Windows.**

![Static Relay - the menu](media/00_menu.jpg)

Every line of code, every shader, every built model and every synthesised sound in this game was written by an AI
agent, directed and play-tested by one person. The scanned rocks, trees, textures and field recordings come from
public-domain libraries ([credits](CREDITS.md)).

## Download

| | |
|---|---|
| **Mac** (Apple silicon and Intel) | `StaticRelay-mac.dmg` - open it, drag the app to Applications |
| **Windows** (64-bit) | `StaticRelay-win.zip` - unzip, start `Static Relay.exe` |

Both are on the [latest release](../../releases/latest). The Mac app is signed and notarized. The Windows app is not
signed yet: SmartScreen asks once - **More info**, then **Run anyway**. After the first install the game updates
itself from the menu.

## The Line

The Karst Range Line is twelve unmanned relay stations across four hundred kilometres of wilderness. Eighteen months
ago something came down along the range in a single night. The machines that maintained the Line stopped answering
their owners and went on working. The relays still answer every call.

You are contracted to the office that bought the wreck: drop by pod, raise a relay's uplink for a few minutes, strip
what pays, and leave from the landing zone. The rates go up after dark. So does everything else.

Every uplink you raise also decodes a fragment of the last maintenance crew's log - four people, twenty-four
entries, kept in your Operator tab. Read in order, they are the story. And every upload ends with a second handshake
that nobody on your side sent.

## Three zones

| | |
|---|---|
| **KR-07 The Valley** | Conifer forest in a valley 400 m across: a relay yard, a bunker, a logging camp in its clear-cut, a meadow where the helicopter lands, the cleared lane under the pole line - and the place where the largest piece came down. |
| **KR-12 Highline** | Where the forest gives out: the last stunted firs, snowfields under a wall of limestone, seven radio dishes, a cable-tram station, a camp that was left pitched. Aurora at night. **Whiteouts** cross the cirque: eight seconds of warning, then half a minute in which you see twelve metres. The machines do not hunt by sight. You fight by map, ping and sound. |
| **KR-09 The Cut** | A limestone quarry in autumn, under gold larch and birch: three benches down to a flooded sump, a cut with a train in it, a haul road down the walls, and at the cut's mouth the crusher plant the machines have made a foundry. Its rule is **height**: the machines take the benches above you and fire down, and the train and the hoists are cover that does not stay put. You wade in the sump; a vehicle stops at the water's edge. New in round 13 - played so far by bots and a test driver. |

Each zone is 400 m across - room to drive. One more is being built: the coast.

| | |
|---|---|
| ![Highline in the morning, from the drop point](media/07_highline_morning.jpg) | ![The array at sunset](media/08_array_sunset.jpg) |
| ![Crew Seven's camp at dusk](media/09_camp_dusk.jpg) | ![Aurora over the ridge](media/10_aurora_night.jpg) |
| ![Inside a whiteout](media/11_whiteout.jpg) | ![The line log](media/12_line_log.jpg) |
| ![The Cut from the south rim at sunset](media/17_cut_rim.jpg) | ![The quarry gate in the morning](media/18_cut_gate.jpg) |
| ![Stone wagons and sawn blocks in the cut](media/19_cut_wagons.jpg) | ![A Tessel dumper left on the top bench](media/20_cut_dumper.jpg) |

## Vehicles

Five stand in each zone, one of them where you land: four-seat line UTVs in the Valley and the Cut, two-seat snowmobiles at Highline. Walk up and press Use.
The driver drives and sees the vehicle from behind; everyone else rides in first person with their weapon up.
Machines hear an engine from much further away than a footstep, shoot at whoever sits on it, and get run over by it -
the big ones do not give way. A red fuel drum in the way is run over too, and goes up behind you. A vehicle is spent, not kept: it smokes, it burns, it goes up like a fuel drum, and a
fresh one stands at its place a few minutes later.

| | |
|---|---|
| ![A line UTV on the Valley road](media/13_utv_valley.jpg) | ![A snowmobile at Highline](media/14_snowmobile_highline.jpg) |

## What you do

- **Drop in, alone or with up to five friends.** One of you hosts from the menu; the others join over the local
  network (or over a VPN such as Tailscale). No account, no server to rent.
- **Take an objective, then decide.** Defend the relay while it uploads, walk a rover to the bunker, hunt a Warden,
  carry power cells to the lift, or destroy three spires. Then, at the beacon: push on to the next tier - heavier
  machines, better rewards, the day sliding from morning toward night - or call the exfil and hold the landing zone
  to bank the run.
- **Spend what you earn in the field**: an armory, an overclock bench, an augment dispenser, a supply cache.
- **Drive between objectives, fight on foot.** A vehicle makes the zone smaller; the uplink, the escort and the
  landing zone still have to be held by people standing on the ground.
- **Thirteen machines**, each with a job and a weak point: Drudges that swarm, Coursers that flank, Lancers that hold a
  line of fire, Wasps overhead, and worse.
- **Seven weapons** you can upgrade in the field with hardware that shows on the gun, an arc charge, a stim, a pulse.
- **Side work** if you want it: a supply drop, a priority target, a rogue transmitter.
- **A dispatcher on the radio.** Switch reads you the weather, the clock and the contract at every drop and at every
  new tier. Something else is on the channel as well.

## Plays with what you have

- **Mouse and keyboard**, every key rebindable.
- **Controllers**: Xbox, PlayStation, Switch Pro, Steam Deck and generic pads. The game shows the buttons of the pad in
  your hands, every screen works from the pad, and there is gyro aiming if you like it.
- **Sets its own graphics.** It measures the frame rate and picks quality and resolution to hold 60 frames a second
  (or whatever you ask for in Settings → Video).

| | |
|---|---|
| ![The relay yard at sunset](media/02_relay_yard_sunset.jpg) | ![The crash site at dusk](media/03_forest_dusk.jpg) |
| ![Morning at the road block](media/01_roadblock_morning.jpg) | ![The bunker](media/05_bunker.jpg) |
| ![Down the sight at sunset](media/06_fight.jpg) | ![The squad at the rim of the Cut, the pit below](media/22_cut_squad_rim.jpg) |
| ![The squad in the relay yard](media/15_squad.jpg) | ![A revive under cover](media/16_squad_revive.jpg) |

## What it needs

- **Mac:** macOS on Apple silicon or Intel with Metal. Developed against an M4 Max MacBook Pro.
- **Windows:** Windows 10 or 11, 64-bit, a graphics card with Vulkan (or Direct3D 12). On integrated graphics (a
  handheld) it runs at reduced quality and resolution.
- 2.5 GB of disk (the download is 1.3 GB).

## Honest notes

This is a work in progress by a very small team. The Cut is brand new and the other two zones doubled in size not long ago: they have been played mostly by bots, and nobody has
recorded the voices yet: every line of the story is text. Known rough edges: buildings look their best from a few metres off,
some weapons and machines have had less attention than others, your squad mates were rebuilt in 0.9.0 from a real
body and captured motion and are still plain at arm's length, and balance has been tuned mostly by bots. The game needs about 4 GB of your graphics card's own memory:
if other programs hold it (local AI models and virtual machines are the usual ones), it runs very slowly - and says so. On handheld
PCs it runs at reduced quality: about 45-50 frames a second on a ROG Ally X at the settings the game picks for it. If something
breaks or looks wrong, [open an issue](../../issues) - a screenshot and what you were doing is plenty.

**Privacy.** The game talks to this repository to look for updates. It sends nothing else anywhere on its own. If
someone on your own network runs a host that collects session logs (a developer option), the game can send its session
log there; Settings → Session turns that off.

## Licences

The game is free to download and play. Its code is not open source. It is built with the
[Godot Engine](https://godotengine.org) (MIT) and ships fonts under the SIL Open Font License and CC0 sounds, textures
and models: [THIRD-PARTY-NOTICES.txt](THIRD-PARTY-NOTICES.txt), [CREDITS.md](CREDITS.md).
