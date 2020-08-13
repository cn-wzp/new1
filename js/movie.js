const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');
//座位选择
function zwdianji() {
    var zw = localStorage.getItem(' '); //获取信息
    if (zw !== null && zw.length > 0) { //座位不能为空并且需要大于零
        seats.forEach((seat, a) => {
            if (zw.indexOf(a) > -1) { //遍历座位，不能点击的座位是已经选中的
                seat.classList.add("selected");
            }
        });
    }
}
//计数器
function jishu() {
    const zw = document.querySelectorAll(".row .seat.selected"); //返回元素
    const zwzonghe = zw.length; //获取总人数
    var price = +movie.value; //获取电影价格
    count.innerText = zwzonghe;
    total.innerText = zwzonghe * price;
}
//座位选择颜色
container.addEventListener('click', b => {
    if (b.target.classList.contains('seat') && !b.target.classList.contains('occupied')) {
        b.target.classList.toggle("selected");
    } //规定座位的颜色
    jishu(); //选定影片改变座位颜色开始计算价格
});
//change事件发生运行函数判断点击影片的value
movie.addEventListener('click', c => {
    price = +c.target.value; //计算价格
    jishu(); //换影片后按所选影片计算价格
});