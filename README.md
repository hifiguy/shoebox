# ShoeBox

**Speak your expenses.**

**Outskill AI Accelerator Hackathon · AIAP C13 · Group 9**

Say one sentence about something you just bought. Get back a categorised expense row.

> **For independent small business owners** who mix business and personal spending across
> cards and cash, ShoeBox is a voice-first expense tracker so they can capture an expense —
> and the reason behind it — in the moment, instead of reconstructing it in April.

---

## About this repository

**This is the public, sanitized version of the project.** It carries the product: the
application, the product maps, the screenshots, and the media. The submission packet
itself lives in the shared drive linked below.

A separate private repository holds the full record — session transcripts, individual
idea-capture forms, the team synthesis and build plan, review logs, and internal
planning notes. Everything identifying a person has been left there deliberately. Nothing
in this repository names a participant, and it contains no email addresses or phone numbers.

---

## Links

| What | Where |
|---|---|
| **Live application** | <https://personal-budget-trac-09sk.bolt.host> |
| **Walkthrough video** | <https://www.loom.com/share/54afa0eaf3b94b93aa04a8f2c78484e4> |
| **Product video** (42s) | [Play in browser](https://github.com/hifiguy/shoebox/raw/main/resources/shoebox-product-video.mp4) · [file](resources/shoebox-product-video.mp4) |
| **Marketing media** | [`resources/`](resources/) — 15 videos and the [brand one-pager](resources/shoebox-your-money-organized.pdf) |
| **Brand stills** | [`resources/images/brand/`](resources/images/brand/) — 28 nine-by-sixteen creatives plus the logo |
| **Application screenshots** | [`screenshots/`](screenshots/) and [`resources/images/app/`](resources/images/app/) |
| **Product map — current** | [Open in Excalidraw](https://excalidraw.com/#json=0cov6sodmwVA7M-XaCvhe,qBl-Ydq1S_hht_Z8LHRXjw) · file: [`product-map/product-flow-v3.excalidraw`](product-map/product-flow-v3.excalidraw) |
| **Product map — earlier** | [`product-map/product-flow-v2.excalidraw`](product-map/product-flow-v2.excalidraw) · [`product-map/product-flow.excalidraw`](product-map/product-flow.excalidraw) |
| **Screenshots** | [`screenshots/`](screenshots/) |
| **Shared team drive** | <https://drive.google.com/drive/folders/1pcK6E13cz7yFC8DA3TgEqqTjY9kvoy-z> — submission content, read-only |

---

## Product video

[![Play the ShoeBox product video](resources/shoebox-product-video-poster.jpg)](https://github.com/hifiguy/shoebox/raw/main/resources/shoebox-product-video.mp4)

42 seconds. Click the frame above to play it in the browser, or download
[`resources/shoebox-product-video.mp4`](resources/shoebox-product-video.mp4).
GitHub does not embed players for videos committed to a repository, so this is a
click-through rather than an inline player — the [Loom walkthrough](https://www.loom.com/share/54afa0eaf3b94b93aa04a8f2c78484e4)
plays inline on its own page.

---

## What the product is

The submission build is a **Bolt-generated application backed by Supabase**. Speak an
expense, and it parses the amount, the merchant, and the category, then writes the row.
Typing exists as a correction path, not as the primary input.

| Area | State |
|---|---|
| **Voice capture** | Working. Tested live — *"I spent $30 on lunch today"* parses and the total moves. |
| **Screens** | Four tabs — Speak, Expenses, Spending, Export. |
| **Manual fallback** | "Type it instead" — payment, where, amount, category, save. |
| **Categories** | Three — Meals, Travel, Office Supplies. |
| **Payment flag** | Credit or cash. |
| **Storage** | Supabase, so the demo survives a refresh. |
| **Auth** | Email and password, with account creation. |
| **Export** | CSV — date, where, amount, payment, category. |
| **Seed data** | 14 expenses, $1,167.48, late July through 21 August. |

**Landing copy:** *"Just talk. It's logged."* · *"One tap, one sentence, done. The fastest
way for a busy owner to track every dollar."*

---

## Product decisions

- **User** — independent small business owner. The deductible angle is positioned broadly.
- **Tone** — the app observes. It never scolds, advises, predicts, or shames.
- **Voice** — primary input. Typing is for correction only; a demo with no keyboard needs insurance.
- **Categories** — three, plus a credit-or-cash flag. Capture order is credit-or-cash, where, amount, what it was for.
- **Platform** — Bolt.
- **Storage** — Supabase rather than local storage.
- **Transcription** — Web Speech API primary, Whisper or Claude as fallback.
- **Failure copy** — *"Didn't catch that. Tap to try again"* for silence, garble, or a missing amount.

**Cut for the MVP:** attendee capture · confidence scores · a separate personal flag ·
multi-category splits from one utterance.

**Won't build:** bank or card connections · receipt photos or OCR · budgets, caps, or
alerts · spending advice or forecasts · notifications · multi-currency · streaks and trophies.

---

## The differentiation claim

| Product | What it does well | Where it leaves a gap |
|---|---|---|
| **Expensify** | SmartScan OCR pulls merchant, amount, and date off a receipt photo | Free tier caps at 25 scans per month; reviewers report weeks to learn policy rules |
| **QuickBooks Solopreneur** | Bank feed auto-sorts business versus personal; GPS mileage | Still requires re-categorising transactions after the fact |
| **Keeper** | AI flags likely write-offs and texts you to confirm | Asks days after the purchase, when the reason is already forgotten |

**All three capture the transaction. None capture the reason at the moment of spend.**
Keeper proves the reason is the valuable part — it built an entire SMS loop to go get it —
but asks too late. That gap is the product.

---

## Repository map

```
src/               Next.js prototype — voice capture, deterministic keyword parser,
                   in-memory store. Predates the Bolt build and is NOT the submission.
                   Kept because the parser and the Web Speech hook are readable references.
screenshots/       Deployed-application evidence
resources/         Marketing media — product video, promo videos, the brand
                   one-pager (shoebox-your-money-organized.pdf), and the
                   feature roadmap table
  images/brand/    28 nine-by-sixteen brand creatives and the ShoeBox logo
  images/app/      Application screenshots from the deployed build
product-map/       Excalidraw product maps, current and superseded
```

## Running the prototype

```bash
bun install
bun dev
```

Opens on <http://localhost:3000>. This is the `src/` prototype, not the deployed
submission build — use the live URL above for the product.

---

*The product video carries a VEED watermark from a free-plan export.*
