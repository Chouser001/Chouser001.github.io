$(function(){
// the function after the click event
// is called an anonymous function NO NAME 

	$('#add').on("click", function(){
		var song = $("#song").val();
 // .val is getting user input form input field
		var insertedSongName = "<li>" + song + "</li>";
		$("#song-list").append(insertedSongName);
		$("#song").val(" ");
	});	

	
});
