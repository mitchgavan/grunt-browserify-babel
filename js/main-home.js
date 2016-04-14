import $ from "jquery";
import * as messages from "./messages";

var greetingMessage = "Hello there, welcome to our site!";

$(document).ready(function () {
	messages.generateMessage(greetingMessage);
});
