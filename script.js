// let time = 24;
let time = (new Date).getHours();
// let time = (new Date).getSeconds();
let daylight = time>=5 && time<=17 ? true : false;
let am = time >= 0 && time <= 12 ? true : false;
let myHeight = document.documentElement.clientHeight;
let sun = document.getElementById("sun");
let sunDay = document.getElementById("sunDay");


document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // do nothing
    console.log('hidden');
  } else {
    // reset time and adjust position of the sun
    console.log('shown', time, daylight);
    setit();
  }
});

function normalize(val, max, min) { return (val - min) / (max - min); }

function setit() {
  let sunHeight = sun.clientHeight;
  let sunRatio = time / sunHeight;
  let sunPosition = ((time / 24) * 100);
  console.log(am, daylight, time, sunRatio, sunHeight, sunPosition);

  sun.style.background = `radial-gradient(circle at 50% ${sunPosition}%, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)`;

  sunDay.style.background = `radial-gradient(circle at 50% ${sunPosition}%, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)`;


  if (am) {
    console.log(normalize(time, 12, 0));
    document.documentElement.style.setProperty('--opaSun', normalize(time, 0, 12));
    document.documentElement.style.setProperty('--opaSky', normalize(time, 12, 0));
  } else {
    console.log(normalize(time, 12, 24));
    document.documentElement.style.setProperty('--opaSun', normalize(time, 24, 12));
    document.documentElement.style.setProperty('--opaSky', normalize(time, 12, 24));
  }

  if (daylight) {
    // console.log(normalize(time, 12, 1));
    // console.log(normalize(time, 18, 24));
  //   document.documentElement.style.setProperty('--opaSun', sunRatio);
  } else {
    // console.log(normalize(time, 12, 0));
  //   document.documentElement.style.setProperty('--opaSun', sunRatio);
  }
};

setit();
