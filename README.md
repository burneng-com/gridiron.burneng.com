# Regulus English Playbook 🏈

**用 NFL 美式足球，每天學會更多英文單字。**

A mobile-first English vocabulary learning app themed around NFL / American football. Designed for daily 5-minute study sessions with gamified progress tracking.

🌐 **Live**: [gridiron.bruneng.com](https://gridiron.bruneng.com)

---

## ⚡ Quick Start

```bash
bun install
bun dev        # http://localhost:4321
bun run build  # outputs to dist/
```

---

## 📦 Tech Stack

| Layer | Choice |
|-------|--------|
| Runtime | [Bun](https://bun.sh) |
| Framework | [Astro](https://astro.build) v5 |
| Language | TypeScript |
| Styling | CSS Custom Properties (dark mode supported) |
| Storage | localStorage (no backend, no login) |
| Hosting | Cloudflare Pages |

---

## 🎮 Learning Modes

| # | Mode | Description |
|---|------|-------------|
| 1 | **Daily Drive** 每日推進 | 5 new words daily, gain yardage, earn touchdowns |
| 2 | **Flashcard Huddle** 單字卡 | Flip cards, filter by all/weak words |
| 3 | **4th Down Quiz** 選擇題 | 4-choice quiz, touchdown every 5-streak |
| 4 | **Spelling Scrimmage** 拼字 | Type the word, progressive "Coach Hints" |
| 5 | **Red Zone Gap** 紅區填空 | Fill missing words in example sentences |

## 🏆 Features

- 🔥 Training Streak (continuous day counter)
- 🏈 Touchdown Counter
- 🏅 Trophy Case with 7 achievements
- 🌙 Dark / Light mode
- 🔍 Search + category filter
- 🌐 English / 正體中文 language switch
- 📥 Export / Import progress (JSON)
- 💾 All data in localStorage, no sign-up needed

---

## 📁 Project Structure

```
src/
├── pages/
│   └── index.astro          # Single-page app (HTML + inline script + CSS)
├── data/
│   └── words.ts             # 96 vocabulary words (76 NFL/football)
├── lib/
│   ├── storage.ts           # localStorage CRUD
│   └── i18n.ts              # EN / zh-TW translations (~130 keys)
├── types.ts                 # TypeScript interfaces
├── styles/
│   └── global.css           # (unused, styles inlined in index.astro)
└── components/              # (reserved for future)
```

---

## 🚀 Deploy to Cloudflare Pages

### Via Wrangler (manual)

```bash
bun run build
wrangler pages deploy dist
```

### Cloudflare Pages Settings

| Setting | Value |
|---------|-------|
| Project name | `regulus-english-playbook` |
| Build command | `bun run build` |
| Build output | `dist` |
| Root directory | `/` |
| Production branch | `main` |

### DNS

```
Type:  CNAME
Name:  gridiron
Target: regulus-english-playbook.pages.dev
Proxy: Enabled (orange cloud)
```

---

## 🔑 localStorage Schema

Key: `regulus_english_playbook_progress`

```json
{
  "learnedWords": ["w1", "w5"],
  "weakWords": ["w3"],
  "favoriteWords": ["w1"],
  "quizStats": { "correct": 42, "total": 60 },
  "dailyProgress": { "date": "2026-05-03", "completedWordIds": ["w1","w2","w3","w4","w5"] },
  "streak": { "lastStudyDate": "2026-05-03", "count": 3 },
  "achievements": ["rookie_learner", "first_touchdown"],
  "touchdowns": 5,
  "yardage": 120,
  "darkMode": false,
  "lang": "en"
}
```

---

## 📝 Notes

- No external APIs, no backend, no database, no login required
- No cookies, no personal data collection
- NFL-inspired theme uses generic football terms only — no official team/brand assets
- All progress saved to browser localStorage

---

Built for Regulus. 🏈
