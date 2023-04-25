var filterw = $("#col-left").innerWidth(),
	width = $(window).innerWidth(),
	height = $(window).innerHeight(),
	middle = (width - filterw)/2 + filterw;
document.documentElement.style.setProperty("--filterw",  "".concat(filterw, "px"))
// $("#hrcode").css('left', ''+(middle)+'px');

var artist = $(".artist-container"),
	box = document.querySelectorAll('.artist'),
	boxwidth = $('.artist').innerWidth()+1,
	boxnth = box.length,
	boxlength = boxnth*boxwidth;
console.log(boxnth);

var middlecontainer = (boxlength-(width-filterw))/2;
gsap.set(artist, {
	x: () => "+=" + -middlecontainer
})


window.addEventListener('mousemove', function() {

	dx = event.pageX;
	rad = 300;
	coreleft = filterw+rad;
	coreright = width-rad;
	mouse = dx-coreleft;
	left = mouse/coreleft;
	right = dx/coreright;
	dis = width-filterw-2*rad;
	tilt = mouse/dis;

	// $("#hr").css('left', ' ' + dx + 'px ');

	if (left >= 0 && right <= 1) {
		if (!$('.artist').hasClass('middle')) {
			gsap.to(artist, {
				x: -tilt*(boxlength-width+filterw),
			})
		}
	}
	
})

window.addEventListener('load', function() {

	$(".artist").click(function() {
		$(this).addClass('middle');
		$(".artist").addClass('transform');
		$(".artist").css('pointerEvents', 'none');
		gsap.to("#col-left", {
			xPercent: -100,
			ease: Power2.out,
			duration: 1,
			delay: .5,
		})
		gsap.to("#navigation", {
			yPercent: -100,
			ease: Power2.out,
			duration: 1,
			delay: .5,
		})

		test = $('.artist.middle').offset().left;
		console.log(test);
		gsap.to('.artist.middle', {
			x: -(test),
			ease: "none",
			duration: "none",
		})
	})
})

const links = document.querySelectorAll("a[prefetch]");

	// Loop through each a tag
links.forEach((link) => {
	// Add click event listener
	link.addEventListener("click", function (e) {
			// Prevent default behavior
		e.preventDefault();
			// Get the href attribute value
		const href = this.getAttribute("href");
		const prefetchLink = document.createElement('link');
		prefetchLink.rel = 'prefetch';
		prefetchLink.href = href;
		document.head.appendChild(prefetchLink);
		// Delay for 500ms
		setTimeout(() => {
			// Redirect to the href value
			window.location.href = href;
		}, 2500);
	});
});