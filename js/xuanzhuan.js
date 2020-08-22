const container = document.getElementById('container');
const text = document.getElementById('text');
const shijian = 7500;
const holdtime = shijian / 5;
const breathetime = (shijian / 5) * 2;
console.log(holdtime);
console.log(breathetime);

dongtai();

function dongtai() {
    text.innerText = "Breathe In !";
    container.className = "container grow"
    setTimeout(() => {
        text.innerText = "hold"
        setTimeout(() => {
            text.innerText = "Breathe out"
            container.className = "container shrink"
        }, holdtime);
    }, breathetime);
}
setInterval(dongtai, shijian);