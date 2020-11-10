// JavaScript Document

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});

//$('navLinks').click(function(){
//	$(this).toggleClass('active');
//    console.log("Clicked menu");
//    $("#mainListDiv").toggleClass("show_list");
//    $("#mainListDiv").fadeIn();
//});
