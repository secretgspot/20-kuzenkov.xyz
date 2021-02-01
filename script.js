function move(e) {
	motion(e.pageX, e.pageY, .1)
}

function motion(e, a, n) {
	o.mouse.x = (e - o.size.x / 2) * n,
	o.mouse.y = (a - o.size.x / 2) * n,
	mainEl.style.oTransform = "rotateX(" + .05 * o.mouse.y + "deg) rotateY(" + o.mouse.x * -.05 + "deg) translateZ(0px)",
	mainEl.style.mozTransform = "rotateX(" + .05 * o.mouse.y + "deg) rotateY(" + o.mouse.x * -.05 + "deg) translateZ(0px)",
	mainEl.style.webkitTransform = "rotateX(" + .05 * o.mouse.y + "deg) rotateY(" + o.mouse.x * -.05 + "deg) translateZ(0px)",
	mainEl.style.transform = "rotateX(" + .05 * o.mouse.y + "deg) rotateY(" + o.mouse.x * -.05 + "deg) translateZ(0px)",
  document.documentElement.style.setProperty('--bgPos', Math.abs(o.mouse.y) + '% ' + Math.abs(o.mouse.x) + '%')
}

var o = {
	size: {
		x: window.innerWidth,
		y: window.innerHeight
	},
	offscreen_fac: 1,
	mouse: {
		x: 0,
		y: 0
	},
	padding: {
		x: .2,
		y: .2
	}
},
	ua = navigator.userAgent.toLowerCase(),
	isAndroid = ua.indexOf("android") > -1,
	mainEl = document.getElementById("main");

// isAndroid ? console.log("isAndroid") : console.log("is not android"),
// window.DeviceOrientationEvent && console.log("doeSupported"),
window.addEventListener("mousemove", move);