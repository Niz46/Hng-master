function updateUTCTime() {
  const date = new Date();
  date.setUTCHours(date.getUTCHours() + 1); 
  const utcTime = date.toUTCString();
  document.getElementById("utc-time").textContent = utcTime;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();
