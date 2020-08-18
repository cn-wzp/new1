const video = document.getElementById('video');
const play = document.getElementById('play');
var stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function bofangshijian() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

function zantingshipin() {
    video.currentTime = 0;
    video.pause();
}

function kaiguan() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function kaiguantubiao() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x iconfont">&#xe618;</i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x iconfont">&#xe643;</i>';
    }
}

function kongzhishijian() {
    progress.value = (video.currentTime / video.duration) * 100;
    let miao = Math.floor(video.currentTime / 60);
    if (miao < 10) {
        miao = "0" + String(miao);
    }
    let hour = Math.floor(video.currentTime % 60);
    if (hour < 10) {
        hour = "0" + String(hour);
    }
    timestamp.innerHTML = `${miao}:${hour}`;
}
video.addEventListener('click', kaiguan);
play.addEventListener('click', kaiguan);
stop.addEventListener('click', zantingshipin);
video.addEventListener('pause', kaiguantubiao);
video.addEventListener('play', kaiguantubiao);
video.addEventListener('timeupdate', kongzhishijian);
progress.addEventListener('change', bofangshijian);