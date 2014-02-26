$(window).load(function() {
	/*
	* I18N
	*/
	i18n.init({ lng: "vi" }, function(t) {
		// translate nav
		$(".captions").i18n();
		$(".social-box").i18n();
	});

	$('#lang-en').click(function (e) {
		e.preventDefault();
		i18n.setLng('en', function(t) {
			// translate nav
			$(".captions").i18n();
			$(".social-box").i18n();
		});
	});

	$('#lang-vi').click(function (e) {
		e.preventDefault();
		i18n.setLng('vi', function(t) {
			// translate nav
			$(".captions").i18n();
			$(".social-box").i18n();
		});
	});
	
	/*
	* Start animation when page is loaded,
	* and paused when user scroll (on mobiles)
	*/
	var tracker,
		paused = false;

	setAnimation("running");

	$('.content').on("scroll", function (e) {
		if (!paused) paused = true;
		if (tracker) clearTimeout(tracker);

		setAnimation("paused");
		

		tracker = setTimeout(function () {
			setAnimation("running");
			paused = false;
		}, 1000);
	});
});

function setAnimation (playState) {
	$('.slide').each(function (index, item) {
		$(item).css("-webkit-animation-play-state", playState);
		$(item).css("-moz-animation-play-state", playState);
	});
	$('.caption').each(function (index, item) {
		$(item).css("-webkit-animation-play-state", playState);
		$(item).css("-moz-animation-play-state", playState);
	});
}
