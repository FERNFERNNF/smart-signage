const alertContainer = document.getElementById("alerts");
const count = document.getElementById("count");

const alertData = [
  {
    text:"จอ B-12 Offline",
    type:"red-alert",
    time:"17:43"
  },
  {
    text:"CPU usage สูงผิดปกติ",
    type:"yellow-alert",
    time:"17:40"
  },
  {
    text:"Content อัปเดตสำเร็จ",
    type:"green-alert",
    time:"17:30"
  }
];

function renderAlerts(){

  alertContainer.innerHTML = "";

  alertData.forEach(alert=>{

    const div = document.createElement("div");

    div.className = `alert-item ${alert.type}`;

    div.innerHTML = `
      <span>${alert.text}</span>
      <span>${alert.time}</span>
    `;

    alertContainer.appendChild(div);

  });

  count.innerText = alertData.length;
}

renderAlerts();

function updateTime(){

  const now = new Date();

  const timeString =
    now.getHours().toString().padStart(2,'0')
    + ":"
    +
    now.getMinutes().toString().padStart(2,'0');

  document.getElementById("time").innerText = timeString;
}

setInterval(updateTime,1000);

updateTime();


// DEMO REALTIME ALERT
setInterval(()=>{

  const random = Math.floor(Math.random()*100);

  alertData.unshift({
    text:`New Alert #${random}`,
    type:"yellow-alert",
    time:new Date().toLocaleTimeString()
  });

  if(alertData.length > 5){
    alertData.pop();
  }

  renderAlerts();

},5000);