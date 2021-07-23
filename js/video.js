let video;
let durationControl;
let soundControl;
let intervalId;
let soundLevel;

// кнопки
const playBtn = document.querySelector('.video__player-img');
const soundBtn = document.getElementById('mic');
const playerPlayBtn = document.querySelector('.duration__img');

video = document.getElementById('player');

video.addEventListener('loadeddata', function () {

    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll('.play');
    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener('click', playStop);
    }

    durationControl = document.getElementById('durationLevel');
    durationControl.min = 0;
    durationControl.Value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener('input', setVideoTime);


    soundBtn.addEventListener('click', soundOf);

    soundControl = document.getElementById('micLevel');

    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;

    soundControl.addEventListener('input', changeSoundVolume);
});

video.addEventListener('ended', function (){
    playBtn.classList.toggle('video__player-img--active');
    video.currentTime = 0;
    playerPlayBtn.classList.remove('active');
})


function playStop() {
    playerPlayBtn.classList.toggle('video__player-img--active');
    if (video.paused) {
        video.play();
        playerPlayBtn.classList.add('active');
        intervalId = setInterval(updateTime, 1000 / 60);
    } else {
        video.pause();
        playerPlayBtn.classList.remove('active');
        clearInterval(intervalId);
    }
}

function setVideoTime() {
    video.currentTime = durationControl.value;
    updateTime();
}

function updateTime() {
    durationControl.value = video.currentTime;
    const step = video.duration / 100;
    const percent = video.currentTime / step;

    durationControl.style.background = `linear-gradient(90deg, #fedb3f 0%, #fedb3f ${percent}%, #626262 ${percent}%)`;
}

function soundOf() {
    if (video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
        soundBtn.classList.remove('active');
    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
        soundBtn.classList.add('active');
    }
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;

    if (video.volume === 0) {
        soundBtn.classList.add('active');
    } else {
        soundBtn.classList.remove('active');
    }
}