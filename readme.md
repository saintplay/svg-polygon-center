# svg-polygon-center [![Build Status](https://travis-ci.org/saintplay/svg-polygon-center?branch=master)](https://travis-ci.org/saintplay/svg-polygon-center)

> Return the center for a given SVG polygon points.

## Install ##

    npm install --save svg-polygon-center

or

    yarn add svg-polygon-center


## Usage ##

```js
var center = require('svg-polygon-center');
// or
import center from 'svg-polygon-center';

var points = polygon.getAttribute('points');
// e.g. "28,224 256,224 256,352 128,352"

var center = center(points);
// e.g. { x: 192, y: 288 }

```

## License ##

MIT © [Diego Jara](saintplay96@gmail.com)
