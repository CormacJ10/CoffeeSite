$(document).ready(function(){
	/*$("nav li").hover(function(){
		$(this)
		.stop(true)
		.animate(
		{height:"210px"},
		{duration: 500, easing:"easeOutBounce"}
		)
	}, 
	function(){
		$(this)
		.stop(true)
		.animate(
		{height:"60px"},
		{duration: 500, easing:"easeOutCirc"})
	});*/
	$('p.info').hide();
	$('p.info1').hide();
	$('p.info2').hide();
	$('section.img-left').click(function() {
		$('p.info').fadeToggle(500);
	});
	$('section.img-left1').click(function() {
		$('p.info2').fadeToggle(500);
	});
	$('section.img-right').click(function() {
		$('p.info1').fadeToggle(500);
	});
});