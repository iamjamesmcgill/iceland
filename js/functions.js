	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

	$.extend($.lazyLoadXT, {
	  edgeY:  400,
	  srcAttr: 'data-src'
	});
		

		
jQuery(document).ready(function () {
	
	// Smooth Horizontal Scroll with Mousewheel
    this.$container = $("#flex-container");
    var self = this;
    this.$container.on('mousewheel', function(event) {
        self.$container.scrollLeft( self.$container.scrollLeft() - ( event.deltaY * event.deltaFactor ) );
    });
    
		
	// Touch Devices
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$("video").prop("controls",true);
		$( ".mute-btn" ).css("display", "none");
	}
	
	
	// Window <= 768
	if ($(window).width() <= 768) {
		$("video").prop("controls",true);
		$(".nav").addClass("hide slide-left");;
		$(".fade-in").removeClass("fade-in");
		$("#hamburger").removeClass("hide");
		$("body").removeClass("no-scroll");
		$(".col-2").removeClass("col-2");
		$("#hamburger").click(function() {
			$(".nav").removeClass("hide");
			$("html, body, #flex-container").addClass("no-scroll");
		});	
	}
		
	//Active Nav
	$(function() {
	     var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
	     $(".nav a").each(function(){
	          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
	          $(this).addClass("active");
	          else if ($(this).attr("href") == pgurl || $(this).attr("href") != '' ) {
			  $(this).removeClass( "active" );
			  }
	     })
	});
	
	//Mute Video
	$( ".mute-btn" ).click(function() {
		$(this).toggleClass('mute-btn-click');
		var bool = $(this).siblings().prop("muted");
		$(this).siblings().prop("muted",!bool);
	});

	
	//Remove Zoom on Scroll
	var senseSpeed = 20;
	var previousScroll = 0;
	$("#flex-container").scroll(function(event){
	   var scroller = $(this).scrollLeft();
	   if (scroller-senseSpeed > previousScroll){
	      $( "img" ).removeClass( "zoom" );
	   } else if (scroller+senseSpeed < previousScroll) {
	      $( "img" ).removeClass( "zoom" );
	   } 
	   previousScroll = scroller;
	});
	
	// Toggle Hamburger on Scroll
	$( "#hamburger" ).click(function() {
		$( ".nav" ).toggleClass("slide-left");
		$( "#hamburger" ).toggleClass("content");
	});
	
	//Hide Nav on Scroll
	$element = $('.nav'),
	className = 'slide-left';
	if ($(window).width() > 768) {
		$("#flex-container").scroll(function() {
			if ( $("#flex-container").scrollLeft() >= 110 ) {
				$( "#hamburger" ).removeClass("hide content");
				$element.addClass(className);
			} else {
				$( "#hamburger" ).addClass("hide content");	
				 $element.removeClass(className);	
			}  
		});
	}	

	//Show Nav on Scroll End, trouble with or condition
    $("#flex-container").on("scroll", function () {
	    var cur = $(this).scrollLeft();
	    var max = $(this)[0].scrollWidth - $(this).width();
	    if (cur == max) {
		    $('.nav').toggleClass('slide-left');
		    $( "#hamburger" ).addClass("hide content");
		} else {
                
         }
    });	
		
	//Zoom Image
	if ($(window).width() > 768) {
		$( "img" ).click(function() {	
			$( this ).toggleClass("zoom");
		});
	}	
	
	//Lazy Load
	$("#flex-container img.lazy,#flex-container video.lazy").show().lazyload({
	    effect : "fadeIn",
	    threshold : 500
      });
	  
	$("#flex-container img.lazy,#flex-container video.lazy").show().lazyload({
	     container: $("#flex-container")
	});
	
	$.lazyLoadXT.scrollContainer = '#flex-container';

	
});