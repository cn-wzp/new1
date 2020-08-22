const word = document.getElementById('word');
const text1 = document.getElementById('text');
const scored = document.getElementById('score');
const timed = document.getElementById('time');
const end = document.getElementById('end-game-container');
const settingsbtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsform = document.getElementById('settings-form');
const difficultys = document.getElementById('difficulty');

const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];
let randomword;
let score = 0;
let time = 10;
let difficulty =
    localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';
difficultys.value =
    localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';
text1.focus();

const timeInterval = setInterval(Remainingtime, 1000)

function getrandomword() {
    return words[Math.floor(Math.random() * words.length)];
}

function tianjiaword() {
    randomword = getrandomword();
    word.innerHTML = randomword;
}

function rightword() {
    score++;
    scored.innerHTML = score;
}

function Remainingtime() {
    time--;
    timed.innerHTML = time + "s";
    if (time === 0) {
        clearInterval(timeInterval);
        gameover();
    }
}

function gameover() {
    end.innerHTML = `<h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>`;
    end.style.display = 'flex';
}
tianjiaword();

text1.addEventListener('input', e => {
    const text2 = e.target.value;
    if (text2 === randomword) {
        tianjiaword();
        rightword();
        e.target.value = '';
        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }
        Remainingtime();
    }
});

settingsbtn.addEventListener('click', () => settings.classList.toggle('hide'));
settingsform.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
});