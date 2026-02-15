let alarmTimeout = null;
let xp = 0;

// Ask notification permission
if ("Notification" in window) {
  Notification.requestPermission();
}

window.setAlarm = function () {
  const timeInput = document.getElementById("studyTime").value;

  if (!timeInput) {
    alert("Please select a time");
    return;
  }

  const now = new Date();
  const [hours, minutes] = timeInput.split(":");

  const alarmDate = new Date();
  alarmDate.setHours(hours);
  alarmDate.setMinutes(minutes);
  alarmDate.setSeconds(0);

  if (alarmDate < now) {
    alarmDate.setDate(alarmDate.getDate() + 1);
  }

  const timeToAlarm = alarmDate - now;

  clearTimeout(alarmTimeout);

  alarmTimeout = setTimeout(() => {
    new Notification("👑 Monarch Study Time!", {
      body: "It's time to start studying!"
    });

    const audio = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
    audio.play();
  }, timeToAlarm);

  suggestStudy(parseInt(hours));

  alert("Alarm Set Successfully 👑");
};

function suggestStudy(hour) {
  let suggestionText = "";

  if (hour >= 4 && hour < 6) {
    suggestionText = "📘 Homework Time";
  } else if (hour >= 6 && hour < 8) {
    suggestionText = "📚 Main Study Session";
  } else if (hour >= 8 && hour < 10) {
    suggestionText = "📝 Revision Time";
  } else {
    suggestionText = "📖 Light Reading Time";
  }

  document.getElementById("suggestion").innerText = suggestionText;
}

window.completeTask = function () {
  xp += 10;
  alert("🔥 Task Completed! +10 XP\nTotal XP: " + xp);
};
