# MeetBall Handbook

Where we keep all our knowledge, kinda like our team's brain but in website form.

## How we maintain this Handbook
We're using [Zola](https://www.getzola.org/) (super fast static site generator) with the clean [Adidoks](https://github.com/aaranxu/adidoks) theme by [@aaranxu](https://github.com/aaranxu) — thanks for making our docs look good!

## Wanna run this locally?

### First, you need Zola

#### If you're on macOS:
```bash
brew install zola
```
Easy peasy.

#### If you're a Nix person:
```bash
nix-shell
```
Boom, you're in a dev. environment with everything set up.

###### pro tip
if you wanna be extra fast like [Bolt](https://en.wikipedia.org/wiki/Bolt_(Disney_character)) or [Bolt](https://en.wikipedia.org/wiki/Usain_Bolt) give [nix-direnv](https://github.com/nix-community/nix-direnv) a whirl.

direnv makes it so that you entering a directory it automatically runs a `.envrc` file and setups your environment for you. In our case our .envrc file has:
```bash
use nix                 # runs nix-shell command
dotenv_if_exists .env   # sources .env file, if it exists
```

then you can just do:
```bash
cd handbook
# done 🤭
```

> warning: trying this setup - nix + direnv - ...you may wanna marry it :)

### ...Then spin it up

1. Clone this bad boy
```bash
git clone git@github.com:thesummeet/handbook.git
# OR
git clone https://github.com/thesummeet/handbook.git
```
2. Fire up locally on your computer (dev server):
   ```bash
   zola serve
   ```
3. Hit up http://127.0.0.1:1111 in your browser

It auto reloads too (AKA hot-reloading), so just save your changes on your editor and watch the magic happen ✨

### Need to build for production?
```bash
zola build
```

This dumps everything into a `public/` folder, ready to ship.

## How we deploy

Cloudflare Pages handles our deployments. Just push to main and it goes live automatically,
plus any other branches for previewing work not ready for public.
Pretty sweet, right?
