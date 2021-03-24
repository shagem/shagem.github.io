
//fade command
$(document).ready(function(){
  $(".hidden").hide().fadeIn(3000);
});



//Work page js
$(document).ready(function(){
  $("#web_design_content").hide();
  $("#digital_art_content").hide();
  $("#photography_content").hide();
});

$(document).ready(function(){
	$("#web_design").click(function(){
		$("#web_design_content").toggle();
		});
});

$(document).ready(function(){
	$("#photography").click(function(){
		$("#photography_content").toggle();
		});
});

$(document).ready(function(){
	$("#digital_art").click(function(){
		$("#digital_art_content").toggle();
		});
});

