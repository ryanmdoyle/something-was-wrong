# Something Was Wrong (podcast site)

The website I built in 2019 for the *Something Was Wrong* podcast. It was
adapted from Wes Bos and Scott Tolinski's open-source
[Syntax.fm](https://github.com/wesbos/Syntax) site. The podcast has since moved
to a different platform, so this code is no longer what runs
somethingwaswrong.com.

## How it works

- Each episode is a Markdown file in `shows/` with front matter (number, title,
  date, audio URL). The site reads them at build time, so publishing an episode
  means adding a file
- A custom audio player with progress, volume, and playback speed controls stays
  on screen while you browse show notes
- The player saves your position and speed in `localStorage` for each episode,
  so listeners pick up where they left off
- Includes a sponsor page

## Tech

Next.js · React · Express (custom server and routes) · Stylus · deployed with Now (now Vercel)

## Running locally

```bash
npm install
npm run dev   # http://localhost:7777
```
