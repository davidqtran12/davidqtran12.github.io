$(document).ready(function() {     
    
    
    //skill hover
    $("[rel='tooltip']").tooltip();    
 
    $('.skilly').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
    // navigation click actions 
    $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
    
	// scroll to top action
	$('.scroll-top').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop:0}, 'slow'); 		
	});
	// mobile nav toggle
	$('#nav-toggle').on('click', function (event) {
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});
    
    
    toggleSlides();

                             
});

jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).siblings().slideUp(400);
        jQuery('.tabs ' + currentAttrValue).delay(400).slideDown(400);
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});


//toggler
function toggleSlides(){
	$('.toggler').click(function(event){
		var id=$(this).attr('id');
		var widgetId=id.substring(id.indexOf('-')+1,id.length);
		$('#'+widgetId).slideToggle();
		$(this).toggleClass('sliderExpanded');
		$('.closeSlider').click(function(){
				$(this).parent().hide('slow');
				var relatedToggler='toggler-'+$(this).parent().attr('id');
				$('#'+relatedToggler).removeClass('sliderExpanded');
		});
	});
};

// scroll function
function scrollToID(id, speed){
	var offSet = 135;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}