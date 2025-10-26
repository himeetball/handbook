# Meetball Handbook

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
git clone git@github.com:himeetball/handbook.git
# OR
git clone https://github.com/himeetball/handbook.git
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

## Known Issues & TODOs

We track planned improvements and known issues in the `0_TODO/` directory. Current items:

### 🔴 High Priority

1. **Handbook Disclaimer and Congent Licensing**
   - **Status:** Review
   - **Issue:** Check if proper disclaimer and dual-license structure (MIT for code, CC BY-SA for content)
   - **Why:** Legal protection, clarify content is experiential not prescriptive advice
   - **Blocking:** Making repository public

2. **Mermaid Diagrams Not Rendering**
   - **Status:** Needs investigation
   - **Issue:** Mermaid diagrams in markdown files are not being rendered on the site
   - **Impact:** Visual documentation (flowcharts, diagrams) not displaying
   - **Next Steps:**
     - Investigate Zola + AdiDoks theme Mermaid support
     - Check if mermaid.js needs to be added to templates
     - Review shortcode or configuration requirements
     - Test rendering with sample diagrams

### Contributing

Found another issue or have an improvement?
- Open an issue on [GitHub](https://github.com/himeetball/handbook/issues)
- Or submit a pull request!
