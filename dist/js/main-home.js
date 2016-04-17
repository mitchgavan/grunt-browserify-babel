require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

var _messages = require("./messages");

var messages = _interopRequireWildcard(_messages);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var greetingMessage = "Hello there, welcome to our site!";

(0, _jquery2.default)(document).ready(function () {
	(0, _jquery2.default)(".button").on("click", function () {
		messages.generateMessage(greetingMessage);
	});
});

},{"./messages":3,"jquery":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9mYWN0b3ItYnVuZGxlL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLWhvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7O0lBQVk7Ozs7OztBQUVaLElBQUksa0JBQWtCLG1DQUFsQjs7QUFFSixzQkFBRSxRQUFGLEVBQVksS0FBWixDQUFrQixZQUFZO0FBQzdCLHVCQUFFLFNBQUYsRUFBYSxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLFlBQVU7QUFDbEMsV0FBUyxlQUFULENBQXlCLGVBQXpCLEVBRGtDO0VBQVYsQ0FBekIsQ0FENkI7Q0FBWixDQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuXG52YXIgZ3JlZXRpbmdNZXNzYWdlID0gXCJIZWxsbyB0aGVyZSwgd2VsY29tZSB0byBvdXIgc2l0ZSFcIjtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXHQkKFwiLmJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG5cdFx0bWVzc2FnZXMuZ2VuZXJhdGVNZXNzYWdlKGdyZWV0aW5nTWVzc2FnZSk7XG5cdH0pO1xufSk7XG4iXX0=
