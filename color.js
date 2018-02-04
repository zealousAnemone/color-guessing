$(document).ready(function() {
var colors = [];
var easy = false;
randomColors();
var pickedColor = pickColor();
$("#picked").text(pickedColor.toUpperCase());

$("#reset").click(function() {
	randomColors();
	pickedColor = pickColor();
	$("#picked").text(pickedColor.toUpperCase());
	$("header").css("background-color", "#232323");
	$("#message").empty();
})

$("#easy").click(function() {
	$("header").css("background-color", "#232323");
	$(this).addClass("active");
	$("#hard").removeClass("active");
	easy = true;
	$(".square").css("background-color", "#232323");
	randomColors();
	console.log(colors.length);
	pickedColor = pickColor();
	$("#picked").text(pickedColor.toUpperCase());
})

$("#hard").click(function() {
	$("header").css("background-color", "#232323");
	$(this).addClass("active");
	$("#easy").removeClass("active");
	easy = false;
	randomColors();
	pickedColor = pickColor();
	$("#picked").text(pickedColor.toUpperCase());
})

function randomColors() {
colors = [];
$(".square").each(function() {
	if ($(this).is(".bottom") && easy == true) {
		$(this).css("display", "hidden");
		}
	else {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	colors.push(color);
	$(this).css("background-color", color);
}
})
}

function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}


$(".square").click(function() {
	if ($(this).css("background-color") == pickedColor) {
		if (easy) {
			$(".top").css("background-color", pickedColor);
		}
		else {
			$(".square").css("background-color", pickedColor);
		}
		$("header").css("background-color", pickedColor);
		$("#message").text("Correct!");
	}
	else {
		$(this).css("background-color", "#232323");
		$("#message").text("Try Again!");
	}
})
})

