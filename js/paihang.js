const draggablelist = document.getElementById('draggable-list');
const check = document.getElementById('check');
//声明名字数组
const peoples = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page'
];
let kaishiweizhi;
const jiedians = [];
tianjiajiedian();
//添加1个节点包含完善结构
function tianjiajiedian() {
    [...peoples].map(a => ({
            value: a,
            sort: Math.random()
        }))
        .sort((a, b) => a.sort - b.sort).map(a => a.value).forEach((person, index) => {
            const jiedian = document.createElement("li");
            jiedian.setAttribute('data-index', index);
            jiedian.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
            <p class="person-name">${person}</p> 
            <i class="iconfont icon-dengyu"></i>
            </div>
        `;
            jiedians.push(jiedian);
            draggablelist.appendChild(jiedian);
        });
    addEventListeners();
}
//交换位置
function swapItems(fromIndex, toIndex) {
    const One = jiedians[fromIndex].querySelector('.draggable');
    const Two = jiedians[toIndex].querySelector('.draggable');

    jiedians[fromIndex].appendChild(Two);
    jiedians[toIndex].appendChild(One);
}
//颜色变换
function checkOrder() {
    jiedians.forEach((jiedian, index) => {
        const personName = jiedian.querySelector('.draggable').innerText.trim();

        if (personName !== peoples[index]) {
            jiedian.classList.add('wrong');
        } else {
            jiedian.classList.remove('wrong');
            jiedian.classList.add('right');
        }
    });
}
//位置变换切换状态
function kaishi() {
    kaishiweizhi = +this.closest('li').getAttribute('data-index');
}

function jieshu() {
    const jieshuweizhi = +this.getAttribute('data-index');
    swapItems(kaishiweizhi, jieshuweizhi);
    this.classList.remove('over');
}

function Enter() {
    this.classList.add('over');
}

function Leave() {
    this.classList.remove('over');
}

function Over(e) {
    e.preventDefault();
}
//监听变换
function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', kaishi);
    });

    dragListItems.forEach(item => {
        item.addEventListener('dragover', Over);
        item.addEventListener('drop', jieshu);
        item.addEventListener('dragenter', Enter);
        item.addEventListener('dragleave', Leave);
    });
}

check.addEventListener('click', checkOrder);