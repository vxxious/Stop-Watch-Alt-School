let timerDisplay = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");
let lapBtn = document.getElementById("lapBtn");
let themeBtn = document.getElementById("themeBtn");
let laps = document.getElementById("laps");

let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;

function startTimer() {
  if (!running) {
    startTime = new Date().getTime() - difference;
    tInterval = setInterval(updateTime, 10);
    running = true;
  }
}

function stopTimer() {
  clearInterval(tInterval);
  running = false;
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  difference = 0;
  timerDisplay.textContent = "00:00:00.000";
  laps.innerHTML = "";
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);
  let milliseconds = Math.floor((difference % 1000));

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = milliseconds.toString().padStart(3, "0");

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function recordLap() {
  if (running) {
    let li = document.createElement("li");
    li.textContent = timerDisplay.textContent;
    laps.appendChild(li);
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);
themeBtn.addEventListener("click", toggleTheme);
