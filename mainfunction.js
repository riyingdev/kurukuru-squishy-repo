const counter = document.getElementById(`counter`);
let score = 0;
const number = document.getElementById('score');
const kuru = document.getElementById('kuru');
const kurukuru = new Audio('sfx/kurukuru.mp3');
let song = document.getElementById('song');
const mute = document.getElementById('mute');
let paused = false;

counter.onclick = function () {
    score++;
    number.textContent = score;
    kuru.style.transform = `scale(1.1)`;
    kuru.style.transition = 'transform 0.2s cubic-bezier(0,-0.01,0,1.01)';
    const kurukuruu = kurukuru.cloneNode();
    kurukuruu.play();
    setTimeout(() => { kuru.style.transform = `scale(1)` }, 100);
}
mute.onclick = function () {
    if (paused) {
        song.play();
        mute.textContent = 'Stop Musik';
    }
    else {
        song.pause();
        mute.textContent = 'Play Musik';
    }
    paused = !paused;
}
