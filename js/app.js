(function init() {
	var Constants = {
		SC_Client_Id: '9b798eddaab7753e20d6b7ee62d127e1'
	};
	var track = null;

	init();

	function init () {
		initSC();

		registerEventHandlers();

		streamTrackById('116529167', playTrack);
	};

	function initSC () {
		SC.initialize({
			client_id: Constants.SC_Client_Id
		});
	};

	function registerEventHandlers () {
		$(".btn-play").on("click", playTrack);
		$(".btn-pause").on("click", pauseTrack);
	}

	// Stream a track by ID
	function streamTrackById(id, callback) {
		SC.stream("/tracks/" + id, function(sound){
			track = sound;
			callback();
		});
	};

	function playTrack() {
		track.play();
	};

	function pauseTrack() {
		track.pause();
	};

	function toggleButtons () {
		
	};
}
)();