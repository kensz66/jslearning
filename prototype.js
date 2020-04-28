/* ===============
::::: 创建对象
================ */

// 对象的构造函数
function Box(name, age) {
    this.name = name;
    this.age = age;
    this.run = function () {
        return this.name + this.age;
    }
}

let box1 = new Box('ken', 24);


// 原型对象
function Staff(user, age) {
    this.user = user;
    this.age = age;
}

Staff.prototype.gender = 'male';
Staff.prototype.run = function () {
    return this.name + '有' + this.age;
};


let p1 = new Staff('ken', 30);
// 当创建对象实例时, 会给实例自动增加一个__proto__属性, 该属性指向构造函数Staff的原型对象prototype
// 因为在js中, 一切皆对象, 所以所有的数据对象都有一个__proto__属性, 该属性指向他的构造函数的原型对象prototype

console.log(p1.__proto__ === Staff.prototype);    // true  说明实例的__proto__指向构造函数的原型对象prototype
console.log(Staff.prototype);
let S = Staff.prototype.constructor;   // 指向 Staff
console.log(Staff.prototype.constructor === Staff);   // true 说明原型对象的构造器属性指向构造函数Staff本身
console.log(S === Staff);   // true

let p2 = new S('jeff', '20');   // true  所以S就是Staff, 可以直接创建实例
console.log(p2.age);    // 20

// 一个实例可以有多个原型对象,例如,构造函数的原型对象是p1的原型对象, Object的原型对象也是p1的原型对象,
// 所以,Staff原型对象中的方法和Object原型对象中的方法在p1中都可以调用(这就是链式传递的本质).如下:
console.log(Staff.prototype.isPrototypeOf(p1));   //true
console.log(Object.prototype.isPrototypeOf(p1));   //true

console.log(Function.prototype.isPrototypeOf(p1));   //false
console.log(Staff.prototype.__proto__ === Object.prototype);   //true  说明prototype也是Object的一个实例


// 给实例增加原型对象的属性
p1.__proto__.work = function () {      // 通过实例的隐性__proto__属性可以直接给实例的构造函数增加原型对象的属性
    console.log(this.user + ' is working!');
};
p2.work();   // 正常运行: jeff is working!
console.log(p2.constructor === Staff);  // true
console.log(p1.constructor === Staff);  // true
console.log(p1.constructor);  // true
console.log(Staff);

// 注意:如果通过字面量定义prototype, 则会覆盖js里prototype的传递机制,如下:
function P() {
};
P.prototype = {
    gender: 'male',
    run: function () {
        return this.name + '有' + this.age;
    }
};
// # 如果这样定义, 原型对象中的指向构造函数的constructor指向Object,破坏了js的机制
// # 为避免此种情况发生, 可以强制指向构造函数constructor: P


// 判断一个对象中是否只有隐性原型中(__proto__)有某种属性
function hasProperty(o, property) {
    return (!o.hasOwnProperty(property)) && (property in o);    // 保证前面没有, 后面有, 就是在隐性原型中
}


// 扩展string,array,Function,Object等数据对象的内置方法


// 利用构造函数和原型对象定义对象模版(类)----动态原型模式(解决额封装性和多次初始化原型对象的方法)
function X(pro1, pro2) {
    this.pro1 = pro1;
    this.pro2 = pro2;
    if (typeof this.func != "function") {   // 避免在实例化对象时,多次执行原型对象中的方法初始化
        X.prototype.func = function () {
        };
    }
}


// 寄生构造函数模式 = 工厂模式+ 构造函数
function Y(pro1, pro2) {
    let o = {};
    o.pro1 = pro1;
    o.pro2 = pro2;
    o.prototype.func = function () {
        return this.pro1 + this.pro2 + '运行中';   // 这里this在实例调用时,指向实例, 如 obj.func()
    };
    return o;
}


// 稳妥构造函数 不能使用new和this


// 继承  通过原型链实现  无法传参
function A() {
    this.a = 'a';
    this.aFunc = function () {
        return this.a;
    }
}

function B() {
    this.b = 'b';
    this.bFunc = function () {
        return this.b;
    }
}

function C() {
    this.c = 'c';
    this.cFunc = function () {
        return this.c;
    }
}

B.prototype = new A();
C.prototype = new B();

let c = new C();

// 继承 对象冒充(call父构造函数)  只能继承构造函数里的信息, 父类的原型对象继承不了

//继承 组合模式(原型链继承和对象冒充组合使用)