// Collect Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const ranges = Array.from(player.querySelectorAll('.player__slider'));
const skipButtons = Array.from(player.querySelectorAll('[data-skip]'));
const fsButton = player.querySelector('#fullscreen');

var isFirefox = typeof InstallTrigger !== 'undefined';
var isChrome = !!window.chrome && !!window.chrome.webstore;


// Build Functions

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

function updateButton() {
    const icon = this.paused ? '▶️' : '⏸️';
    toggle.textContent = icon;
}

function skip() {
    console.log("skipping");
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
    console.log(this.value);
    console.log(this.name);
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(event) {
    console.log(event);
    const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function toggleFull() {
    if (isFull) {
        if (isChrome) {
            document.webkitExitFullscreen();
            fsButton.textContent = '↗️';
        }
        if (isFirefox) {
            document.mozCancelFullScreen();
            fsButton.textContent = '↗️';
        }
    } else {
        if (isChrome) {
            player.webkitRequestFullscreen();
            fsButton.textContent = '↙️';
            isFull = !isFull;
        }
        if (isFirefox) {
            player.mozRequestFullScreen();
            fsButton.textContent = '↙️';
            isFull = !isFull;
        }
    }
}
// Add Event Listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (event) => mouseDown && scrub(event));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);

let isFull = false;
fsButton.addEventListener('click', toggleFull);