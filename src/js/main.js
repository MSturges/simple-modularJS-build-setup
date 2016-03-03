var a = require('./modules/a');
var b = require('./modules/b');
var add = require('./modules/add');

console.log(
  'module a = ', a, '\n'+
  'module b = ', b, '\n'+
  'module add', add(a,b), '\n\n'
);

require('./modules/module-one');
require('./modules/module-two');
require('./modules/module-tre');