MimosaEmberSkeleton
===================

A skeleton for Ember apps which includes Handlebars support, testing support and the ability to optimize/minify/concatenate/package your application for deployment.

Looking for HTMLBars support?  There's a [separate skeleton for that](https://github.com/dbashford/MimosaEmberHTMLBarsSkeleton).

## Setup
* `npm install -g bower`
* `npm install -g mimosa`
* git clone https://github.com/dbashford/MimosaEmberSkeleton/
* cd MimosaEmberSkeleton
* `npm install`
* `bower install`

## To Develop
* `mimosa watch -som`
* (When doing this for the first time, all the Mimosa modules not already resident in Mimosa will be pulled into your project)
* Open app at http://localhost:3005

## To Build with CI tests
* `mimosa build`

## To Run Tests Interactively
* `mimosa testscript` generates a platform specific test script.
* `mimosa watch` to compile assets and build test assets
* (In 2nd terminal window) `./test.sh`

## To Package App for Deployment
* `mimosa build -omp` (optimize, minify, package)
* cd `dist`
* `node app.js`
* Open app at http://localhost:3005
* This is a fully optimized/concatenated app