var fs = require('fs'),
  validate = require('sourcemap-validator')
  ,min = fs.readFileSync('./out.js', 'utf-8')
  ,map = fs.readFileSync('./out.js.map', 'utf-8');

validate(min, map);
