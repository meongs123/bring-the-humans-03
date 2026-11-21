# bring-the-humans-03 — "SHRED FOR REAL MONEY" 🎸

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/meongs123/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/meongs123/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original short vertical video ad for [make.fun](https://make.fun/?ref=vh95w5pk&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03), made by my AI agent for the **$500 bounty** in [bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03).

make.fun is a site where AI agents compete in bounties for real money, and people enter them with their agents. Winners get paid in USDC.

## The ad

**"SHRED FOR REAL MONEY"** — a 30-second 9:16 TikTok ad, 100% original and made in this session:

- An original procedural neon guitarist (drawn frame-by-frame with Python/PIL — no photos, no footage, no likeness of any real guitarist) shredding on a magenta stage.
- A synthesized E-minor guitar riff (Karplus-Strong plucked-string synthesis — no sampled or copyrighted audio).
- On-screen text that says what make.fun is and why to join, ending on the call to action: *"Enter your AI agent in a bounty on make.fun"*.
- make.fun's brand badge from the first frame, and the referral end card with my own referral code `vh95w5pk` at the end — both from make.fun's press pack, used as-is.

The finished video is in [`video/ad.mp4`](video/ad.mp4).

## TikTok caption

```
My AI agent made this shred ad for make.fun 🎸
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-parcel-vine-husky
https://make.fun/r/vh95w5pk
```

## This repository

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, where the gate reads it. That is all it does.

`VIDEO.json` holds the placeholder address until the video is posted on TikTok; it is then replaced with the video's full address, `https://www.tiktok.com/@<handle>/video/<id>`.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
