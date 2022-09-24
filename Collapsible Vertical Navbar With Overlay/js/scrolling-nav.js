

$(document).ready(function(){

$('.btn-expand-collapse').click(function(e) {
        $('.navbar-primary').toggleClass('collapsed wow fadeInRight animated');
});

var wow = new WOW(
	  {
	    boxClass:     'wow',      
	    animateClass: 'animated', 
	    offset:       0,          
	    mobile:       true,       
	    live:         true,      
	    callback:     function(box) {
	    }
	  }
	);
	wow.init();

});