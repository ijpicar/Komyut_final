$('.container-body').css('background','url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/kr84rpmcb0w-khara-woods-min.jpg)')
.css('background-position','center center').css('background-size','cover').css('background-attachment','fixed')
  .waitForImages(function() {
	$('.container-body').fadeIn("slow");
	$('.preloader').fadeOut("slow");
}, $.noop, true);