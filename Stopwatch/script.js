let timer;
let time = 0;
let running = false;

const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const lapButton = document.querySelector('.lap');
const lapsList = document.querySelector('.laps');

function updateTime() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
  running = true;
  timer = setInterval(() => {
    time++;
    updateTime();
  }, 1000);
}

function stopTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  time = 0;
  updateTime();
  lapsList.innerHTML = '';
}

function lapTimer() {
  if (running) {
    const lapTime = time;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${timeDisplay.textContent}`;
    lapsList.appendChild(lapItem);
  }
}

startButton.addEventListener('click', () => {
  if (!running) startTimer();
});

stopButton.addEventListener('click', () => {
  if (running) stopTimer();
});

resetButton.addEventListener('click', () => {
  resetTimer();
});

lapButton.addEventListener('click', () => {
  lapTimer();
});
