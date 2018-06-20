function func1(str){
	alert(str);
}

var message = "Welcome to Neal's Page!"
window.onload(func1(message));

function func2(){
	var leavePageMessage ="This link will open in a new tab."
	func1(leavePageMessage);
}

var images = [
	"cert-1014-7239257.jpg",
	"cert-1023-7239257.jpg",
	"cert-1024-7239257.jpg",
	"cert-1051-7239257.jpg",
	"cert-1059-7239257.jpg",
	"cert-1060-7239257.jpg",
	"cert-1068-7239257.jpg",
	"cert-1073-7239257.jpg",
	"cert-1080-7239257.jpg",
	"cert-1081-7239257.jpg"
];
var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");
var num = 0;
prevButton.onclick = next(){
	var slider = document.getElementById("slider");
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider.src = images[num];
}
nextButton.onclick = prev(){
	var slider = document.getElementById("slider");
	num--;
	if(num < 0){
		num = images.length-1;
	}
	slider.src = images[num];
}