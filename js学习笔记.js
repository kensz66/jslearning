//函数
document.querySelector();

selector.textContent();

alert();

name = prompt();

x = multiply(4, 5);

setAttribute('src', 'http://www.v-in.net');
getAttribute('class', 'classname');

localStorage.setItem(variable, 'name');
localStorage.getItem();

para.addEventListener('click', updateName);

para = doucument.createElement("p");
document.body.appendChild('para');

//=======事件============
doucument.addEventListener(DOMContentLoaded, function () {});
// DOMContentLoaded

input.focus() //定位光标

//生成随机数
num = Math.floor(Math.random() * 100); //生产一个0-99的数值,包括1和9[(函数floor()]


// <script async src="js/script.js"></script>
//浏览器遇到 async 脚本时不会阻塞页面渲染，而是直接下载然后运行。适用于独立不互相依赖的脚本.效率高,但易出错.

/*
<script defer src="js/script.js"></script>
/脚本按照页面出现的顺序加载和运行;适用于依赖其他脚本或dom元素的脚本.效率低但稳定.
 */


// 一元运算符, 如果操作数在之前不是number， 试图将其转换为number
var a = "123";
b = +a;
typeof (b); //返回'number'

//三元运算符
var status = (a >= 18) ? 'adult' : 'minor'; //三元条件运算符其实是一个值

/* 一元操作符
 delete  objectName;
 delete objectName.property;
 delete objectName[index];
 如果是删除数组中的项,删除后数组的索引号不会变.只是会产生一个空槽(empty slot)
 如果能删除成功,返回 true,不成功,返回false
 */


//  typeof操作符的用法
var myFun = new Function("5 + 2");
var shape = "round";
var size = 1;
var today = new Date();

//>>>>>>>>>>>>>>>>>typeof 操作符将会返回如下的结果：

/*
 typeof myFun; // returns "function"
 typeof shape; // returns "string"
 typeof size; // returns "number"
 typeof today; // returns "object"
 typeof dontExist; // returns "undefined"
 typeof true; // returns "boolean"
typeof null; // returns "object"
 */


//>>>>>>>>>>> in 关系操作符<<<<<<<<<<<<<<<<
// 用于判断一个对象是否有某个属性或者某个索引值(只数组),存在返回true,否则返回false
/*   // Arrays
  var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
  0 in trees; // returns true
  3 in trees; // returns true
  6 in trees; // returns false
  "bay" in trees; // returns false (you must specify the index number, not the value at that index)
  "length" in trees; // returns true (length is an Array property)

  // Predefined objects
  "PI" in Math; // returns true
  var myString = new String("coral");
  "length" in myString; // returns true

  // Custom objects
  var mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998
  };
  "make" in mycar; // returns true
  "model" in mycar; // returns true */



//>>>>>>>>>>>>>>>>>instanceof 判断实例对象的类型(如 Date, Array, Number, Math等等...)
// 注意区别数据类型和对象类型
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}

//=================== this 基本表达式  =======================
// this在一个方法中,一般是代表正在调用该方法的那个对象(哪个调用了this所在位置的方法,哪个就是this代表的对象).


//===================   ...扩展语句 =====================
var a = [1, 2, 3];
var b = [...a, 4, 5, 6];
console.log(b);


/* 附： 如何使用ES6的新特性， 又能保证浏览器的兼容？

针对 ES6 的兼容性问题， 很多团队为此开发出了多种语法解析转换工具， 把我们写的 ES6 语法转换成 ES5， 相当于在 ES6 和浏览器之间做了一个翻译官。 比较通用的工具方案有 babel， jsx， traceur， es6 - shim 等。 */


// =============  String字符串对象的方法和属性  =================
var a = 'abcde';
var b = a.length; // 返回 b=5
var i = a[2]; //返回 i='c',通过此方法可以检索特定字符串
// idexof用于在字符串中查找子字符串, 如果找不到, 则返回值 -1;
if (browserType.indexOf('xyz') !== -1) {
  // do stuff with the string
}
a.slice(0, 3); //返回 'abc'
a.slice(2, 4); //返回 'cd'
//这里第一参数为索引号,第二个参数为第几个位置.所以得到的字符串的长度就是 第二个参数减去第一参数
//直观的说,就是从第一个索引号(2)的位置开始,往后数(4-2=2)个字符(cd).

// 此外， 如果您知道要在某个字符之后提取字符串中的所有剩余字符， 则不必包含第二个参数， 而只需要包含要从中提取的字符位置 字符串中的其余字符。 尝试以下：
var browserType = 'mozalla';
browserType.slice(2); //返回 'zalla'
// 这返回“ zilla” - 这是因为2的字符位置是字母z， 并且因为没有包含第二个参数， 所以返回的子字符串是字符串中的所有剩余字符。

// 字符转换大小写: string.toLowerCase();
//替换字符串的某个部分: browserType.replace('moz','van'); 返回 vanzilla
//注意,这需要赋值给一个新变量, 因为这个操作不会直接更改原字符串变量的值,只会得到一个新的字符串.如果要改变原字符串,将这个新字符串赋值给原字符串的变量就可.


// =================数组与字符串的相互转换===============

/* .split('参数') 分割字符串成数组, 参数为: 分隔符
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArray = myData.split(',');
返回数组[Manchester, London, Liverpool, Birmingham, Leeds, Carlisle] */

/* .join('连接数组各个值的符号'): 将数组连接成字符串
var dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.join(','); //返回字符串  "Rocket, Flash, Bella, Slugger"
dogNames.join();
返回字符串 "RocketFlashBellaSlugger" */

// 不要用toString()去转数组为字符串,因为会加上数组分割的逗号,不稳定.


//================ 添加和删除数组项 ========================

/* .push('') 方法将一个或多个元素添加到数组的末尾， 并返回该数组的新长度。
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");
console.log(sports);
// ["soccer", "baseball", "football", "swimming"]
console.log(total);
// 4
 */

/* .pop() 方法用于从一个数组中删除并返回最后一个元素。
let myFish = ["angel", "clown", "mandarin", "surgeon"];
let popped = myFish.pop();
console.log(myFish);
// ["angel", "clown", "mandarin"]
console.log(popped);
// surgeon */


//====================== 对象  ============================
/* 对象成员其实包括2个内容: 一个是这个成员的名称(或者说是代表这个成员的变量, 其实这个值也是用变量的形式存在内存中的.又可以被称为对象的一个属性, 又或者可以说是关联了一个值的索引), 其次是这个成员的值.
 */
function Person(name, age, gender, interest, bio, greeeting) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.interest = interest;
  this.bio = bio;
  this.greeting = function () {
    alert(this.name);
  };
};



// 1. 所有的对象都是一个关联数组
  object[index] = object.index;
// 2. 给对象添加新的成员:
object.name = 'kate';
ovject.fun = function () { };

//一个对象的实例其实也是一个命名空间,如:
object.name = 'kate';
//object就是变量name的命名空间.this其实就是指某个命名空间

// 创建对象的方式:
// 1.
var person1 = new Person(name,age,gender,['music','skiing']);
// 2.用Object()构造函数的方法
var person2 = new Object();
person2.name = 'kate';
person2.greeting = function () {};
person2['say'] = function () {};
person2['age'] = 32; //用关联数组的方式表示属性

//3.根据其他一个对象创建一个新的对象,用create()方法
var person3 = Object.create(person2);

//对函数的理解:每个函数都是对象,包含以下:length:0,name:函数名,caller以及arguments等属性.还有一个特殊属性prototype,这个特殊的成员其实是一个构造函数,里面包括许多的属性和方法.这些属性和方法可以供本函数对象使用.