// let time = 1;
let time = (new Date).getHours();
let daylight = time>=5 && time<=17 ? true : false;
let myHeight = document.documentElement.clientHeight;

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

function setit() {

  let sky = document.getElementById("sun");
  let skyHeight = sky.clientHeight;
  let skyRatio = time / skyHeight;
  // document.getElementById("sunDay").style.opacity = (time/myHeight);
  // document.getElementById("sky").style.opacity = Math.max((time/myHeight), 0.99);

  document.getElementById("sun").style.background = 'radial-gradient(circle at 50% ' + ((time / 24) * 100) + '%, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';

  document.getElementById("sunDay").style.background = 'radial-gradient(circle at 50% ' + ((time / 24) * 100)  + '%, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';

  if (daylight) {
    document.documentElement.style.setProperty('--opa', (time / 24));
  } else {
    document.documentElement.style.setProperty('--opa', ((time / 24) / 2));
  }
};

setit();
