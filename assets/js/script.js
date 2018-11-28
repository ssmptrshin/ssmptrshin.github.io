$(document).ready(function() {
	$(function() {
		setTimeout(function() {
			$('.fly-in-text').removeClass('hidden');
		}, 200);
	});

	function mod(n, m) {
		return ((n % m) + m) % m;
	}

	const distanceToNextImage = -700;
	let currentImageNumber = 0;

	$("#right").click(function() {
		console.log(currentImageNumber);
		currentImageNumber += 1;
		$("#carousel-strip").css("left", String(mod(currentImageNumber, 15) * distanceToNextImage)+ "px");
		console.log(String(currentImageNumber * distanceToNextImage)+ "px");
	});

	$("#left").click(function() {

		currentImageNumber -= 1;
		console.log(currentImageNumber%15)
		$("#carousel-strip").css("left", String(mod(currentImageNumber, 15) * distanceToNextImage)+ "px") ;

	});


	$(".vid-item").click(function(e){
		e.preventDefault();
		$("#player").attr("src", "https://www.youtube.com/embed/" + $(this).attr("id"));
		console.log($(this).attr("id"));
	});


});