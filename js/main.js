$(document).ready(function() {
	// THUMB DELAY --------------------->
		$(function() {
			$('.da-thumbs > li').hoverdir();
				hoverDelay	: 20;
		});

		 // -------------------- DOTS --------------------->
		function TAQ_dotnav (url) {
			window.location = url;
		}
		
		// AIR 2014 -->
		$('#hotspringsBridgeport').bind('click', function() {
			TAQ_dotnav("hotsprings/bridgeport/index.html");
		});
		
		$('#travellogHongKong').bind('click', function() {
			TAQ_dotnav("travellog/hongkong/index.html");
		});

		// SOLSTICE 2013 -->
		$('#fieldworkMckenna').bind('click', function() {
			TAQ_dotnav("fieldwork/mckenna/index.html");
		});

		$('#beautyFtGreen').bind('click', function() {
			TAQ_dotnav("beauty/ftgreen/index.html");
		});

		$('#profileWrenn').bind('click', function() {
			TAQ_dotnav("profile/wrenn/index.html");
		});

		$('#travellogCabrera').bind('click', function() {
			TAQ_dotnav("travellog/cabrera/index.html");
		});

		$('#forageSaltPoint').bind('click', function() {
			TAQ_dotnav("forage/saltpoint/index.html");
		});


		// SUMMER 2013 -->
		$('#fieldworkTahiti').bind('click', function() {
			TAQ_dotnav("fieldwork/tahiti/index.html");
		});

		$('#makerChristenson').bind('click', function() {
			TAQ_dotnav("maker/chrischristenson/index.html");
		});

		$('#travellogSantorini').bind('click', function() {
			TAQ_dotnav("travellog/santorini/index.html");
		});

		$('#familytravelFinland').bind('click', function() {
			TAQ_dotnav("familytravel/finland/index.html");
		});

		$('#beautyBrooklyn').bind('click', function() {
			TAQ_dotnav("beauty/brooklyn/index.html");
		});


		// SPRING 2013 -->
		$('#roadtripSantaBarbara').bind('click', function() {
			TAQ_dotnav("roadtrip/index.html");
		});
		$('#travellogSwitzerland').bind('click', function() {
			TAQ_dotnav("travellog/index.html");
		});
		$('#hotspringsCalistoga').bind('click', function() {
			TAQ_dotnav("hotsprings/calistoga/index.html");
		});

		// SHARE POP --------------------->
		var popupWindow = null;
		function centeredPopup(url,winName,w,h,scroll)
		{
			LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
			TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
			settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
			popupWindow = window.open(url,winName,settings)
		}

		// MAILCHIMP ---------------------->
		$('#share-menu .newsletter').click(function(event) {

			$('#newsletter-form').show();
			event.preventDefault();
			return false;
		});

		$('#newsletter-form .close').click(function(event) {

			$('#newsletter-form').hide();
			return false;
		});

		$('#newsletter-form .newsletter-submit').click(function(event){

			$('#newsletter-form form').submit();
			return false;
		});

		$('#newsletter-form form').submit(function(event){

			event.preventDefault();

			$.ajax({
 				url: $('#newsletter-form form').attr('action'),
 				type: 'POST',
 				data: {
 					email: $('#subscribe-email').val()
 				},
 				success: function(data){

				   if (data.code == 'OK') {

 	 					$('#newsletter-form span').html(data.message).css('color', 'green');
					   $('#subscribe-email').val('');
					}
					else {

 	 					$('#newsletter-form span').html(data.message).css('color', 'red');
					}
 				},
 				error: function() {
	 					$('#newsletter span').html('Sorry, an error occurred.').css('color', 'red');
 				}
 			});

			return false;
		});
});