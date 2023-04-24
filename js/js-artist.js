function artist() {
	gsap.defaults({ease: "none",duration: 2});

	var width = $(window).innerWidth(),
		height = $(window).innerHeight();

	var filterw = $("#col-left").innerWidth();
	document.documentElement.style.setProperty("--filterw",  "".concat(filterw, "px"))

	var artist = $(".artist-container"),
		box = document.querySelectorAll('.artist'),
		boxwidth = $('.artist').innerWidth()+1,
		boxlength = box.length;
	console.log(boxwidth*boxlength)

	gsap.to(artist, {
		scrollTrigger: {
			trigger: ".sticky-container", //"#container"
			start: "top top",
			end: "bottom bottom",
			scrub: 1,
			markers: true,
		},
		x: () => "+=" + -(boxwidth*boxlength-width+filterw)
	});
}


artist();
window.addEventListener('resize', function() {
	artist();
})
