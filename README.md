# capturio (pronounced cap-too-ree-ooh)

A PWA for video production - screencasts, voice overs and camera integration. Zero install app (i.e. no admin rights) with a clean UI. No bloats, malwares or ads!

## Install Guide

Just open the app in a browser. PWAs can be installed on the desktop as well, see [this](https://support.google.com/chrome/answer/9658361) support article by Google, on how.

More release channels targetted for future, e.g. windows store etc.

## User's Guide

Simply set the sources using the buttons at the top & center, `Mic`, `Screen` and `Cam` (camera integration coming soon!). Use the `Record` and `Stop` buttons (on the left) to control recording. Once you are done the `Download` button on the right should able to give you the recording as a `webm` file.

## Contributors Guide

### Setting up a dev environment

1. Before anything else, you would need:
   - Any editor, I use `VS Code`. Highly recommend getting and using the following extensions:
     - The [Prettier Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
   - `node` and `yarn`
2. Clone this repo with `git` and `checkout` to the right `branch`
3. Run the command `yarn` from project root directory to install all dependencies.
4. You are now ready to run the different projects inside the repo.

### Running projects in this repo

First, please familiarise yourself with the repo structure. This is a `lerna` monorepo, with two projects within:

- A `gatsby+react` web app, located in `packages/webapp`
- A `react+storybook` UI component library, located in `packages/ui-components`

The `component library` comes bundled with [storybook](https://storybook.js.org/). You can run the storybook server and check live edits to any components that you do.

To run the `storybook` server, execute from the repo root dir

> yarn run:ui-stories

To run the `gatsby` app, execute from the repo root dir

> yarn develop:webapp

### Submitting PRs

Every PR should refer a template (one of 3 in this repo). See this [comment](https://github.com/soumik-mukherjee/capturio/pull/12#issue-403828412) for details on how and which template to use

Happy coding! :+1:
