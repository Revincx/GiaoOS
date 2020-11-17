// JavaScript Document

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
onSizeChanged();

$(window).resize(function(){
	onSizeChanged();
});

function onSizeChanged(){
	if($(window).width()<900){
		$('#videos').removeClass('justify-content-between')
		$('#videos').addClass('justify-content-center')
	}
	else{
		$('#videos').addClass('justify-content-between')
		$('#videos').removeClass('justify-content-center')
	}
};

//$('navLinks').click(function(){
//	$(this).toggleClass('active');
//    console.log("Clicked menu");
//    $("#mainListDiv").toggleClass("show_list");
//    $("#mainListDiv").fadeIn();
//});
