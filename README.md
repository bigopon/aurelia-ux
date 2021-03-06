# aurelia-ux

[![npm Version](https://img.shields.io/npm/v/@aurelia-ux/core.svg)](https://www.npmjs.com/package/@aurelia-ux/core)
[![Discord Chat](https://img.shields.io/discord/448698263508615178.svg)](https://discord.gg/H6RBmb4)

This library is part of the [Aurelia](http://www.aurelia.io/) platform and extends it by adding a higher level set of user experience-oriented features such as scoped styles, theming, components and UX patterns.

> To keep up to date on [Aurelia](http://www.aurelia.io/), please visit and subscribe to [the official blog](http://blog.aurelia.io/) and [our email list](http://eepurl.com/ces50j). We also invite you to [follow us on twitter](https://twitter.com/aureliaeffect). If you have questions look around our [Discourse forums](https://discourse.aurelia.io/), chat in our [community on Discord](https://discord.gg/H6RBmb4) or use [stack overflow](http://stackoverflow.com/search?q=aurelia). Documentation can be found [in our developer hub](http://aurelia.io/docs). 

## Installation

To use this library, you can do
```
npm i @aurelia-ux/core @aurelia-ux/input tslib
```

and in the main entry of your app, do:

```ts
export function configure(aurelia) {
  aurelia.use
    .plugin('@aurelia-ux/core')
    .plugin('@aurelia-ux/input)
    // ... and more
}
```

If you are using webpack, instead do:
```ts
export function configure(aurelia) {
  aurelia.use
    .plugin(PLATFORM.moduleName('@aurelia-ux/core'))
    .plugin(PLATFORM.moduleName('@aurelia-ux/input))
    // ... and more
}
```

If you are using `datepicker` component, makes sure you are also installing moment:
```
npm install moment
```

Note: `tslib` is a peer dependency of this library, as it helps with reducing the amount of code duplication

## Documentation

Check out the [showcase application](https://github.com/aurelia/app-ux-showcase) for demos and documentation. If you are interested in contributing, have a read through [our wiki](https://github.com/aurelia/ux/wiki). You can view an online demo here, [https://aux-demo.web.app](https://aux-demo.web.app).

## Building

**Before The First Build**

* `npm ci` installs dependencies for the base Aurelia UX project
* `npm run bootstrap` sets up a symlink between all of the packages in the monorepo
* `npm run build` builds all of the mono repo projects.

>Note: `npm run build` is very CPU intensive and takes a small period of time on most machines. If you are working within a single component, you might try `npm run build` instead at the component package level.

## Tests

### From the project's root directory

`npm run test -- --scope=name` runs the tests for the specified package (defaults to all packages when `-- --scope=name` part omitted)

If you have `lerna` installed globally:

`lerna run test` runs the tests for all packages (will start multiple chrome instances simultaneously)

### From a package's own directory

`npm run test` runs the tests for that package
`npm run test:debugger` to run the tests in with a Chrome Browser for debugging 

## Developing

### Build from a package's own directory

1. Production build:
```shell
npm run build
```
2. Dev build:
```shell
npm run build:dev
# or for watch
npm run build:dev:watch
```

If you want to build to a specific, non default, folder, do:
```shell
npm run build -- --environment target_dir: path/to/my/dir
# or
npm run build:dev -- --environment target_dir: path/to/my/dir
# or
npm run build:dev:watch -- --environment target_dir: path/to/my/dir
```

### Run a test app which emulates dependencies installation
To run the test app, first make sure you built all the packages via the instruction of how to build above. Then open a shell at root of this project and copy paste the following:
```shell
cd app
npm ci
npm run dev
```

### Run a test app with direct source bundling

To run the test app, with all dependencies pointing to the packages source code, first make sure you could run in previous step, then do:
1. Uncomment line 33 to line 65 in webpack.config.js in `app` folder
2. Open a shell at root of this project and run:

```shell
cd app
npm ci
npm run dev
```

This will use `webpack-dev-server` and `webpack` to alias all `ux` dependencies to the source in `pakcages` folder.

## Online playground

1. Go to [https://gist.dumber.app/?gist=7f63f733103a72e5f8660a9eba60ff0e](https://gist.dumber.app/?gist=7f63f733103a72e5f8660a9eba60ff0e)
2. Add new files and play around, alternatively, fork (button near top left) to create a new gist to share
