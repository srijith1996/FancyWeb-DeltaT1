
var max;
var MAXHEIGHT = "100%";
var HEIGHT = 100;

function printBar(entry){
	var divlist = document.getElementsByClassName("bars");
	var len = divlist.length;
	if(len == 0){
		document.getElementById("graph").innerHTML = "<div class='bars' style='height: " + MAXHEIGHT + ";'>" + String(entry) + "</div>";
		max = entry;
		setSpace(0);
	} else if(entry > max){
		max = entry;
		var newHeight = 0;
		for(var i=0; i<divlist.length; i++){
			newHeight = (parseInt(divlist[i].innerHTML)/entry)*HEIGHT;
			divlist[i].style.height = String(newHeight) + "%";
		}
		document.getElementById("graph").innerHTML += "<div class='bars' style='height: " + String(HEIGHT) + "%;'>" + String(entry) + "</div>";
		setSpace(i);
	} else {
		var height = (entry/max)*HEIGHT;
		document.getElementById("graph").innerHTML += "<div class='bars' style='height: " + String(height) + "%;'>" + String(entry) + "</div>";
		setSpace(len);
	}
};

function setSpace(index){
	document.getElementsByClassName("bars")[index].style.left = String(50*(index+1)) + "px";
};

function sort(){
	var len = document.getElementsByClassName("bars").length;

	for(var i=1; i<len; i++){
		
		var temp = document.getElementsByClassName("bars")[i].clientHeight;
		var textTemp = document.getElementsByClassName("bars")[i].innerHTML;
		var j = i-1;
		while(j >= 0){
			if(document.getElementsByClassName("bars")[i].clientHeight >= document.getElementsByClassName("bars")[j].clientHeight){
				break;
			}
			j--;
		}

		for(var k=i-1; k>=j+1; k--){
			document.getElementsByClassName("bars")[k+1].style.height = String(document.getElementsByClassName("bars")[k].clientHeight) + "px";
			document.getElementsByClassName("bars")[k+1].innerHTML = document.getElementsByClassName("bars")[k].innerHTML;
		}
		
		document.getElementsByClassName("bars")[j+1].style.height = String(temp) + "px";
		document.getElementsByClassName("bars")[j+1].innerHTML = textTemp;
	}

};

/*Insertion sort algorithm is used */
