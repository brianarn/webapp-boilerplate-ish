# webpack-boilerplate-ish

This is me picking a few sample things to experiment with and see if I can put something together that works as a start point. Don't expect much.

## Getting Started

A simple `npm install` is likely sufficient, followed by an `npm start`, which will spin up the Hapi server. Right now, I'm planning on checking in the built client code (akin to `dist` but not using `dist` because of how I'm structuring things), so really, in theory, that's it.

If you make changes, or want to run the steps in full on your system, after the npm install, make sure you've got `grunt-cli` installed globally and just run `grunt` to start a default, which will:

1. Run `webpack` to build out the client JS.
2. Run `hapi` to start the server.
3. Watch the various server and client directories for JS changes, restarting the server or rebuilding the client code as appropriate.

Right now, there isn't LiveReload, but I may have to change that out.

I could probably just use the webpack dev server, in some way, especially since the install of `grunt-webpack` brought it in, but I'm wanting Hapi to own all the server-side bits.

## Modules in use

- hapi - for my server/apis/whatever
- react - because why not
- webpack - for building out the client code, so I can happily modularize things
  - jsx-loader - to load all the .jsx files
- socket.io - so I can do realtime communication things
- grunt - to manage all the things
  - grunt-contrib-watch - to re-run build processes or restart servers as appropriate
  - grunt-hapi - because it seemed an easy way to tie starting up a Hapi server into grunt
  - grunt-webpack - same as grunt-hapi basically, except officially supported by webpack

## Feedback

I've been doing primarily client-side stuff forever, so this is all a big experiment and may be a horrible pile of garbage. I'm open to feedback, though please keep it constructive. :)
