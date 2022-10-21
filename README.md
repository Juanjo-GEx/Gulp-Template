# Web template

Gulp template for web projects where no framework is used.

## Get started

### Install

- Clone this repository
- Run `npm install`

### Usage

- Run `gulp`

## Changes

For image optimization, the **gulp-imagemin** library has been replaced by **gulp-squoosh**.

> Currently the gulp-imagemin project is no longer maintained, being v8.0.0 the last official version. The last version is built with CommonJS, so it will surely give you the gulp error `[ERR_REQUIRE_ESM]: require() not supported`. Although it works in a lower version: `npm install --save-dev gulp-imagemin@7.0.0`, downgrade the version is not a good solution since most of these plugins have dependencies with critical security vulnerabilities.
