function getNumber(min, max) {
	var min = 100;
	var max = 900;
	//var randomNum = Math.random() * (max - min) + min; // Número con decimal
	var randomNum = Math.floor(Math.random() * (max - min)) + min; // Número entero
	document.getElementById("number").innerHTML=randomNum;
}