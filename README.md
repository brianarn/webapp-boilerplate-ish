# webpack-boilerplate-ish

This is me picking a few sample things to experiment with and see if I can put something together that works as a start point. Don't expect much.

## Getting Started

Once you have `grunt-cli` installed and have ran an `npm install`, execute `grunt`, which will:

1. Run the `webpack` task to build out the client JS.
2. Run the `hapi` to start the server.
3. Run the `watch` task, to watch the various server and client directories for JS changes, restarting the server or rebuilding the client code as appropriate.

Right now, there isn't LiveReload, but I may have to change that out.

I could probably just use the webpack dev server, in some way, especially since the install of `grunt-webpack` brought it in, but I'm wanting Hapi to own all the server-side bits.

## Modules in use

- react - Honestly, a big drive for putting this all together was to dabble with React
- flux - not sure I'll actually use it yet, but the dispatcher seems interesting
- bootstrap - because I'm a lazy developer who doesn't have design chops
- hapi - for my server/apis/whatever
- webpack - for building out the client code, so I can happily modularize things
  - jsx-loader
  - css-loader
  - style-loader
  - file-loader
  - url-loader
- socket.io - so I can do realtime communication things
- grunt - to manage all the things
  - grunt-contrib-watch - to re-run build processes or restart servers as appropriate
  - grunt-hapi - because it seemed an easy way to tie starting up a Hapi server into grunt
  - grunt-webpack - same as grunt-hapi basically, except officially supported by webpack

## Planned Additions

- Backbone for the model/controller bits
- Intern for testing

## Helpful Resources

- [React tutorial][]
- [css-loader][] - documentation on a nice set of loader rules for CSS/PNG/JPG resources
- [bootstrap-sass-loader][] - While not using it directly, it had a nice set of rules for loading of various resources with webpack

## Feedback

I've been doing primarily client-side stuff forever, so this is all a big experiment and may be a horrible pile of garbage. I'm open to feedback, though please keep it constructive. :)


[React tutorial]: https://facebook.github.io/react/docs/tutorial.html
[css-loader]: https://github.com/webpack/css-loader
[bootstrap-sass-loader]: https://github.com/justin808/bootstrap-sass-loader
