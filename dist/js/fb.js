$(function(){
	$('#face-slider').hover(
		function(){	$('#face-slider').stop().animate({"left": "0"}, 1000); } ,
		function(){ $('#face-slider').stop().animate({"left": "-292px"}, 1000); }
	);
});
