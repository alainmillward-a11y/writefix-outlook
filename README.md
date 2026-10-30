# WriteFix for Outlook (published files)

These are the built web files for the WriteFix Outlook add-in, served by GitHub Pages at
https://alainmillward-a11y.github.io/writefix-outlook/. They contain no API keys or emails:
each user's key stays in Outlook on their own computer.

**Install:** see [help.html](https://alainmillward-a11y.github.io/writefix-outlook/help.html).
The manifest is at https://alainmillward-a11y.github.io/writefix-outlook/manifest.xml.

The source lives in the private `writefix` repo (`src/outlook/`, `static-outlook/`). Rebuild with
`npm run build` there and copy `dist-outlook/` here to update.
