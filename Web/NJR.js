$(document).ready(function(){
	var images = [
		'https://njaltheknut.github.io/NJR/Web/CompTIA_Security+_ce_certificate.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1014-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1023-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1024-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1051-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1059-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1060-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1068-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1073-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1080-7239257.jpg',
		'https://njaltheknut.github.io/NJR/Web/cert-1081-7239257.jpg',
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

	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#scroll').fadeIn();
		}else{
			$('#scroll').fadeOut();
		}
	});
	$('#scroll').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});

	var e = $("#test").html();
	$(window).scroll(function(){
		$("#test").after(e);
	})
});