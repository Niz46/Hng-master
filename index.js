function updateUTCTime() {
  const utcTime = new Date().toUTCString();
  document.getElementById("utc-time").textContent = utcTime;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();
