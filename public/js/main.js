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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NaWNrZXkvd29ya3NwYWNlL2J1bmRsZS10ZXN0L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvZmFrZV9lYzM2YzFkNy5qcyIsIi9Vc2Vycy9NaWNrZXkvd29ya3NwYWNlL2J1bmRsZS10ZXN0L3NyYy9qcy9tb2R1bGVzL2EuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvbW9kdWxlcy9hZGQuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvbW9kdWxlcy9iLmpzIiwiL1VzZXJzL01pY2tleS93b3Jrc3BhY2UvYnVuZGxlLXRlc3Qvc3JjL2pzL21vZHVsZXMvbW9kdWxlLW9uZS5qcyIsIi9Vc2Vycy9NaWNrZXkvd29ya3NwYWNlL2J1bmRsZS10ZXN0L3NyYy9qcy9tb2R1bGVzL21vZHVsZS10cmUuanMiLCIvVXNlcnMvTWlja2V5L3dvcmtzcGFjZS9idW5kbGUtdGVzdC9zcmMvanMvbW9kdWxlcy9tb2R1bGUtdHdvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGEgPSByZXF1aXJlKCcuL21vZHVsZXMvYScpO1xudmFyIGIgPSByZXF1aXJlKCcuL21vZHVsZXMvYicpO1xudmFyIGFkZCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9hZGQnKTtcblxuY29uc29sZS5sb2coXG4gICdtb2R1bGUgYSA9ICcsIGEsICdcXG4nK1xuICAnbW9kdWxlIGIgPSAnLCBiLCAnXFxuJytcbiAgJ21vZHVsZSBhZGQnLCBhZGQoYSxiKSwgJ1xcblxcbidcbik7XG5cbnJlcXVpcmUoJy4vbW9kdWxlcy9tb2R1bGUtb25lJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvbW9kdWxlLXR3bycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL21vZHVsZS10cmUnKTsiLCJcbm1vZHVsZS5leHBvcnRzID0gMTsiLCJcbm1vZHVsZS5leHBvcnRzID0gIGZ1bmN0aW9uKGEsIGIpe1xuICB2YXIgYyA9IGEgKyBiO1xuICByZXR1cm4gICdhICsgYiA9ICcrIGM7XG59OyIsIlxubW9kdWxlLmV4cG9ydHMgPSAyOyIsIlxuY29uc29sZS5sb2coXCJpJ20gbW9kdWxlIG9uZVwiKTsiLCJcbmNvbnNvbGUubG9nKFwiaSdtIG1vZHVsZSB0aHJlZVwiKTsiLCJcbmNvbnNvbGUubG9nKFwiaSdtIG1vZHVsZSB0d29cIik7Il19
