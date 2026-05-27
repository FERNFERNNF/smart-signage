// script.js

// clock
function updateClock() {
  const now = new Date();

  const time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  document.getElementById("clock").innerText = time;
}

setInterval(updateClock, 1000);
updateClock();

// emergency button
function sendEmergency() {

  const alertList = document.getElementById("alertList");

  const div = document.createElement("div");

  div.className = "alert-item";

  const now = new Date();

  const time =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0") +
    ":" +
    now.getSeconds().toString().padStart(2, "0");

  div.innerHTML = `
    <span>🚨 Emergency Alert</span>
    <span>${time}</span>
  `;

  alertList.prepend(div);

}