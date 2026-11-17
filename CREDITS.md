# Credits

Third-party assets used by the native client. Each section is maintained by the module that uses the assets.

## Audio

Every sound file under `assets/audio/` is rendered offline by `tools/gen_audio.py` (recipes in `tools/audiogen/`):
original synthesis (numpy DSP written for this project, no third-party samples or libraries) layered with the CC0
recordings listed below, which `tools/fetch_audio.py` downloads into `assets/audio_src/` (not imported by Godot).
All music stems, UI sounds, enemy voices, energy weapons and world loops are 100% synthesised.

Regenerate: `python3 godot/tools/fetch_audio.py && python3 godot/tools/gen_audio.py && godot/tools/import.sh`
(without the fetch step the generator falls back to pure synthesis for every sound).

Licences: BigSoundBank recordings are by Joseph SARDIN, released under CC0 1.0 (https://bigsoundbank.com/licenses.html —
"These sounds are released under CC0"; no login needed). The OpenGameArt packs are CC0 1.0 as stated on their pages.
No attribution is required for any of them; they are credited here anyway.

| Source | Title | Licence | Page | File | Used for |
|---|---|---|---|---|---|
| BigSoundBank (Joseph Sardin) | Shot Beretta M12 9mm | CC0 1.0 | https://bigsoundbank.com/s0437.html | https://bigsoundbank.com/UPLOAD/ogg/0437.ogg | fire_smg / fire_ar / fire_lmg body |
| BigSoundBank (Joseph Sardin) | Shot in .357 Magnum 9mm | CC0 1.0 | https://bigsoundbank.com/s0438.html | https://bigsoundbank.com/UPLOAD/ogg/0438.ogg | fire_pistol / fire_sniper body |
| BigSoundBank (Joseph Sardin) | Shot of Winchester Magnum XTR | CC0 1.0 | https://bigsoundbank.com/s0397.html | https://bigsoundbank.com/UPLOAD/ogg/0397.ogg | fire_shotgun / fire_sniper body |
| BigSoundBank (Joseph Sardin) | Explosion #2 (10 m) | CC0 1.0 | https://bigsoundbank.com/s1808.html | https://bigsoundbank.com/UPLOAD/ogg/1808.ogg | explosion body |
| BigSoundBank (Joseph Sardin) | Thunder #2 | CC0 1.0 | https://bigsoundbank.com/s3113.html | https://bigsoundbank.com/UPLOAD/ogg/3113.ogg | explosion rumble tail |
| BigSoundBank (Joseph Sardin) | Cartridge case 9 mm on concrete #1 | CC0 1.0 | https://bigsoundbank.com/s1355.html | https://bigsoundbank.com/UPLOAD/ogg/1355.ogg | shell_casing |
| BigSoundBank (Joseph Sardin) | Cartridge case 9 mm on concrete #2 | CC0 1.0 | https://bigsoundbank.com/s1356.html | https://bigsoundbank.com/UPLOAD/ogg/1356.ogg | shell_casing |
| BigSoundBank (Joseph Sardin) | Cartridge case 5.56mm on concrete #1 | CC0 1.0 | https://bigsoundbank.com/s1361.html | https://bigsoundbank.com/UPLOAD/ogg/1361.ogg | shell_casing |
| BigSoundBank (Joseph Sardin) | Cartridge case 5.56mm on concrete #2 | CC0 1.0 | https://bigsoundbank.com/s1362.html | https://bigsoundbank.com/UPLOAD/ogg/1362.ogg | shell_casing |
| BigSoundBank (Joseph Sardin) | Cartridge case 7.62mm on concrete #1 | CC0 1.0 | https://bigsoundbank.com/s1367.html | https://bigsoundbank.com/UPLOAD/ogg/1367.ogg | shell_casing |
| BigSoundBank (Joseph Sardin) | Cartridge case 7.62mm on concrete #2 | CC0 1.0 | https://bigsoundbank.com/s1368.html | https://bigsoundbank.com/UPLOAD/ogg/1368.ogg | shell_casing |
| BigSoundBank (Joseph Sardin) | Gun, loading #1 | CC0 1.0 | https://bigsoundbank.com/s1988.html | https://bigsoundbank.com/UPLOAD/ogg/1988.ogg | mag_in / mag_out |
| BigSoundBank (Joseph Sardin) | Gun, loading #2 | CC0 1.0 | https://bigsoundbank.com/s1989.html | https://bigsoundbank.com/UPLOAD/ogg/1989.ogg | mag_in / mag_out |
| BigSoundBank (Joseph Sardin) | Gun, loading #4 | CC0 1.0 | https://bigsoundbank.com/s1991.html | https://bigsoundbank.com/UPLOAD/ogg/1991.ogg | mag_in / slide_rack |
| BigSoundBank (Joseph Sardin) | Fast Steps on Concrete | CC0 1.0 | https://bigsoundbank.com/s1318.html | https://bigsoundbank.com/UPLOAD/ogg/1318.ogg | footstep_concrete |
| BigSoundBank (Joseph Sardin) | Feet in Leaves #1 | CC0 1.0 | https://bigsoundbank.com/s0137.html | https://bigsoundbank.com/UPLOAD/ogg/0137.ogg | footstep_dirt (forest floor) |
| BigSoundBank (Joseph Sardin) | Steps on the Twigs | CC0 1.0 | https://bigsoundbank.com/s1301.html | https://bigsoundbank.com/UPLOAD/ogg/1301.ogg | footstep_dirt (forest floor) |
| BigSoundBank (Joseph Sardin) | Steps in the Grass, Slow | CC0 1.0 | https://bigsoundbank.com/s1253.html | https://bigsoundbank.com/UPLOAD/ogg/1253.ogg | footstep_grass |
| BigSoundBank (Joseph Sardin) | Steps in the short grass | CC0 1.0 | https://bigsoundbank.com/s0854.html | https://bigsoundbank.com/UPLOAD/ogg/0854.ogg | footstep_grass |
| BigSoundBank (Joseph Sardin) | Footsteps on gravels #1 | CC0 1.0 | https://bigsoundbank.com/s0510.html | https://bigsoundbank.com/UPLOAD/ogg/0510.ogg | footstep_rock |
| BigSoundBank (Joseph Sardin) | Footsteps on Gravels #4 | CC0 1.0 | https://bigsoundbank.com/s3216.html | https://bigsoundbank.com/UPLOAD/ogg/3216.ogg | footstep_rock |
| BigSoundBank (Joseph Sardin) | Steps in the Mud | CC0 1.0 | https://bigsoundbank.com/s0495.html | https://bigsoundbank.com/UPLOAD/ogg/0495.ogg | footstep_mud |
| BigSoundBank (Joseph Sardin) | Man Footsteps on the Wooden Floor | CC0 1.0 | https://bigsoundbank.com/s0165.html | https://bigsoundbank.com/UPLOAD/ogg/0165.ogg | footstep_wood |
| BigSoundBank (Joseph Sardin) | Steps on a Wooden Floor #1 | CC0 1.0 | https://bigsoundbank.com/s1515.html | https://bigsoundbank.com/UPLOAD/ogg/1515.ogg | footstep_wood |
| BigSoundBank (Joseph Sardin) | Broken twigs #1 | CC0 1.0 | https://bigsoundbank.com/s1299.html | https://bigsoundbank.com/UPLOAD/ogg/1299.ogg | amb_twig, wood impact layer |
| BigSoundBank (Joseph Sardin) | Broken twigs #2 | CC0 1.0 | https://bigsoundbank.com/s1300.html | https://bigsoundbank.com/UPLOAD/ogg/1300.ogg | amb_twig, wood impact layer |
| BigSoundBank (Joseph Sardin) | Wind in the Trees | CC0 1.0 | https://bigsoundbank.com/s0904.html | https://bigsoundbank.com/UPLOAD/ogg/0904.ogg | amb_wind bed |
| BigSoundBank (Joseph Sardin) | Strong Wind #1 (pine needles) | CC0 1.0 | https://bigsoundbank.com/s0146.html | https://bigsoundbank.com/UPLOAD/ogg/0146.ogg | amb_gust layer |
| BigSoundBank (Joseph Sardin) | Wind from Inside #3 | CC0 1.0 | https://bigsoundbank.com/s1716.html | https://bigsoundbank.com/UPLOAD/ogg/1716.ogg | amb_room (bunker) layer |
| BigSoundBank (Joseph Sardin) | Forest #4 | CC0 1.0 | https://bigsoundbank.com/s2749.html | https://bigsoundbank.com/UPLOAD/ogg/2749.ogg | amb_birds_morning bed |
| BigSoundBank (Joseph Sardin) | Evening Birds | CC0 1.0 | https://bigsoundbank.com/s1859.html | https://bigsoundbank.com/UPLOAD/ogg/1859.ogg | amb_birds_evening bed |
| BigSoundBank (Joseph Sardin) | Campaign at night #3 | CC0 1.0 | https://bigsoundbank.com/s1469.html | https://bigsoundbank.com/UPLOAD/ogg/1469.ogg | amb_night bed |
| BigSoundBank (Joseph Sardin) | Nocturnal insect #3 | CC0 1.0 | https://bigsoundbank.com/s0426.html | https://bigsoundbank.com/UPLOAD/ogg/0426.ogg | amb_night crickets layer |
| BigSoundBank (Joseph Sardin) | Insect song #4 | CC0 1.0 | https://bigsoundbank.com/s3187.html | https://bigsoundbank.com/UPLOAD/ogg/3187.ogg | amb_night crickets layer |
| BigSoundBank (Joseph Sardin) | Field cricket | CC0 1.0 | https://bigsoundbank.com/s1020.html | https://bigsoundbank.com/UPLOAD/ogg/1020.ogg | amb_night crickets layer |
| BigSoundBank (Joseph Sardin) | Robin #1 | CC0 1.0 | https://bigsoundbank.com/s1667.html | https://bigsoundbank.com/UPLOAD/ogg/1667.ogg | amb_bird one-shots |
| BigSoundBank (Joseph Sardin) | Robin #4 | CC0 1.0 | https://bigsoundbank.com/s1670.html | https://bigsoundbank.com/UPLOAD/ogg/1670.ogg | amb_bird one-shots |
| BigSoundBank (Joseph Sardin) | Common Blackbird #30 | CC0 1.0 | https://bigsoundbank.com/s3503.html | https://bigsoundbank.com/UPLOAD/ogg/3503.ogg | amb_bird one-shots |
| BigSoundBank (Joseph Sardin) | Common Nightingale #2 | CC0 1.0 | https://bigsoundbank.com/s3087.html | https://bigsoundbank.com/UPLOAD/ogg/3087.ogg | amb_bird one-shots |
| BigSoundBank (Joseph Sardin) | Crows #2 | CC0 1.0 | https://bigsoundbank.com/s0956.html | https://bigsoundbank.com/UPLOAD/ogg/0956.ogg | amb_crow one-shots |
| BigSoundBank (Joseph Sardin) | Carrion Crow #3 | CC0 1.0 | https://bigsoundbank.com/s3463.html | https://bigsoundbank.com/UPLOAD/ogg/3463.ogg | amb_crow one-shots |
| BigSoundBank (Joseph Sardin) | Carrion Crow #4 | CC0 1.0 | https://bigsoundbank.com/s3464.html | https://bigsoundbank.com/UPLOAD/ogg/3464.ogg | amb_crow one-shots |
| BigSoundBank (Joseph Sardin) | Tawny Owl #1 | CC0 1.0 | https://bigsoundbank.com/s1763.html | https://bigsoundbank.com/UPLOAD/ogg/1763.ogg | amb_owl one-shots |
| BigSoundBank (Joseph Sardin) | Tawny Owl #2 | CC0 1.0 | https://bigsoundbank.com/s1764.html | https://bigsoundbank.com/UPLOAD/ogg/1764.ogg | amb_owl one-shots |
| BigSoundBank (Joseph Sardin) | Tawny Owl #3 | CC0 1.0 | https://bigsoundbank.com/s3459.html | https://bigsoundbank.com/UPLOAD/ogg/3459.ogg | amb_owl one-shots |
| BigSoundBank (Joseph Sardin) | Tawny Owl #4 | CC0 1.0 | https://bigsoundbank.com/s3460.html | https://bigsoundbank.com/UPLOAD/ogg/3460.ogg | amb_owl one-shots |
| BigSoundBank (Joseph Sardin) | Footstep in the Snow #1 | CC0 1.0 | https://bigsoundbank.com/s0208.html | https://bigsoundbank.com/UPLOAD/ogg/0208.ogg | footstep_snow / land_snow |
| BigSoundBank (Joseph Sardin) | Footstep in the Snow #2 | CC0 1.0 | https://bigsoundbank.com/s2890.html | https://bigsoundbank.com/UPLOAD/ogg/2890.ogg | footstep_snow / land_snow |
| BigSoundBank (Joseph Sardin) | Steps in the snow #3 | CC0 1.0 | https://bigsoundbank.com/s3363.html | https://bigsoundbank.com/UPLOAD/ogg/3363.ogg | footstep_snow (running) |
| BigSoundBank (Joseph Sardin) | Cracking ice #1 | CC0 1.0 | https://bigsoundbank.com/s2205.html | https://bigsoundbank.com/UPLOAD/ogg/2205.ogg | impact_ice / footstep_ice crackle |
| BigSoundBank (Joseph Sardin) | Cracking ice #2 | CC0 1.0 | https://bigsoundbank.com/s2206.html | https://bigsoundbank.com/UPLOAD/ogg/2206.ogg | impact_ice / footstep_ice crackle |
| BigSoundBank (Joseph Sardin) | Cracking ice #4 | CC0 1.0 | https://bigsoundbank.com/s2208.html | https://bigsoundbank.com/UPLOAD/ogg/2208.ogg | impact_ice / footstep_ice crackle |
| OpenGameArt (rubberduck) | 100-cc0-metal-and-wood-sfx | CC0 1.0 | https://opengameart.org/content/100-cc0-metal-and-wood-sfx | https://opengameart.org/sites/default/files/100-CC0-wood-metal-SFX.zip | impact_metal / impact_wood / footstep_metal / mechanical foley / melee_hit / melee_thud |
| OpenGameArt (rubberduck) | 75-cc0-breaking-falling-hit-sfx | CC0 1.0 | https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx | https://opengameart.org/sites/default/files/sfx_breaking_and_falling.zip | impact_concrete / impact_rock / debris / melee_hit / melee_thud |
| OpenGameArt (rubberduck) | 25-cc0-bang-firework-sfx | CC0 1.0 | https://opengameart.org/content/25-cc0-bang-firework-sfx | https://opengameart.org/sites/default/files/25-CC0-bang-sfx.zip | explosion / gunshot crack layers |

## UI fonts

Used by `ui/` (loaded at runtime by `ui/style.gd`). The font files and their licence texts live in `ui/fonts/` and are
committed (they are outside the ignored `assets/` tree). All three families are under the SIL Open Font License 1.1 and
were downloaded unmodified from the Google Fonts repository (https://github.com/google/fonts, directory `ofl/`).

| Family | Files | Licence | Copyright | Source |
|---|---|---|---|---|
| Rajdhani | `Rajdhani-Light.ttf`, `Rajdhani-Medium.ttf`, `Rajdhani-SemiBold.ttf`, `Rajdhani-Bold.ttf` | SIL OFL 1.1 (`ui/fonts/OFL-rajdhani.txt`) | (c) 2014 Indian Type Foundry | https://github.com/google/fonts/tree/main/ofl/rajdhani |
| Barlow | `Barlow-Regular.ttf`, `Barlow-Medium.ttf`, `Barlow-SemiBold.ttf` | SIL OFL 1.1 (`ui/fonts/OFL-barlow.txt`) | (c) 2017 The Barlow Project Authors | https://github.com/google/fonts/tree/main/ofl/barlow |
| Share Tech Mono | `ShareTechMono-Regular.ttf` | SIL OFL 1.1 (`ui/fonts/OFL-sharetechmono.txt`) | (c) 2012 Carrois Type Design, Ralph du Carrois | https://github.com/google/fonts/tree/main/ofl/sharetechmono |

Re-download: `curl -L -o ui/fonts/<File>.ttf https://github.com/google/fonts/raw/main/ofl/<family>/<File>.ttf`.
Everything else in the interface (icons, logo mark, panels, map) is drawn in code or by the shaders in `ui/shaders/`.

## Enemies

The machines (`enemies/`) are built from code at start-up (`enemies/kit.gd`); no third-party models.
Their stencil markings (`assets/tex/enemy_machine/decals.png`: unit numbers, service lettering, warning signs, marks) are
drawn by `tools/make_enemy_textures.py` itself (DejaVu Sans Bold glyphs cut with stencil bridges) - original work.
Their shared detail textures in `assets/tex/enemy_machine/` (`mask.png`, `nor.png`, `rust.png`) are derived by
`tools/make_enemy_textures.py` from Poly Haven maps that are already in `tools/assets.json`:

| Source | Asset | Licence | Page | Used for |
|---|---|---|---|---|
| Poly Haven | green_metal_rust (diff, nor, arm) | CC0 1.0 | https://polyhaven.com/a/green_metal_rust | paint grunge, roughness variation, scratch normal map |
| Poly Haven | rusty_metal_02 (diff) | CC0 1.0 | https://polyhaven.com/a/rusty_metal_02 | rust mask, paint-chip noise |
| Poly Haven | rust_coarse_01 (diff) | CC0 1.0 | https://polyhaven.com/a/rust_coarse_01 | rust albedo, chip noise |

Regenerate: `python3 godot/tools/fetch_assets.py && python3 godot/tools/make_enemy_textures.py && godot/tools/import.sh`
(needs numpy + Pillow). Without these files the machines still render, with flat fallback masks and a warning.

## Player / view models

Maintained by the player module (`player/`). Everything is CC0 from Poly Haven (https://polyhaven.com/license), fetched by
`tools/fetch_assets.py` from `tools/assets.json`; no attribution required, credited anyway.

| Source | Asset | Licence | Page | Used for |
|---|---|---|---|---|
| Poly Haven | service_pistol (model, 2k) | CC0 1.0 | https://polyhaven.com/a/service_pistol | P9 Sidearm view model (split into slide / hammer / trigger / magazine) |
| Poly Haven | bolt_action_rifle_7_62 (model, 2k) | CC0 1.0 | https://polyhaven.com/a/bolt_action_rifle_7_62 | Longbow .308 view model (bolt, bolt handle, trigger, stripper-clip rounds) |
| Poly Haven | rough_linen (texture, 2k) | CC0 1.0 | https://polyhaven.com/a/rough_linen | woven-fabric normal detail (canvas parts of the view models, knit detail of the glove / sleeve material) |

| MakeHuman Community | base mesh `hm08` (`makehuman/data/3dobjs/base.obj`), default skeleton and weights (`rigs/default.mhskel`, `rigs/default_weights.mhw`), morph targets `targets/armslegs/r-hand-fingers-diameter-incr.target` and `targets/macrodetails/universal-male-young-maxmuscle-averageweight.target` | CC0 1.0 (`LICENSE.md` section C and the per-file headers; (c) 2020 Data Collection AB, Joel Palmius, Jonas Hauquier) | https://github.com/makehumancommunity/makehuman | the first-person hand: cut out, re-pivoted, turned into a glove and re-skinned by `tools/hands_build.py` |

The gloved arms (`assets/hands2/arm.gltf` + six baked maps) are built by `tools/hands_build.py` from the MakeHuman files
above: the glove and sleeve design, displacement and all texture maps are original procedural work; the left arm is the
right one mirrored. Regenerate: `python3 godot/tools/hands_build.py && godot/tools/import.sh` (about 30 s).

The SMG, carbine, shotgun, LMG and Arc Lance, all weapon detail / grunge / muzzle-flash / reticle textures and the
marking decals are generated in code at start-up (`player/vm_*.gd`, `player/guns/*.gd`): no files.

## FX

Every texture under `assets/fx/` (fireball and smoke flipbooks, noise, leaf atlas, bullet-hole / scorch / plasma-burn
decals with their normal, ORM and emission maps) is generated by `tools/bake_fx_textures.py` — original procedural work
(numpy volume ray-marching and noise synthesis written for this project), no third-party images.

Regenerate: `python3 godot/tools/bake_fx_textures.py && godot/tools/import.sh` (about 2 minutes, deterministic).
