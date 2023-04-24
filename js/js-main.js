function root() {
	var vavi = $("#navigation").innerHeight();
	document.documentElement.style.setProperty("--naviheight",  "".concat(vavi, "px"))
}
root()