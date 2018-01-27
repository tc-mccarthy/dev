# Grunt Shell

A starter template for grunt projects.

This grunt shell:

1. Allows you to write all of your JS in modular, individual files
2. Uses jshint to evaluate each of your partials for bad form and syntax errors
3. Concatenates all of your partials
4. Your concatenated file is minified
5. Compiles all of your Sass

## Development mode
Fire `grunt dev` to have grunt jshint your partials, concatenate them, minify the concatenated version, compile your sass and then listen for file changes to repeat the process (mostly on only the changed files)

## Design mode
Fire `grunt des` to simply compile your sass and listen for sass changes to recompile

## Packaging for prod
When you're done and read to push your code out simply cancel your running grunt process and fire `grunt`. This will skip the jshint process, concatenate your js partials, strip all console.logs from the concatenated code and then minify the JS. It will also compile your sass again. When the process exits your ready to deploy your code!

## Tips
1. Libraries (like the included jquery and lodash libraries) should be kept in your assets/js folder and be prefixed with a double underscore ( __ ) -- jshint will ignore these file then.
2. You shouldn't include minified libraries in the assets folder. You should load the full version of the library so that the uglification process that grunt runs doesn't introduce bugs

## Tree breakdown
```
├── Gruntfile.js - Controls the grunt process
├── README.md - This file
├── assets - Where your raw materials go
│   ├── js - JS partials allow you to work in self-contained files that are later concatenated and minified
│   │   ├── __jquery.js - jQuery is a library, so we prefix it with a double underscore __ so as to have it loaded at the beginning of the concatenation process (it works alphabetically) and also have jshint ignore it
│   │   ├── __lodash.js - lodash is a library, so we prefix it with a double underscore __ so as to have it loaded at the beginning of the concatenation process (it works alphabetically) and also have jshint ignore it
│   │   └── _base.js - base.js is a partial that gets the ball rolling.
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
│   ├── app.js - a concatenated file compiled alphabetically by the contents of assets/js.
│   ├── app.min.js - a minified version of your js/app.js.
└── package.json - Loads all of your dev-dependencies. Grunt automatically loads every thing in the dev-dependency list.
```
