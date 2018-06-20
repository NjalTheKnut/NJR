window.onload = function(){
	var welcome = "Welcome to Neal's Page!"
	alert(welcome);

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
	var prevButton = document.getElementById('prevButton');
	prevButton.onclick = function(){
		var slider = document.getElementById('slider');
		num--;
		if(num < 0){
			num = images.length-1;
		}
		slider.src = images[num];
		
	}
	var nextButton = document.getElementById('nextButton');
	nextButton.onclick = function(){
		var slider = document.getElementById('slider');
		num++;
		if(num >= images.length){
			num = 0;
		}
		slider.src = images[num];
	}
}
function goodbye(){
		alert("This link will open in a new tab.");
	}