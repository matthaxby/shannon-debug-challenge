$(document).ready(function() {
	
	
	$('.button').click(function() {
		
		$('.programming_career').css('display', 'none');
		$('.gif').css('display', 'block');
		$('.gif img').attr("src", "http://i.imgur.com/xilCM.gif" + new Date().getTime());
		
		
	});
	
	$('.close').click(function(){
		$('.programming_career').fadeIn('slow');
		$('.gif').css('display', 'none');
		

	});
	
});


