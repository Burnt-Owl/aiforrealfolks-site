# aiforrealfolks-site

The companion site for the **AI for Real Folks** YouTube channel.

🌐 **Channel:** https://youtube.com/@AiForRealFolks
🤖 **Tagline:** Honest reviews of AI tools that actually help you.

## What this site is

A clean, fast hub that complements the YouTube channel. Visitors hit the front door and self-segment into one of two paths:

- **`/classroom/`** — for teachers, with verified educator programs (ChatGPT for Teachers, Perplexity for Education, K-3 classroom-safe content)
- **`/everyone/`** — for parents, side hustlers, retirees, hobbyists, builders

The homepage features a video grid pulling live embeds from the channel.

## Tech

- Plain HTML + CSS. No build step. No framework. No JavaScript dependencies.
- Designed for **GitHub Pages** hosting.
- Mobile-first responsive layout.
- Brand colors: navy (`#0a1428`), orange (`#f97316`), supporting palette in `assets/style.css`.

## Structure

```
aiforrealfolks-site/
├── index.html         hub + featured videos
├── classroom/
│   └── index.html     teacher landing
├── everyone/
│   └── index.html     general folks landing
├── assets/
│   ├── style.css      shared styling
│   ├── logo.jpg       robot mascot
│   └── banner.png     channel banner
└── README.md
```

## Local preview

```bash
cd aiforrealfolks-site
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit — AI for Real Folks site"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/aiforrealfolks-site.git
git push -u origin main
# In GitHub repo settings → Pages → source: main branch / root
```

## Editorial standard

This site holds the same editorial line as the channel — honest reviews, no hype, cite sources, real prompts, real results. If you fork it, keep that standard.

— *Real tools. Real talk. Real results.*
