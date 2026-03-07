/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

	// Ship Animation.
		var $ship = $('.ship-image');

		if ($ship.length > 0) {

			var shipX = -200,
				shipY = 0,
				shipSpeed = 2,
				shipRotation = 0,
				waveAmplitude = 10,
				waveFrequency = 0.02,
				time = 0;

			function animateShip() {

				time++;

				// Move horizontally.
				shipX += shipSpeed;

				// Wave effect (smarter: vertical bobbing + rotation).
				shipY = Math.sin(time * waveFrequency) * waveAmplitude;
				shipRotation = Math.cos(time * waveFrequency) * 3;

				// Apply transforms.
				$ship.css('transform', 'translateX(' + (shipX + 200) + 'px) translateY(' + shipY + 'px) rotate(' + shipRotation + 'deg) scaleX(-1)');

				// Reset if off screen right.
				if (shipX > $window.width() + 100) {

					shipX = -400; // Reset way back to simulate a delay.
					
					// Randomize "smart" parameters for next pass.
					shipSpeed = 1 + Math.random() * 2;
					waveAmplitude = 5 + Math.random() * 15;
					waveFrequency = 0.01 + Math.random() * 0.04;

				}

				requestAnimationFrame(animateShip);

			}

			// Start animation.
			requestAnimationFrame(animateShip);

		}

})(jQuery);