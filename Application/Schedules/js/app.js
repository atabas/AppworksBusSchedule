// Wrap everything in a module to separate code
(function ($) {
	// Keep strict JavaScript standards
	"use strict";

	// Make a Profile class that will load a list of profiles
	var Profiles = function (options) {
		var option;

		// Initialize every default option for the class
		for ( option in Profiles.defaults ) {
			// Use provided options before defaults
			if ( options.hasOwnProperty( option ) ) {
				this[option] = options[option];
			} else {
				this[option] = Profiles.defaults[option];
			}
		}

		// If no base URL is specified, the requests won't work
		if ( this.baseUrl === '' ) {
			console.error( 'Profiles requires a baseUrl parameter.' );
			return;
		}

		// Initialize the class
		this.init();

		// Return the class instance
		return this;
	};

	// Set up default option values
	Profiles.defaults = {
		baseUrl: '',
		sel: 'body'
	};

	// Initialize the class by loading the profiles index
	Profiles.prototype.init = function () {
		this.index();
	};

	// Load a list of schedule from the server and display them
	Profiles.prototype.index = function () {
		var _this = this;

		// Return promise to allow chaining
		return $.ajax({
			url: this.baseUrl + '/BusSchedule/v1/schedules'
		}).
			done(function (data) {
				// Automatically build and show the list of profiles
				$( _this.sel ).html( _this.buildList( data ) );
			}).
			fail(function () {
				_this.displayError( 'There was a problem loading schedule.' );
			});
	};

	// Build a list of profiles
	Profiles.prototype.buildList = function (items) {
		var idx,
				list = [],
				len = items.length;

		// Build each item individually and then join the HTML strings
		for ( idx = 0; idx < len; idx += 1 ) {
			list.push( this.buildItem( items[idx] ) );
		}

		return list.join('');
	};

	// Build a single profile structure
	Profiles.prototype.buildItem = function (item) {
		return (
			'<div class="profile-item">' +
				'<h3 class="profile-header">' + item.city + '</h3>' +
				'<strong>Departure Time:</strong> ' + item.departureTime + '<br>' +
				'<strong>Arrival Time:</strong> ' + item.arrivalTime + '<br>' +
			'</div>'
		);
	};

	// Display an error to the user
	Profiles.prototype.displayError = function (msg) {
		// Clear out the contents of the selector first
		$( this.sel ).
			append( '<div class="error">' + msg + '</div>' ).
			find('.profile-item').remove();
	};

	// Create a new instance of the profiles and display them in #profile-list
	// The baseUrl should be set to the same as the AppWorks Gateway server.
	// In the future this will be available through an included JavaScript
	// library, however we'll use a hardcoded URL for demo purposes.
	var profiles = new Profiles({
		baseUrl: 'http://192.168.32.1:8080',
		sel: '#profile-list'
	});
}).call(this, jQuery);
