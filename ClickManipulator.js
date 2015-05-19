var getRandomColor = function(){
	return ('background-color: #' + (Math.floor(Math.random()*16777215)).toString(16) + ';');
}

var diva = document.getElementById('box_one');

diva.addEventListener('click', function (event){
	location.reload();
	//var prevColor1 = 'background-color: #' + document.getElementById('box_one').getAttribute('color') + ';';
	//document.getElementById('box_two').setAttribute('style', getRandomColor());
	//document.getElementById('box_one').setAttribute('style', prevColor1);
});

var divb = document.getElementById('box_one');

divb.addEventListener('click', function (event){
	var prevColor2 = 'background-color: #' + document.getElementById('box_two').getAttribute('color') + ';';
	document.getElementById('box_one').setAttribute('style', getRandomColor());
	document.getElementById('box_two').setAttribute('style', prevColor2);
});
