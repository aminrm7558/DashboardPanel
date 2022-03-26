// const btnLeft = document.querySelector(".b-left");
// const btnRight = document.querySelector(".b-right");
// btnLeft.addEventListener("click", function () {
//   btnLeft.classList.toggle("active");
//   document.querySelector("body").style.background = "white";
//   if (btnLeft.classList[1] !== "active") {
//     document.querySelector("body").style.background = "#111";
//   }
// });

const DarkLightMode = document.querySelector(".dark-light-mode");
const Body = document.querySelector("body");
DarkLightMode.addEventListener("click", function () {
  Body.classList.toggle("dark");
});
const linkItem = document.querySelectorAll(".link-item");
linkItem.forEach((item) => {
  item.addEventListener("click", function (event) {
    item.classList.toggle("active");
    event.preventDefault();
    
  });
});
const sidebar = document.querySelector(".sidebar");
const TopPanel = document.querySelector(".top-of-panel");
const hamburger = document.querySelector(".fa-bars");
const Dashboard = document.querySelector(".dashboard");
hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("cl-op");
  TopPanel.classList.toggle("cl-op");
  Dashboard.classList.toggle("cl-op");
});
const clock = document.querySelector(".clock");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");
setInterval(timer, 1000);
function timer() {
  let myDate = new Date();
  let h = myDate.getHours();
  let m = myDate.getMinutes();
  let s = myDate.getSeconds();
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  Hours.innerText = h;
  Minutes.innerText = m;
  Seconds.innerText = s;
}

