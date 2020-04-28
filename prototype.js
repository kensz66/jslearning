/* ===============
::::: 创建对象
================ */

function Box(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        return this.name + this.age;
    }
}

box1 = new Box('ken', 24);
alert(box1.run())