let clock = 0;
let timeinterval;
let displayP = document.getElementById("timeKeeper");
displayP.textContent = clock;

function startTimer() {
    timeinterval = setInterval(updateClock, 1000);
}

function stopTimer() {
    clearInterval(timeinterval);
    resetTimer();
}

function resetTimer() {
    clock = -1;
    updateClock();
}

function updateClock() {
    clock += 1;
    displayP.textContent = clock;
}

const buttons = Array.from(document.getElementsByClassName("controlls"));

buttons.forEach(btn => {
  if (btn.id === "start") {
    btn.addEventListener("click", startTimer); 
  } else if (btn.id === "reset") {
    btn.addEventListener("click", resetTimer);
  } else if (btn.id === "end") {
    btn.addEventListener("click", stopTimer);
  }
});
