$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	$('#fullpage').fullpage({
				scrollingSpeed: 400,
				afterLoad: function(anchorLink, index){
					//section 2
					if(index == 2){
						//moving the image
						$('#section1').find('.first-in').delay(10).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
						$('#section1').find('.second-in').delay(500).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
						$('#section1').find('.third-in').delay(1000).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
						$('#section1').find('.fourth-in').delay(1500).animate({
							left: '0%'
						}, 1500, 'easeOutExpo');
					}
				}
	});
	$('#moveSectionDown').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSectionDown();
	});
});