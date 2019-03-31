$(function	()	{
	//scrollable sidebar
	$('.scrollable-sidebar').slimScroll({
		
		size: '0px'
	});
	


	//Collapsible Sidebar Menu
	$('.sidebar-menu .openable > a').click(function()	{
		
		if(!$('aside').hasClass('sidebar-mini') || Modernizr.mq('(max-width: 991px)'))	{
			if( $(this).parent().children('.submenu').is(':hidden') ) {
				$(this).parent().siblings().removeClass('open').children('.submenu').slideUp(200);
				$(this).parent().addClass('open').children('.submenu').slideDown(200);
			}
			else	{
				$(this).parent().removeClass('open').children('.submenu').slideUp(200);
			}
		}
		
		return false;
	});



	//Open active menu
	if(!$('.sidebar-menu').hasClass('sidebar-mini') || Modernizr.mq('(max-width: 767px)'))	{
		$('.openable.open').children('.submenu').slideDown(200);
	}
	


	//Humburger Icon For Computer
	$('#sidebarToggleLG').click(function()	{
		$('.top-nav').toggleClass('sidebar-mini');
		$('aside').toggleClass('sidebar-mini');
		$('.main-container').toggleClass('sidebar-mini');
							
	});
	

	//Humburger Icon For Pad/Phone
	$('#sidebarToggleSM').click(function()	{
		$('aside').toggleClass('active');
		$('.wrapper').toggleClass('display-left');
	});
	

	$('.dropdown-menu input').click(function(e) {
        e.stopPropagation(); 
        //This will prevent the event from bubbling up and close the dropdown when you type/click on text boxes.
    });
	
	

	//Scroll to Top
	$(".scroll-to-top").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		 return false;
	});


});



// Toggle Scroll to Top button
$(window).scroll(function(){
		
	 var position = $(window).scrollTop();
	
	 if(position >= 200)	{
		$('.scroll-to-top').addClass('active')
	 }
	 else	{
		$('.scroll-to-top').removeClass('active')
	 }
});



	function myFunction(obj) {
        alert(obj.getAttribute("href"));
        return false;
    }

