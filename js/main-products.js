import $ from "jquery";
import * as messages from "./messages";

var productsMessage = "Check out our huge range of products.";

$(document).ready(function () {
	$(".button").on("click", function(){
		messages.generateMessage(productsMessage);
	});
});