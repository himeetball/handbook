+++
updated = 2025-10-09T05:41:08+01:00
title = "Multi-language Setup"
description = "How to add new languages and manage translations for the Meetball handbook."
draft = false
weight = 50
template = "docs/page.html"

[extra]
lead = "We support multiple languages with authentic cultural voices. Here's how it all works."
toc = true
top = false
+++

## Current Languages

We currently support:
- **English** (default) - Hey there! 
- **Portuguese (Portugal)** - Tá tudo?
- **Italian** - Bella!
- **French** - Salut!

## Our Translation Philosophy

**We don't do corporate translations.** Each language should feel authentic and use real cultural expressions:

- **Portuguese**: "cenas bueda fixes", "tá a andar de mota", "malta da equipa"
- **Italian**: "roba figata", "che spacca", Roman casual expressions  
- **French**: "des trucs de fou", "c'est ouf", "hyper vite"

Always use informal "you" (tu/tu/tu) not formal (vous/voi/vocês).

## Adding a New Language

### 1. Update config.toml

Add your language to the config:

```toml
[languages.es]  # Spanish example
title = "Manual Meetball (Meetball Handbook)"
```

### 2. Create Homepage Translation

Create `content/_index.es.md`:

```toml
+++
title = "Manual Meetball (Meetball Handbook)"

[extra]
lead = '<b>¡Hola! Bienvenido a la base de conocimientos de Meetball (Meetball Handbook).</b> Todo lo que necesitas saber sobre nuestro equipo, procesos y cómo construimos cosas increíbles juntos.'
url = "/docs/getting-started/introduction/"
url_button = "Empezar"
repo_url = "https://github.com/himeetball/handbook"
+++
```

### 3. Add Navigation

The menu structure is copied from the homepage front matter, so just translate the button labels.

## Translation Workflow

1. **Start with key pages**: Homepage, getting started, FAQ
2. **Use authentic expressions**: Research how people actually talk in that language
3. **Test locally**: `zola serve` to see how it looks
4. **Get native speaker review**: Don't rely on Google Translate

## File Structure

```
content/
├── _index.md          # English (default)
├── _index.pt.md       # Portuguese  
├── _index.it.md       # Italian
├── _index.fr.md       # French
├── _index.es.md       # Your new language
└── docs/
    ├── page.md        # English version
    └── page.es.md     # Translated version
```

## Language-Specific Examples

### Portuguese (Portugal)
- Greeting: "Tá tudo?" (very casual)
- Cool stuff: "cenas bueda fixes" 
- Team: "malta da equipa"
- Done: "tá feito", "tá a andar de mota"

### Italian (Roman style)
- Greeting: "Bella!" 
- Cool stuff: "roba figata"
- Awesome: "spacca"
- Fast: "in un lampo"

### French (casual)
- Greeting: "Salut!"
- Cool stuff: "des trucs de fou"
- Fast: "hyper vite", "en deux secondes"

## Translation Tips

- **Research slang**: Look up how young people actually talk
- **Avoid formal language**: We're friends here, not a corporation
- **Keep Meetball branding**: Always include "(Meetball Handbook)" after translated titles
- **Test on mobile**: Check how longer translations look on small screens
- **Ask for feedback**: Get native speakers to review before publishing

## URL Structure

Zola automatically creates language-specific URLs:
- English: `handbook.meetball.fun/docs/guide/`  
- Spanish: `handbook.meetball.fun/es/docs/guide/`
- Portuguese: `handbook.meetball.fun/pt/docs/guide/`

## Not Sure About Something?

Just ask! We'd rather have authentic translations than perfect grammar. The goal is to make people feel welcome in their own language 🌍
