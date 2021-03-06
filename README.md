[![Build Status](https://travis-ci.org/steadglobal/angular2-jwt-boilerplate.svg?branch=master)](https://travis-ci.org/steadglobal/angular2-jwt-boilerplate) [![MIT license](http://img.shields.io/badge/license-MIT-lightgrey.svg)](http://opensource.org/licenses/MIT) [![npm](https://img.shields.io/npm/v/npm.svg)]()

# About this module

Sample  Angular2 full-stack project to demonstrate JWT authentication.

angular2-jwt-boilerplate is based on JWT Authentication with the following features:

* simple front-end template with a login and registration form
* redirection to the login form if unlogged user tries to access secure page (here profile page)
* defining if particular webpage should require authentication 


This project uses the **MEAN** stack, the front-end of this project was generated with [Angular CLI](https://github.com/angular/angular-cli).

* [Mongoose.js](http://www.mongoosejs.com) ([MongoDB](https://www.mongodb.com)): database
* [Express.js](http://expressjs.com): backend framework
* [Angular 2](https://angular.io): frontend framework
* [Node.js](https://nodejs.org): runtime environment
* [Angular CLI](https://cli.angular.io): project scaffolding
* [Bootstrap4](https://v4-alpha.getbootstrap.com/): layout and styles
* [Font Awesome](http://fontawesome.io): icons

## Prerequisites
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i angular-cli -g`
3. From project root folder install all the dependencies: `npm i`

## Run
1. Command window 1: `mongod`: run MongoDB
2. Command window 2: `npm run server`: run Express backend server (with autoreload)
3. Command window 3: `npm run client`: run Angular frontend (with autobuild and autoreload)
4. Browser will automatically open to: [localhost:4200](http://localhost:4200)
5. Run `npm start` , it will execute both angular front end & express backend, **you can skip step 2 & 3 by this command.** 


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.


## Author
* [Shabeer Ayar](https://github.com/ayarshabeer)

## Copyright & License

Copyright (c) 2017 [Stead Technologies](http://stead.global) - Released under the [MIT license](LICENSE).
