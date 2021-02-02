const	ua = navigator.userAgent.toLowerCase();
const	isAndroid = ua.indexOf("android") > -1;
const	mainEl = document.getElementById("main");

const o = {
	size: {
		x: window.innerWidth,
		y: window.innerHeight
	},
	offscreen_fac: .1,
	mouse: {
		x: 0,
		y: 0
	},
	padding: {
		x: .2,
		y: .2
	}
};

function move(e) {
	motion(e.pageX, e.pageY, .1);
}

function motion(e, a, n) {
	o.mouse.x = (e - o.size.x / 2) * n;
	o.mouse.y = (a - o.size.x / 2) * n;

	mainEl.style.transform = `rotateX(${-o.offscreen_fac * o.mouse.y}deg) rotateY(${o.mouse.x * o.offscreen_fac}deg) translateZ(0px)`;
  document.documentElement.style.setProperty('--bgPos', Math.abs(o.mouse.y) + '% ' + Math.abs(o.mouse.x) + '%');
}

// isAndroid ? console.log("isAndroid") : console.log("is not android"),
// window.DeviceOrientationEvent && console.log("doeSupported"),
window.addEventListener("mousemove", move);