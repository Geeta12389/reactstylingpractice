import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentTime = currentDate.getHours();
//console.log(currentTime);
const style = {
  color: ""
};
let greeting;
if (currentTime < 12) {
  greeting = "Good Morning";
  style.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  style.color = "green";
} else if (18 < currentTime) {
  greeting = "Good Evening";
  style.color = "gray";
} else {
  greeting = "Good Night";
  style.color = "blue";
}
ReactDOM.render(
  <h1 style={style}>{greeting}</h1>,
  document.getElementById("root")
);

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
