# capturio (pronounced cap-too-ree-ooh)

A PWA for video production - screencasts, voice overs and camera integration. Zero install app (i.e. no admin rights) with a clean UI. No bloats, malwares or ads!

## Install Guide

This web app s hosted at : https://capturio.soumikmukherjee.dev. To use it, just open the app in a browser. PWAs can be installed on the desktop as well, see [this](https://support.google.com/chrome/answer/9658361) support article by Google, on how.

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

```bash
$ yarn run:ui-stories
```

To run a `development` server with the `gatsby` app, execute from the repo root dir

```bash
$ yarn develop:webapp
```

To build the `gatsby` web app, i.e. `production` build (this creates the html, css and js bundles in the `packages/webapp/public` folder), execute from the repo root dir

```bash
$ yarn build:webapp
```

You can also run a local server to check out your `production` build, with

```bash
$ yarn serve:webapp
```

### CICD
The project supports a [Google Cloud Build](https://cloud.google.com/cloud-build) based CICD pipeline to deploy to [Firebase hosting](https://firebase.google.com/docs/hosting). The `cloudbuild.yaml` file models the pipeline.

To trigger the pipeline, do the following:

1. Use `yarn version` to bump the version numbers. Follow `semver`. You should have the following setup before doing this as well

```bash
$ yarn config set version-sign-git-tag true (Optional, only if you want signed tags)
$ yarn config set version-tag-prefix "v"
$ yarn config set version-git-tag true  
```

then do (e.g. below if you are releasing a `minor` version update)

```bash
$ yarn version --minor
```

This will bump the minor version number on your `package.json` (root) and also create a git tag (an annotated one).

2. Push the git tag to remote, using

```bash
$ git push origin v1.1.0
```

### Submitting PRs

Every PR should refer a template (one of 3 in this repo). See this [comment](https://github.com/soumik-mukherjee/capturio/pull/12#issue-403828412) for details on how and which template to use

Happy coding! :+1:
