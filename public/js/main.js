(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./modules/a":2,"./modules/add":3,"./modules/b":4,"./modules/module-one":5,"./modules/module-tre":6,"./modules/module-two":7}],2:[function(require,module,exports){

module.exports = 1;

},{}],3:[function(require,module,exports){


module.exports =  function(a, b){
  var c = a + b;
  return  'a + b = '+ c;
};


},{}],4:[function(require,module,exports){

module.exports = 2;



},{}],5:[function(require,module,exports){
console.log("i'm module one");
},{}],6:[function(require,module,exports){
console.log("i'm module three");
},{}],7:[function(require,module,exports){
console.log("i'm module two");
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NaWNrZXkvd29ya3NwYWNlL2J1bmRsZS10ZXN0L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvZmFrZV84NmJkYWNiMC5qcyIsIi9Vc2Vycy9NaWNrZXkvd29ya3NwYWNlL2J1bmRsZS10ZXN0L3NyYy9qcy9tb2R1bGVzL2EuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvbW9kdWxlcy9hZGQuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvbW9kdWxlcy9iLmpzIiwiL1VzZXJzL01pY2tleS93b3Jrc3BhY2UvYnVuZGxlLXRlc3Qvc3JjL2pzL21vZHVsZXMvbW9kdWxlLW9uZS5qcyIsIi9Vc2Vycy9NaWNrZXkvd29ya3NwYWNlL2J1bmRsZS10ZXN0L3NyYy9qcy9tb2R1bGVzL21vZHVsZS10cmUuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvbW9kdWxlcy9tb2R1bGUtdHdvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTs7QUNBQTs7QUNBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYSA9IHJlcXVpcmUoJy4vbW9kdWxlcy9hJyk7XG52YXIgYiA9IHJlcXVpcmUoJy4vbW9kdWxlcy9iJyk7XG52YXIgYWRkID0gcmVxdWlyZSgnLi9tb2R1bGVzL2FkZCcpO1xuXG5jb25zb2xlLmxvZyhcbiAgJ21vZHVsZSBhID0gJywgYSwgJ1xcbicrXG4gICdtb2R1bGUgYiA9ICcsIGIsICdcXG4nK1xuICAnbW9kdWxlIGFkZCcsIGFkZChhLGIpLCAnXFxuXFxuJ1xuKTtcblxucmVxdWlyZSgnLi9tb2R1bGVzL21vZHVsZS1vbmUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9tb2R1bGUtdHdvJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvbW9kdWxlLXRyZScpOyIsIlxubW9kdWxlLmV4cG9ydHMgPSAxO1xuIiwiXG5cbm1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uKGEsIGIpe1xuICB2YXIgYyA9IGEgKyBiO1xuICByZXR1cm4gICdhICsgYiA9ICcrIGM7XG59O1xuXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gMjtcblxuXG4iLCJjb25zb2xlLmxvZyhcImknbSBtb2R1bGUgb25lXCIpOyIsImNvbnNvbGUubG9nKFwiaSdtIG1vZHVsZSB0aHJlZVwiKTsiLCJjb25zb2xlLmxvZyhcImknbSBtb2R1bGUgdHdvXCIpOyJdfQ==
