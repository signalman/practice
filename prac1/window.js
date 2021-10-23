const cq = document.getElementById("c1");
const cw = document.getElementById("c2");
const ce = document.getElementById("c3");
const cr = document.getElementById("c4");

window.addEventListener("resize", function(){
  cq.innerText = `window.screen: ${window.screen.width},${window.screen.height}`;
  cw.innerText = `window.outer: ${window.outerWidth},${window.outerHeight}`;
  ce.innerText = `window.inner: ${window.innerWidth},${window.innerHeight}`;
  cr.cinnerText = `documentElement.clientWidth: ${window.screen.width},${window.screen.height}`;

})