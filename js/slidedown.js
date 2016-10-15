$(function() {var dm = $('#testlink ul');var da = $('#testlink');
		dm.hide();
		da.mouseenter(function(){dm.slideDown('slow');});
	da.mouseleave(function(){dm.hide();});
});
