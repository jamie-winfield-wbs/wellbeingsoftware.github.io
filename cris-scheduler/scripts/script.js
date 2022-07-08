// Force scroll top on page load
$(window).on('beforeunload',
    function(){
        $(this).scrollTop(0);
    }
);

// Drawer toggle
$(".button-hamburger").click(function(){
    $(".drawer").toggleClass("drawer-active");
});

// Tabs
$('.tab').click( function() {
	var tabID = $(this).attr('data-tab');
	$(this).addClass('tab-active').siblings().removeClass('tab-active');
	$('#tab-panel-' + tabID).addClass('tab-panel-active').siblings().removeClass('tab-panel-active');
});

// Tooltip
$("[data-tooltip]").on("mouseover",function(){
    $(this).find('.tooltip').show();
})
  
$("[data-tooltip]").on("mouseout",function(){
    $(this).find('.tooltip').hide();
})

$('html').click(function(e) {                    
    if(!$(e.target).hasClass("[data-tooltip], .tooltip") )
    {
        $('.tooltip').hide().removeClass('block');                
    }
});

$('.section-body').scroll(function(){
    $(this).find('.tooltip').hide();
});