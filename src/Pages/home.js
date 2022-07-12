import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  function timeCount() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let greet, t;
    if (h > 4 && h < 12) greet = "Good Morning";
    else if (h >= 12 && h < 16) greet = "Good Afternoon";
    else if (h >= 16 && h <= 19) greet = "Good Evening";
    else greet = "Good Night";
    if (h < 12) t = "AM";
    else if (h >= 13) {
      h = h - 12;
      t = "PM";
    } else t = "PM";
    let time = `${h}:${m}:${s} ${t} ${greet}`;
    return time;
  }
  let sa = timeCount();
  const [newTime, setNewTime] = useState(sa);
  change();
  function change() {
    setInterval(() => {
      setNewTime(timeCount());
    }, 1000);
  }

  function numberofsteps(dayswalked, dailySteps) {
    let stepCount = 40;
    return function Steps() {
      stepCount = stepCount + dailySteps * dayswalked;
      return stepCount;
    };
  }
  let days = Math.floor(Math.random() * 100) + 1;
  const totalnumberofsteps = numberofsteps(days, 100);
  let b = totalnumberofsteps();
  function res() {
    document.getElementById("result").innerHTML = b;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "Center",
        alignItems: "Center",
        height: "100vh",
      }}
    >
      <div
        direction="Left"
        behavior="alternate"
        loop="1"
        style={{
          marginBottom: "400px",
          fontSize: "30px",
          color: "#302f2f",
          fontStyle: "italic",
        }}
      >
        Welcome to my page
        <h1>I'm from India and its {newTime}</h1>
        <h3>
          Well <span id="greet"></span> !!
        </h3>
        <h4>walking is good and in {days} days i walked</h4>
        <input type="button" onClick={res} value="Find steps" />
        <h5>
          Result : <span id="result"></span>steps
        </h5>
        <p>
          total steps after {days} days are {b} steps
        </p>
      </div>
    </div>
  );
};

export default Home;
