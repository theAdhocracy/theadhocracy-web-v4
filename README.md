<p align="center">
  <a href="https://theadhocracy.co.uk">
    <img alt="Cartoon image of Murray Champernowne." src="https://cms.theadhocracy.co.uk/assets/theadhocracy/website/Logos/adhoc-face.svg" width="60" />
  </a>
</p>
<h1 align="center">
  theAdhocracy
</h1>

## 👋 Welcome to my corner of the internet

Here you'll find my ad hoc thoughts, front-end experiments, technical articles, and anything else that I want. That's the beauty of having your own website: it can be whatever you want it to be!

## 🧐 What's inside?

theAdhocracy is built on the Jamstack, a modern tech stack wtih ReactJS at the heart. Specifically:

- [**Astro**](https://astro.build/)
- [**Craft CMS**](https://craftcms.com/)
- [**Netlify**](https://www.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/b6f7d1df-78b1-4885-807a-bf565946c866/deploy-status)](https://app.netlify.com/sites/an-adhoc-hope/deploys)
- ![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square "Gitmoji")
- ❤

It's also built on the foundations of the [IndieWeb](https://indieweb.org/), with accessibility (#a11y) at its core. If you can spot any improvements than can be made feel free to ping me a message (Twitter is probably best) or make a pull request.

## ℹ More about me

You can find me all over the place:

- **Web**: [theAdhocracy](https://theadhocracy.co.uk)
- **CV**: [resume](https://cv.theadhocracy.co.uk)
- **GitHub**: [profile](https://github.com/theAdhocracy) _psst you're here now_
- **LinkedIn**: [murraychampernowne](https://linkedin.com/in/murraychampernowne)
- **Mastodon**: [@theAdhocracy](https://indieweb.social/@theadhocracy)

Or just subscribe to my blog via RSS to stay up to date 😀

## 📋 Documentation

### Prerequisites

- npm
- Prettier
- Node

### Local Production Build (Netlify)

_The [Netlify CLI](https://docs.netlify.com/cli/local-development/) is required to perform local production builds._

- `netlify dev --context production`: runs a local development server using the live server configuration.
- `netlify build --context production`: forces a full build using the same settings as the production server. (Note: you cannot preview this build.)

_The default behaviour assumes that `--content production` is set, so that can be omitted from both of the above commands without changing the output. Included purely for documentation purposes. Other options include e.g. `--content deploy-preview`._

Full documentation: [Netlify CLI Docs](https://cli.netlify.com/commands/build/).