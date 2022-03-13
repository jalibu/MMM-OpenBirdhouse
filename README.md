# MMM-OpenBirdhouse

[![version](https://img.shields.io/github/package-json/v/jalibu/MMM-OpenBirdhouse)](https://github.com/jalibu/MMM-OpenBirdhouse/releases) [![Known Vulnerabilities](https://snyk.io/test/github/jalibu/MMM-OpenBirdhouse/badge.svg?targetFile=package.json)](https://snyk.io/test/github/jalibu/MMM-OpenBirdhouse?targetFile=package.json)

A gallery client for [Open-Birdhouse](https://github.com/jalibu/open-birdhouse) for the [MagicMirror²](https://magicmirror.builders/) platform.

Contribution welcome.

#### Support

If you like this module and want to thank, please rate this repository with a star or [buy me a coffee](https://paypal.me/jalibu).

## Features

tbd

## Installing the Module

1. Navigate to the `MagicMirror/modules` directory and execute the following command

   ```sh
   git clone https://github.com/jalibu/MMM-OpenBirdhouse.git
   ```

2. Change into the MMM-OpenBirdhouse module folder and install runtime dependencies with

   ```sh
   cd MMM-OpenBirdhouse
   npm install --only=production
   ```

3. Add the module configuration into the `MagicMirror/config/config.js` file (sample configuration):

   ```javascript
   {
   	module: "MMM-OpenBirdhouse",
   	position: "top_left",
   	config: {

   	}
   }
   ```

### Options

| Field                   | Description                                                      | Default |
| ----------------------- | ---------------------------------------------------------------- | ------- |
| updateIntervalInSeconds | (Integer) Interval to refresh stock data from server. (min. 120) | 300     |

## Contribution and Development

This module is written in TypeScript and compiled with Rollup.  
The source files are located in the `/src` folder.
Compile target files with `npm run build`.

Contribution for this module is welcome!
