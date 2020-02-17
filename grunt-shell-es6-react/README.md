# Grunt Shell ES6

A starter template for ES6-based grunt projects.

This grunt shell:

1. Allows you to write all of your JS using ES6 syntax and lets you work on your modules as individual files
2. Uses jshint to evaluate each of your partials for bad form and syntax errors
3. Concatenates all of your partials
4. Your concatenated file is then passes through babel to be made es5-safe ensuring compatibility with older browsers
6. The es5-safe file is then passed through browserify to add support for 'require()', which enables the babel-polyfill in all browsers
7. Your es5-safe file is minified
8. Compiles all of your Sass

## Development mode
Fire `grunt dev` to have grunt jshint your partials, concatenate them, transpile them to ES5, minify the concatenated ES5 version, compile your sass and then listen for file changes to repeat the process (mostly on only the changed files)

## Design mode
Fire `grunt des` to simply compile your sass and listen for sass changes to recompile

## Packaging for prod
When you're done and read to push your code out simply cancel your running grunt process and fire `grunt`. This will skip the jshint process, concatenate your js partials, transpile the es6 file to es5, strip all console.logs from the concatenated es5 code and then minify the JS. It will also compile your sass again. When the process exits your ready to deploy your code!

## Tips
1. Libraries (like the included jquery and lodash libraries) should be kept in your assets/js folder and be prefixed with a double underscore ( __ ) -- jshint will ignore these file then.
2. You shouldn't include minified libraries in the assets folder. You should load the full version of the library so that the uglification process that grunt runs doesn't introduce bugs
3. This system transpiles es6 code and sometimes that can introduce bugs. The `grunt-shell-es6/js/working` contains a `*.es6.js` and `*.babel.js` copy of your files so you can see where in the transpile process a bug is introduced.

## Tree breakdown
```
├── Gruntfile.js - Controls the grunt process
├── README.md - This file
├── assets - Where your raw materials go
│   ├── js - JS partials allow you to work in self-contained files that are later concatenated, transpiled and minified
│   │   ├── __jquery.js - jQuery is a library, so we prefix it with a double underscore __ so as to have it loaded at the beginning of the concatenation process (it works alphabetically) and also have jshint ignore it
│   │   ├── __lodash.js - lodash is a library, so we prefix it with a double underscore __ so as to have it loaded at the beginning of the concatenation process (it works alphabetically) and also have jshint ignore it
│   │   └── _base.js - base.js is a partial that gets the ball rolling. It includes import 'babel-polyfill' to load support code for ES6 in lower-versioned browsers
│   └── scss - Where your sass lives.
│       ├── _base.scss
│       ├── _mixins.scss
│       ├── _normalize.scss - A nice reset so that all browsers have the same default files
│       ├── _vars.scss
│       └── style.scss - Compass looks at the style.scss file and compiles your CSS in the order you @import the partials in that file
├── css - Your compiled and minified CSS, courtesy of composer. Names in this folder mirror the name of your master file in assets/scss
│   ├── style.css
│   └── style.min.css
├── img
│   └── empty
├── js - your compiled JS
│   ├── app.js - a concatenated, es5-safe and browserified version of your JS.
│   ├── app.min.js - a concatenated, es5-safe, browserified and minified version of your JS.
│   └── working - A temp directory for when your developing. Files in this directory are gitignored.
│       ├── README.md
│       ├── app.babel.js - Your concatenated JS after it's been processed by babel. Not yet processed by browserify.
│       └── app.es6.js - Your concatenated JS in its rawest form. Not yet processed by babel or browserify
└── package.json - Loads all of your dependencies and dev-dependencies. Grunt automatically loads every thing in the dev-dependency list. Items in the dependency list are available to browserify.
```
