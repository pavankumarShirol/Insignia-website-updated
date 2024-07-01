let section = document.querySelector("timer");
//icons = document.querySelector(".icons");

// icons.onclick = ()=>{
 // section.classList.toggle("dark");
//}

// creating a function and calling it in every seconds
setInterval(()=>{

  let now = new Date();
  
var eventDate = new Date("26 May 2023");
 
var eventTime= eventDate.getTime();


var currentTiime =now.getTime();

var renTime = eventTime- currentTiime;

var s =Math.floor(renTime / 1000);



var m =Math.floor(s/60);

var h =Math.floor(m/60);
var d= Math.floor(h/24);

h%=24;
m%=60;
s%=60;

s=(s<10) ? "0"+ s : s;
  document.querySelector(".day_num").innerText = d;
  document.querySelector(".hour_num").innerText = h;
  document.querySelector(".min_num").innerText = m;
  document.querySelector(".sec_num").innerText = s;
  

}, 1000); // 1000 milliseconds = 1s