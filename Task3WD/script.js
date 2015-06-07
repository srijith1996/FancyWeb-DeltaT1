
//reference to the circle which is going to move
var circle = document.getElementById("circle");

//reference to the footer statusbar
var stat = document.getElementById("statusbar");

document.onkeydown = function(event){

	/* The keyboard arrow events can be captured by the DOM 
		and the DOM return a key-code of the key pressed. Using
		the arrow keys is really simple as they are associated
		with codes 37 to 40 in the order left, up, right, and 
		down */

	// store the key-code of the pressed key
	var keycode = event.which | event.keyCode;

	//get the values by which the circle is down from the roof
	//and away from the left wall
	var circleLeft = parseInt(circle.offsetLeft);
	var circleTop = parseInt(circle.offsetTop);

	//check for the keyboard input code
	switch(keycode){

		case 37: circle.style.left = String(circleLeft - 10) + "px";
				stat.innerHTML = "Left Arrow";
				break;
		case 38: circle.style.top = String(circleTop - 10) + "px"; 
				stat.innerHTML = "Up Arrow";
				break;
		case 39: circle.style.left = String(circleLeft + 10) + "px"; 
				stat.innerHTML = "Right Arrow";
				break;
		case 40: circle.style.top = String(circleTop + 10) + "px"; 
				stat.innerHTML = "Down Arrow";
				break;
		default: stat.innerHTML = "Not an arrow Key";

	}

	if(typeof(Storage) != "undefined"){
		localStorage.setItem("Left", circle.offsetLeft);
		localStorage.setItem("Top", circle.offsetTop);
		stat.innerHTML += " | Stored object position.";
	}else{
		alert("Web storage support not found on your browser. Sorry :(")
	}

};

document.getElementsByTagName("body")[0].onload = function(event){

	if(typeof(Storage) != "undefined"){
		circle.style.left = localStorage.getItem("Left") + "px";
		circle.style.top = localStorage.getItem("Top") + "px";
		stat.innerHTML = "Retrieved Object position.";
	}else{
		alert("Web storage support not found on your browser. Sorry :(")
	}
};