$(document).ready(function() {
//array to hold current displayed colors in
var colors = [];
//default is hard mode
var easy = false;
//Get new color & set up board immediately upon loading
reset();

//"New Color" button resets colors
$("#reset").click(function() {
	reset();		
})

//Easy button
$("#easy").click(function() {
	//toggle active state for button
	$(this).addClass("active");
	$("#hard").removeClass("active");
	/*set easy to true (so random color function knows whether to display
	3 or 6 colors)*/
	easy = true;
	//Set up new easy board
	reset();
})

$("#hard").click(function() {
	//Same deal as easy but for 6 colors
	$(this).addClass("active");
	$("#easy").removeClass("active");
	easy = false;
	reset();
})

function reset() {
	//pick & display 3 or 6 random colors
	randomColors();
	//set "goal" color
	pickedColor = pickColor();
	//Display RGB values for goal color
	$("#picked").text(pickedColor.toUpperCase());
	//Set header color to background color
	$("header").css("background-color", "#232323");
	//Empty message spot
	$("#message").empty();
}

function randomColors() {
//Make sure colors array is empty
colors = [];
//For each square div...
$(".square").each(function() {
	/*if div is on bottom & we're playing on easy mode,
	don't display it*/
	if ($(this).is(".bottom") && easy == true) {
		$(this).css("background-color", "#232323");
		}
	else {
		//Otherwise, pick random vals for red, green, blue
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	//construct RGB value string
	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	//push that random color to color array
	colors.push(color);
	//display random color as div's background
	$(this).css("background-color", color);
}
})
}

function pickColor() {
	//All this function does is picks a random color from the displayed colors
	return colors[Math.floor(Math.random() * colors.length)];
}


$(".square").click(function() {
	//Handles user clicks
	if ($(this).css("background-color") == pickedColor) {
		//if you've picked the correct color, display that color in all divs
		if (easy) {
			//only top ones if you're on easy mode
			$(".top").css("background-color", pickedColor);
		}
		else {
			$(".square").css("background-color", pickedColor);
		}
		//Change header background to goal color
		$("header").css("background-color", pickedColor);
		$("#message").text("Correct!");
	}
	else {
		//If you're wrong, make div disappear 
		$(this).css("background-color", "#232323");
		$("#message").text("Try Again!");
	}
})
})

