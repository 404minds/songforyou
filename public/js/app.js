(function init() {
	var Constants = {
		SC_Client_Id: '9b798eddaab7753e20d6b7ee62d127e1'
	};
	var track = {
		data: null,
		stream: null
	};

	init();

	function init () {
		initSC();

		registerEventHandlers();

		getTrackData('116529167', setTrackDetails);
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
	};

	function getTrackData (id, callback) {
		SC.get("/tracks/" + id, function (sound) {
			track.data = sound;
			callback();
		});
	};

	function setTrackDetails () {
		$(".song-title").html(track.data.title);
		$(".song-author span").html(track.data.user.username);
		$(".song-singer").html("");
		$(".song-duration").html(track.data.duration);
	};

	// Stream a track by ID
	function streamTrackById(id, callback) {
		SC.stream("/tracks/" + id, function(sound){
			track.stream = sound;
			callback();
		});
	};

	function playTrack() {
		track.stream.play();
	};

	function pauseTrack() {
		track.stream.pause();
	};

	function toggleButtons () {
		
	};
}
)();