$(function(){
	$('.info').click(function() {
		$('.info_box').toggleClass('open');
	});

	$('.pr_bar').each(function(){
		let width = $(this).data('skill'); // В переменную записывается ширина
		$(this).css('width', width + '%');
	});

	$('#menu_btn').click(function() {
		$('.main_nav').toggleClass('open');
	});
});