import $ from "jquery";
import * as messages from "./messages";

var productsMessage = "Check out our huge range of products."

$(document).ready(function () {
	messages.generateMessage(productsMessage);
});