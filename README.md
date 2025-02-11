# nextjs-hacker-theme-presentation

I used [v0](https://v0.dev) to generate a [presentation](https://debamitro.github.io/presentations/codepromptfu-020225). I liked the theme so much I saved it as a repo so that it can be re-used.

## How to use

Here's what you need to do to get started

```bash
npm install
npx shadcn add button card
npm run dev # for seeing the result in http://localhost:3000
```

## How to change the slides

Edit the 'slides' array in the file hacker-presentation-with-keyboard-nav.tsx

## How to export the presentation as html

Here's what I did after doing the basic

```bash
npm run build
```

I opened the out/index.html file and changed all the URLs to be relative, i.e., removed the leading '/'.

## My v0 prompts

I had to give four prompts in succession:

1. can you generate a presentation with 10 slides
2. can you make the theme look like hackers
3. can I add images to any of the slides?
4. can you allow cursor keys to move from one slide to the next?
