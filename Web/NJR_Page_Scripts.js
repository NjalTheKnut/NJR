var message = "Welcome to Neal's Page!"
function func1(str){
	alert(str);
}
function func2(){
	var leavePageMessage ="This link will open in a new tab."
	func1(leavePageMessage);
}
window.onload(func1(message));

var images = [
	'https://njaltheknut.github.io/NJR/Web/cert-1014-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1023-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1024-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1051-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1059-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1060-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1068-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1073-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1080-7239257.jpg',
	'https://njaltheknut.github.io/NJR/Web/cert-1081-7239257.jpg'
];
var num = 0;
function next(){
	var slider = document.getElementById('slider');
	num++;
	if(num >= images.length){
		num = 0;
	}
	slider.src = images[num];
}
function prev(){
	var slider = document.getElementById('slider');
	num--;
	if(num < 0){
		num = images.length-1;
	}
	slider.src = images[num];
}