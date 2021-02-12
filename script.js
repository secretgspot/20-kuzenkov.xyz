const	ua = navigator.userAgent.toLowerCase();
const	isAndroid = ua.indexOf("android") > -1;
const	mainEl = document.getElementById("main");

// let time = 12;
let time = (new Date).getHours() + '.' + (new Date).getMinutes();
let sunRise = 4;
let sunSet = 17;
let daylight = time>= sunRise && time<= sunSet ? true : false;
let am = time >= 0 && time <= 12 ? true : false;

let sun = document.getElementById("sun");
let halo = document.getElementById("halo");

const normalisedSun = (time >= 3 && time <= 20) ? Math.abs(Math.sin((time - 9) / 27 * Math.PI)) : 0;
const normalisedSky = (time >= 5 && time <= 18) ? Math.sin((time - 5) / 13 * Math.PI) : 0;

const o = {
  size: {
    x: window.innerWidth,
    y: window.innerHeight
  },
  offscreen_fac: .3,
  mouse: {
    x: 0,
    y: 0
  },
  padding: {
    x: .2,
    y: .2
  }
};

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // do nothing
    // console.log('hidden');
  } else {
    // reset time and adjust position of the sun
    // console.log('shown', time, daylight);
    set();
  }
});

function set() {
  let sunPosition = ((time / 24) * 100);
  console.log(`sky:${normalisedSky} | sun:${normalisedSun} | sunPosition:${sunPosition}%`);
  console.log(`${time} | ${am ? 'AM' : 'PM'} | ${daylight ? 'DAY' : 'NIGHT'}`);

  sun.style.background = `radial-gradient(circle at 50% ${sunPosition}%, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)`;

  halo.style.background = `radial-gradient(circle at 50% ${sunPosition}%, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)`;

  document.documentElement.style.setProperty('--opaSun', normalisedSun);
  document.documentElement.style.setProperty('--opaSky', normalisedSky);
};

set();

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