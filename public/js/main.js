$(document).ready(function() {
	$('form[name=new-task').submit(function (event) {
		event.preventDefault();
		$('#todo').append("<li>" + $("input[name=new-task]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></li>");
		$("input[name=new-task]").val("")
	});
});