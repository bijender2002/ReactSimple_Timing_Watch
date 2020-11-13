import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let CurDate = new Date();
CurDate = CurDate.getHours()

let greeting = "";
const CssSty = {};

if (CurDate >= 1 && CurDate < 12) {
  greeting = "Good Morning";
  CssSty.color = "green";
  CssSty.fontfamily = 'Goldman';
}
else if (CurDate >= 12 && CurDate < 19) {
  greeting = "Good Afternoon";
  CssSty.color = "Orange";
  CssSty.fontfamily = 'Goldman';
}
else {
  greeting = "Good Night";
  CssSty.color = "Black";
  CssSty.fontfamily = 'Goldman';
}

let date;
let time;
let day;
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
setInterval(function () {
  date = new Date();
  day = date.toLocaleDateString();
  time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  document.getElementById("time").innerHTML = "<br>" + "Time: " + time + "<br>" + "Date: " + day + "<br>" + "Day: " + weekday[date.getDay()];
}, 1000);

ReactDOM.render(
  <div className="container ">
    <h1 id="time" className="text">{time}</h1>
    <h1 className="text-center">Hello Sir, <span style={CssSty}>{greeting}</span></h1>
  </div>,

  document.getElementById("root")
);
