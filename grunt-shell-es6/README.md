# Grunt Shell ES6

A starter template for ES6-based grunt projects.

This grunt shell:

1. Allows you to write all of your JS using ES6 syntax and lets you work on your modules as individual files
2. Uses jshint to evaluate each of your partials for bad form and syntax errors
3. Concatenates all of your partials
4. Your concatenated file is then passes through babel to be made es5-safe ensuring compatibility with older browsers
5. Your es5-safe file is minified
6. Compiles all of your Sass

## Development mode
Fire `grunt dev` to have grunt jshint your partials, concatenate them, transpile them to ES5, minify the concatenated ES5 version, compile your sass and then listen for file changes to repeat the process (mostly on only the changed files)

## Design mode
Fire `grunt des` to simply compile your sass and listen for sass changes to recompile

## Packaging for prod
When you're done and read to push your code out simply cancel your running grunt process and fire `grunt`. This will skip the jshint process, concatenate your js partials, transpile the es6 file to es5, strip all console.logs from the concatenated es5 code and then minify the JS. It will also compile your sass again. When the process exits your ready to deploy your code!

## Tips
1. Libraries (like the included jquery and lodash libraries) should be kept in your assets/js folder and be prefixed with a double underscore ( __ ) -- jshint will ignore these file then.
2. You shouldn't include minified libraries in the assets folder. You should load the full version of the library so that the uglification process that grunt runs doesn't introduce bugs
