/*console.log("乘法口诀：")
for (var i = 1; i <= 9; i++) {
    var a = [];
    for (var j = 1; j <= i; j++) {
        c = (j + "*" + i + "=" + i * j + " ");
        a.push(c);
    }
    console.log(a.join(''));
}*/
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const pwd = document.getElementById("pwd");
const pwd1 = document.getElementById("pwd1");

//输入不正确时文本框的颜色
function isError(input, xinxi) {
    const wenben = input.parentElement;
    wenben.className = "table error";
    const tishi = wenben.querySelector("small");
    tishi.innerText = xinxi;
}

//输入正确时文本的颜色
function isSuccess(input) {
    const wenben = input.parentElement;
    wenben.className = "table success";
}

//检测输入的文本是否为空
function panduan(inputArr) { //获取的文本看作是个数组
    let zifu = false;
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            isError(input, `${zifuduan(input)} 是必填的`); //如果为空文本提示
            zifu = true;
        } else {
            isSuccess(input); //正确的直接显示
        }
    });

    return zifu; //返回文本
}
//判断字符的长度
function isLength(input, min, max) {
    if (input.value.length < min) { //判断输入的最小长度
        isError(input, `${zifuduan(input)}最少输入${min}个字符`);
    } else if (input.value.length > max) { //判断输入的最大长度
        isError(input, `${zifuduan(input)}必须少于${max}个字符`);
    } else {
        isSuccess(input); //返回输入的字符文本框变色
    }
}
//获取字符段
function zifuduan(input) {
    return input.id.slice(0);
}
//检查邮箱
function isEmail(input) {
    const geshi = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (geshi.test(input.value.trim())) { //判断格式是否正确
        isSuccess(input);
    } else {
        isError(input, "邮箱无效");
    }
}
//判断两次密码是否一致
function isPasswords(input1, input2) {
    if (input1.value !== input2.value) {
        isError(input2, "密码输入不一致");
    }
}
form.addEventListener("submit", a => {
    a.preventDefault();

    panduan([username, email, pwd, pwd1]);
    isLength(username, 3, 15);
    isLength(pwd, 6, 25);
    isEmail(email);
    isPasswords(pwd, pwd1);

});