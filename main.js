$(document).on('ready', function() {

	$('.form').hide();

  	$('#profilebtn').on('click', function(){
  		$(this).hide();
  		$('.form').slideDown('slow');
  		$('#editname').val($('#name').text());
		$('#editbio').val($('#bio').text());
		$('#editbooks').val($('#books').text());
		$('#editjslib').val($('#jslib').text());

  	});

  	$('#editbtn').on('click', function(){
  		$('.form').slideUp('slow');
  		$('#profilebtn').show();
  		$('#name').text($('#editname').val());
		$('#bio').text($('#editbio').val());
		$('#books').text($('#editbooks').val());
		$('#jslib').text($('#editjslib').val());
  	});

  	
});