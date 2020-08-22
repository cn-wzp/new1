const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const tupian = document.getElementById('tupian');

const newnianfen = new Date().getFullYear();
const newyear = new Date(`January 01 ${newnianfen + 1} 00:00:00`);
year.innerText = newnianfen + 1;

function gengxindaojishi() {
    const newtime = new Date();
    const daojishi = newyear - newtime;
    const d = Math.floor(daojishi / 1000 / 60 / 60 / 24);
    const h = Math.floor(daojishi / 1000 / 60 / 60) % 24;
    const m = Math.floor(daojishi / 1000 / 60) % 60;
    const s = Math.floor(daojishi / 1000) % 60;

    days.innerText = d < 10 ? "0" + d : d;
    hours.innerText = h < 10 ? "0" + h : h;
    minutes.innerText = m < 10 ? "0" + m : m;
    seconds.innerText = s < 10 ? "0" + s : s;
    setTimeout(() => {
        tupian.remove();
        countdown.style.display = 'flex';
    }, 100);
}
setInterval(gengxindaojishi, 1000);