/* 
	Author: Kaique da Silva <kaique.developer@gmail.com>
*/

var Piglet = (function ( window, $ ) {
	// Piglet Application namespace
	
	// Internal main function
	var _ = function () {};
	// Console log shortcut
	var log = function ( input ) {
		return console.log( input );
	};
	// Alert
	var enableAlert = function ( element, speed ) {
		var output = false;

		if ( element && speed ) {
			var $alert = $( element );

			$alert.find('.close').bind('click', function () {
				$alert.fadeTo( speed , 0, function () {
					$(this).alert('close');
					output = true;
				});
			});
		}

		return output;
	};

	_.prototype.tests = function () {
		console.assert( enableAlert() === false, 'Alert flash testing for empty values' );
	};

	_.prototype.run = function () {
		// Run main fuction of app
		var self = this;
		// Enable flash alert
		enableAlert( '#flash-alert', 'normal' );

		return self;
	};

	return new _();
} ( window, jQuery ));


// Execute main app
$(function () {
	Piglet.tests();
	Piglet.run();
});