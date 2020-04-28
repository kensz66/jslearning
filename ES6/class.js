// 类的定义与使用
class Star {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sing(song) {
        console.log(this.name + '正在唱' + song)
    }
}

let ldh = new Star('刘德华', 18)
// ldh.sing('冰雨')

// 类的继承
class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        return this.name + this.age;
    }
}

class Son extends Father {
    constructor(name, age) {
        super(name, age);        // 调用父类的构造方法, 必须在子类赋值语句之前调用父类构造方法,否则报错
        this.name = name;
        this.age = age;
        this.say();   // 要加this调用本类里面的
    }

    say() {
        console.log(this.name + super.say())   // 通过关键字 super调用父类的方法
    }
}

let son = new Son('Jeff', 30);
son.say();
console.log(son.name)


/*注意事项:

    1. 类是没有变量提升的,所以,类必须在最开始定义,例如:
    a = new A();   //找不到A类,因为A类无变量提升效果
    class A {}
    2. 类里面的共有属性和方法,在类里面必须加this使用*/



