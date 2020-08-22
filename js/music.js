const container = document.getElementById('container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const container1 = document.getElementById('container1');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const songs = ['a', 'b', 'c'];

let songIndex = 2;

xuanzegequ(songs[songIndex]);

function xuanzegequ(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `music/${song}.png`;
}

/*function kaiguan() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function kaiguantubiao() {
    if (audio.paused) {
        play.innerHTML = '<i class="iconfont">&#xe615;</i>';
    } else {
        play.innerHTML = '<i class="iconfont">&#xe645;</i>';
    }
}*/
function play() {
    container.classList.add('play');
    playBtn.innerHTML = '<i class="iconfont">&#xe615;</i>';
    audio.play();
}

function pause() {
    container.classList.remove('play');
    playBtn.innerHTML = '<i class="iconfont">&#xe645;</i>';
    audio.pause();
}

function shangyishou() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    xuanzegequ(songs[songIndex]);
    play();
}

function next() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    xuanzegequ(songs[songIndex]);
    play();
}

function jindu(a) {
    const { duration, currentTime } = a.srcElement;
    const pro = (currentTime / duration) * 100;
    progress.style.width = `${pro}%`;
}

function shijian(a) {
    const width = this.clientWidth;
    const clickX = a.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}
playBtn.addEventListener('click', () => {
    const playing = container.classList.contains('play');
    if (playing) {
        pause();
    } else {
        play();
    }
});
prevBtn.addEventListener('click', shangyishou);
nextBtn.addEventListener('click', next);
audio.addEventListener('timeupdate', jindu);
container1.addEventListener('click', shijian);
audio.addEventListener('ended', next);