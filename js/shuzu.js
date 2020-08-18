const main = document.getElementById('main');
const tianjia = document.getElementById('add-user');
const fanbei = document.getElementById('double');
const menkan = document.getElementById('show-millionaires');
const paixu = document.getElementById('sort');
const zongji = document.getElementById('calculate-wealth');
var data = [];
huoqu();
huoqu();
huoqu();

function xianshi(zongshujv = data) {
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
    zongshujv.forEach(a => {
        const b = document.createElement("div");
        b.classList.add("person");
        b.innerHTML = `<strong> ${a.name}</strong>${shuliang(a.money)}`;
        main.appendChild(b);
    });
}

function shuzu(obj) {
    data.push(obj);
    xianshi();
}

async function huoqu() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const names = data.results[0];
    const newnames = {
        name: `${names.name.first}${names.name.list}`,
        money: Math.floor(Math.random() * 1000000)
    };
    shuzu(newnames);
}

function shuangbei() {
    data = data.map(names => {
        return {...names, money: names.money * 2 };
    });
    xianshi();
}

function dixian() {
    data = data.filter(user => user.money > 1000000);
    xianshi();
}

function shuliang(number) {
    return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function jiangxu() {
    data.sort((a, b) => b.money - a.money);
    xianshi();
}

function jisuan() {
    const zongliang = data.reduce((a, names) => (a += names.money), 0);
    const tihuan = document.createElement('div');
    tihuan.innerHTML = `<h3>Total Wealth:<strong>${shuliang(zongliang)}</strong></h3>`;
    main.appendChild(tihuan);
}
tianjia.addEventListener("click", huoqu);
fanbei.addEventListener("click", shuangbei);
menkan.addEventListener("click", dixian);
paixu.addEventListener("click", jiangxu);
zongji.addEventListener("click", jisuan);
/*const objArr = [{ name: '老大' }, { name: '老二' }, { name: '老三' }];
       const res = objArr.reduce((pre, cur, index, arr) => {
           if (index === 0) {
               return cur.name;
           } else if (index === (arr.length - 1)) {
               return pre + '和' + cur.name;
           } else {
               return pre + '、' + cur.name;
           }
       }, '');

 /* const arr = [{name: 'li', age: 20}, {name: 'tang', age: 30}];
  
  // 使用reduce把数据转为
 {
      li: {name: 'li', age: 20},
      tang: {name: 'tang', age: 30}
 }
*/
/*const  arr  = [{
    name:   'li',
     age:  20
}, {
    name:   'tang',
     age:  30
}];

const newarr = arr.reduce((cur, item, idx, a) => {
    console.log('cur: ', cur);
    console.log('item:', item);
    // console.log(idx);
    // console.log(a);
    cur[item.name] = item
    return cur;
}, {});
console.log(newarr)*/

/*var arr = [1, 2, 3, 4, 5];
var value = arr.reduce((acu, item, idx, a) => {
    console.log(acu, item, idx, a);
    return acu + item;
}, 0)

console.log(value);*/