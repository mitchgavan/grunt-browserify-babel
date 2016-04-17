require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({2:[function(require,module,exports){
"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _messages = require("./messages");

var messages = _interopRequireWildcard(_messages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productsMessage = "Check out our huge range of products.";

(0, _jquery2.default)(document).ready(function () {
	(0, _jquery2.default)(".button").on("click", function () {
		messages.generateMessage(productsMessage);
	});
});

},{"./messages":3,"jquery":4}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLXByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOztJQUFZOzs7Ozs7QUFFWixJQUFJLGtCQUFrQix1Q0FBbEI7O0FBRUosc0JBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUM3Qix1QkFBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixZQUFVO0FBQ2xDLFdBQVMsZUFBVCxDQUF5QixlQUF6QixFQURrQztFQUFWLENBQXpCLENBRDZCO0NBQVosQ0FBbEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxudmFyIHByb2R1Y3RzTWVzc2FnZSA9IFwiQ2hlY2sgb3V0IG91ciBodWdlIHJhbmdlIG9mIHByb2R1Y3RzLlwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cdCQoXCIuYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcblx0XHRtZXNzYWdlcy5nZW5lcmF0ZU1lc3NhZ2UocHJvZHVjdHNNZXNzYWdlKTtcblx0fSk7XG59KTsiXX0=
