//函数
document.querySelector();

selector.textContent();

alert();

name = prompt();

x = multiply(4, 5);

localStorage.setItem(variable, 'name');
localStorage.getItem();

para.addEventListener('click', updateName);

para = doucument.createElement("p");
document.body.appendChild('para');

//=======事件============
doucument.addEventListener(DOMContentLoaded, function () {});
// DOMContentLoaded

input.focus(); //定位光标

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
var b = +a;
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
a.slice(0, 3); //返回 'abc'
a.slice(2, 4); //返回 'cd'
//这里第一参数为索引号,第二个参数为第几个位置.所以得到的字符串的长度就是 第二个参数减去第一参数
//直观的说,就是从第一个索引号(2)的位置开始,往后数(4-2=2)个字符(cd).

// 此外， 如果您知道要在某个字符之后提取字符串中的所有剩余字符， 则不必包含第二个参数， 而只需要包含要从中提取的字符位置 字符串中的其余字符。 尝试以下：
var browserType = 'mozalla';
// idexof用于在字符串中查找子字符串, 如果找不到, 则返回值 -1;
if (browserType.indexOf('xyz') !== -1) {
  // do stuff with the string
}
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

//.slice()：从一个数组中提取相连的一串值作为新数组输出，不改变原数组
[1, 2, 3, 4, 5, 6].slice(2, 5); // [3,4,5]

//.splice :修改数组

// 从第 2 位开始删除后面所有元素节
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);
// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]

// 从第 2 位开始删除 0 个元素，插入“drum”节
var myFish = ["angel", "clown", "mandarin", "surgeon"];
var removed = myFish.splice(2, 0, "drum");
// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "surgeon"]
// 被删除的元素: [], 没有元素被删除
// 从第 2 位开始删除 0 个元素，插入“drum” 和 "guitar"节
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');
// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除

// 从第 3 位开始删除 1 个元素节
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);
// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]

// 从第 2 位开始删除 1 个元素，插入“trumpet”节
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");
// 运算后的 myFish: ["angel", "clown", "trumpet", "surgeon"]
// 被删除的元素: ["drum"]

// 从第 0 位开始删除 2 个元素，插入"parrot"、"anemone"和"blue"节
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// 运算后的 myFish: ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// 被删除的元素: ["angel", "clown"]

// 从第 2 位开始删除 2 个元素节
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);
// 运算后的 myFish: ["parrot", "anemone", "sturgeon"]
// 被删除的元素: ["blue", "trumpet"]

// 从倒数第 2 位开始删除 1 个元素节
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);
// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]


//====================== 对象  ============================
/* 对象成员其实包括2个内容: 一个是这个成员的名称(或者说是代表这个成员的变量, 其实这个值也是用变量的形式存在内存中的.又可以被称为对象的一个属性, 又或者可以说是关联了一个值的索引), 其次是这个成员的值.
 */

var person2 = {
  name: 'ken',
  age: 22,
  gender: 'man'
};
console.log(penson2);


// 1. 所有的对象都是一个关联数组
object[index] = object.index;
// 2. 给对象添加新的成员:
object.name = 'kate';
ovject.fun = function () {};

//一个对象的实例其实也是一个命名空间,如:
object.name = 'kate';
//object就是变量name的命名空间.this其实就是指某个命名空间




// ++++++++++++++++++++创建对象的方式++++++++++++++++++++
// 1.通过构造创建对象
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.greeting = function () {
    alert(this.name);
  };
}
var person1 = new Person('ken', 22, 'man');
console.log(person1);

// 2.用Object()构造函数的方法
var person2 = new Object();
person2.name = 'ken';
person2['age'] = 22; //用关联数组的方式表示属性
person2.gender = 'man';
person2.greeting = function () {
  alert(this.name);
};
console.log(person2);

//3.根据其他一个对象创建一个新的对象,用Object.create()方法
var person3 = Object.create(person1);
console.log(person3);

//4.直接定义对象实例
var person4 = {
  name: 'ken',
  age: 22,
  gender: 'man'
};
console.log(person4);

//5.从其他对象的构造函数定义一个对象.因为每个实例对象都从原型中继承了一个constructor属性,该属性指向了用于构造此实例的构造函数.如果你刚好因为某些原因没有原始构造器的引用，那么这种方法就很有用了。
var person5 = new person1.constructor('ken', '22', 'man');
console.log(person5);

// 延伸理解
// 变量定义的方法:将变量保存在对象中
// 通常情况下总是倾向于用var定义全局变量, 造成全局变量污染.其实, 可以通过对象的方式, 定义多个变量, 而不会对全局变量造成污染, 例如:
var nodes = {
  a: document.querySelector('a'),
  div: document.querySelector('div'),
  button: document.getElementsByTagName('button')
}
// 通过一下方式,就可以通过nodes.a,nodes.div,nodes.btn当成变量来使用.


//对函数的理解:每个函数都是对象,包含以下:length:0,name:函数名,caller以及arguments等属性.还有一个特殊属性prototype,这个特殊的成员其实是一个构造函数,里面包括许多的属性和方法.这些属性和方法可以供本函数对象使用.

/* 注意: 一种常见的对象定义模式是, 在构造体(函数体)中定义属性, 在prototype属性上定义方法.如此构造器只包含属性定义, 而方法则分装在不同的代码块中, 代码更具可读性.例如: */
// 构造器及其属性定义
function Test(a, b, c, d) {
  // 属性定义
};
// 定义第一个方法
Test.prototype.x = function () {
  //函数体
};
// 定义第二个方法
Test.prototype.y = function () {
  // 函数体
};
// 等等……

// 进一步理解命名空间
// 通常我们定义一个函数,能被谁调用呢?这通常会涉及命名空间的问题.每个命名空间其实就是一个对象.定义的函数会成为命名空间这个对象的一个方法,所以,只有这个命名空间才能调用这个函数.通常定义的全局函数,都是位于window对象中(用window.abc()调用,因为window可以省略,所以,直接用abc()就可以调用了).

// 函数的length属性就是形参的个数.

// 理解原型对象与构造函数
/*
1.原型对象是属于对象的对象;
2.原型对象是一个特殊对象, 用于保存可以被复用的属性和方法;
3.每个对象都有一个原型对象.
4.如果一个对象是通过构造函数创建, 则构造函数会成为原型对象的一个子成员, 这样构造函数才得以保存和复用(对象的不同类型,包含了不同的原生方法,这些方法也会不储存在对象的另外一个原型对象中(以灰色表示)).
5.原型对象本身也是一个对象,所以也有一个子原型对象,此原型对象其实就是Object,所以Object中的方法和属性在所有的对象中都可以被调用.
6.构造函数的原型对象中包括自己本身构造函数和Object原型对象.
7.总结以上:每个对象的内容可以包括三方面:1:由程序员创建的项,2:由对象的类型本身带的项,3:由对象Object自带的项.
*/

//============构造函数的继承================
function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Person.prototype.greeting = function () {
  alert(this.name);
};
//Person构造函数创建完毕;

function Teacher(name, age, gender, subject) {
  Person.call(this, name, age, gender);
  //或者 Person.apply(this,[name,age,gender])
  this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype); //通过Object.create()继承原型对象.到这一步为止,现在Teacher()的prototype的constructor属性指向的是Person(),这不正常,所以要增加下面一句.
Teacher.prototype.constructor = Teacher; //改变构造函数的指向(让构造函数执行Teacher,而不是Person.如果不改变指向,调用原型中的方法结果不变,但是是通过调用Person的原型对象中的方法执行的,而不是Teacher自身的)
//Teacher 构造函数创建完毕

var teacher1 = new Teacher('song', 35, 'male', 'English');
teacher1.greeting();



// 如果您开始创建一系列拥有相似特性的对象时，那么创建一个包含所有共有功能的通用对象，然后在更特殊的对象类型中继承这些特性，将会变得更加方便有用。



//==========  DOM学习  =====================
document.querySelector('div>p').textContent = "abc";
document.createTextNode("createTextNode"); //定义成文本节点需用appendChild()添加到元素上。

// 多个元素的集合可以采用数组的访问方式，也可以采用item(i)方法来访问：
div = document.querySelectorAll('div');
// 可以用div[i]来访问或者用 div.item(i)来访问。



/* ==================================================

  web浏览器 操作DOM

  =================================================== */


// window对象
//操作载入窗口的文档，存储客户端上文档的特殊数据（例如使用本地数据库或其他存储设备），为当前窗口绑定event handler，等等
var width = window.innerWidth;
var height = window.innerHeight;
//Navigator 对象
//可以用这个对象获取一些信息，比如来自用户摄像头的地理信息、用户偏爱的语言、多媒体流等等
//document 对象 是载入窗口的实际页面


// DOM的增删改查
// 1.查: document.querySelector()\queryselectorAll()\
// 2.增: document.createElement('p'); => node.textContent='文本' 或者 creatTextNode('文本');=>node.appendChild();
// 3.删和移动:
// 删除节点:Node.removeChild()或者将节点移动到另外一个节点(用 appendChild('要移动的引用元素').)
// 如果要复制节点, 用Node.cloneNode()方法.
// 删除自身节点: selfNode.parentNode.removeChild('selNode');

//操作样式
/*
添加元素内部样式
element.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';
*/
// 添加class
// element.setAttribute('class', 'classname');
// 删除属性:element.removeAttribute(),返回underfined,所以不能用链式方法.
/* setAttribute('src', 'http://www.v-in.net');
getAttribute('attrName');
removeAttribute('attrName'); */

///=================  闭包 =================================
// 概念:闭包,就是指当一个内部函数被其外部函数之外的变量引用时,就形成了一个闭包,例如以下为最简单的闭包:
function a(x) {
  var b = function (y) {
    return x + y;
  }; //b为内部函数,a为b的外部函数
  return b; //返回这个内部函数
}
c = a(5); //执行a函数
//执行函数a, 返回一个函数b.正常情况下,返回的都是一个值,但是这里返回是一个函数,这个函数依赖函数a执行才能产生.
// a(5)执行时,会生产一个变量x,x指针指向值5.
// 通常情况下函数执行完毕后, x变量会被垃圾处理机制回收.但是, 这里因为执行a函数后, 会生产一个新的函数, 而新的函数还会用到x变量的值.所以这个x没有被回收(指针已然指向5),而是继续存在.这样就形成了一个变量x常在的情况.
//x变量因为只能通过返回的函数b引用,所以x具有了私有性.其他的方式都无法引用x变量.
// 一般为了完整性, 可以这样写:
function a(x) {
  var b = function (y) {
    return x + y;
  }
  window.c = b; //外部c变量引用了内部函数b,就形成一个闭包
}


// 闭包的高级写法 :
// 参考: https://zhuanlan.zhihu.com/p/27857268/
//参考: http://www.xurry.top/2017/09/06/javascript-closure/
(function (document) {
  var viewport;
  var obj = {
    init: function (id) {
      viewport = document.querySelector("#" + id);
    },
    addChild: function (child) {
      viewport.appendChild(child);
    },
    removeChild: function (child) {
      viewport.removeChild(child);
    }
  }
  window.jView = obj;
})(document);

/*
 ========================重新介绍JavaScript============================

 */
//JavaScript 按照如下规则将变量转换成布尔类型：
// 1.false、 0、 空字符串("")、 NaN、 null 和 undefined 被转换为 false
Boolean('NaN'); //true
Boolean(NaN); //false
Boolean(null); //false
isNaN(NaN); // true
// ...
// 2.所有其他值被转换为 true


// 内置函数 parseInt() 将字符串转换为整型
parseInt("123", 10); // 123
parseInt("010", 10); //10
parseInt("010"); //  8
parseInt("0x10"); // 16
parseInt("11", 2); // 3
parseInt("hello", 10); // NaN

//字符串 操作
"hello".length; // 5
"hello".charAt(0); // "h"
"hello, world".replace("hello", "goodbye"); // "goodbye, world"
"hello".toUpperCase(); // "HELLO"

//变量
// let和const为块级变量声明关键字, 只在块级内可见
// const 声明为一个常量, 不能在赋值改变值.
// const Pi = 3.14; // 设置 Pi 的值
// Pi = 1; // 将会抛出一个错误因为你改变了一个常量的值。

//控制结构
// for in
// for of
obj.forEach();


// 注意， Array.length 并不总是等于数组中元素的个数， 如下所示：
var a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a.length); // 101
// 记住： 数组的长度是比数组最大索引值多一的数。



// ===============arguments对象==========
// 每个函数都有一个arguments的内部对象,这个对象类似数组(但是不是数组,只有length属性和索引值),包括了所有的参数.列如:
function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
add(2, 3, 4, 5, 6); //20;

// 关于call和apply和this,参考:https://www.cnblogs.com/hjson/archive/2019/01/11/10254555.html
// call(), apply()在特定作用域调用函数
// bind（）会创建一个函数的实例， this会被绑定到bind() 函数:bind() 绑定this， bind()() 调用函数

//===var let const 隐式地全局变量=====
// var 作用域为上下文和子块内;
// let和const 作用域为
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // The scope is inside the if-block
  var b = 1; // The scope is inside the function

  console.log(a); // 4
  console.log(b); // 1
}

console.log(a); // 5
console.log(b); // 1


// ====== 事件 ========
// 事件流:
// 事件冒泡: 事件由开始最具体的元素接收(文档中嵌套层次最深的那个节点),然后逐级向上传播到最不具体的那个节点(文档)
// 事件捕获: 不太具体的节点最开始接收到事件,最具体的元素最后接收到事件.(与事件冒泡相反)

// 事件处理程序

// 1.html事件处理程序;
// 事件直接加载html中, 如
/* <input  type='button' value ='按钮' onclick = 'showMessage('hello')'> */

// 2.DOM0级事件处理程序: 把一个函数直接赋值给一个处理程序属性.
/* <input type ='button' value ='按钮' id='btn'>
  var btn=document.querySelctor('btn');
  btn.onclick = functon(){
   ...
  }
  删除
  btn.onclick = null;
*/
//3.DOM2级事件处理程序(定义了2个方法)
// addEventListener() 和removeEventListener()
// btn.addEventListener('click', function, false(表示冒泡));
// btn.removeEventListener('click', function,false); //删除监听

// 4. IE8&lt 事件处理程序 attachEvent() dettachEvent() 只有2个参数,因为IE8默认事件冒泡
// btn.attachEvent('oclick', showMes);
// btn.dettachEvent('oclick', showMes);//删除监听

// 5.跨浏览器事件处理程序
var eventUtil = {
  //添加句柄
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler;
    }
  },
  // 删除事件句柄
  removeHandler: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent('on' + type, handler)
    } else {
      element['on' + type] = null;
    }
  },
  //获取事件
  getEvent: function (event) {
    return event ? event : window.event; //IE8和IE以下浏览器事件对象引用为window.event
  },
  //获取事件类型
  getType: function (event) {
    return event.type;
  },
  //获取事件目标对象
  getElement: function (event) {
    return event.target || event.scrElement;
  },
  //阻止事件默认行为
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  //阻止事件冒泡行为
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
}
eventUtil.addHandler(btn, 'click', showMes);
eventUtil.removeHandler(btn, 'click', showMes);
btn.onclick = eventUtil.getevnet(event);

// DOM 事件对象
/*
1.属性 type target
2.方法 ele.stopPropagation() ele.preventDefault() //在调用函数中写入代码
 */
//IE8 &lt IE8 事件对象
/*
1.属性 type
2.属性 srcElement 获取事件目标
3.属性  cancelBubble = true 阻止冒泡
4.属性 returnValue=false 用于设置阻止事件默认行为
 */


///逗号操作符  对它的每个操作数求值（从左到右），并返回最后一个操作数的值。
var x = 1;
x = (x++, x);
console.log(x);
// expected output: 2
x = (2, 3);
console.log(x);
// expected output: 3

//变量的基本类型和引用类型
// Undefined、 Null、 Boolean、 Number 和String 为基本类型
// Object 为引用类型为引用类型
function setName(obj) {
  obj.name = "Nicholas";  //obj的指针还是指向person对象
  obj = new Object();  //obj的指针指向了一个新的其他的对象,指针改变了.
  obj.name = "Greg";
}
var person = new Object();
setName(person); //person对象传递给函数的是一个person变量的指针的值,这个指针的值指向了堆区的新建对象.
alert(person.name); //"Nicholas"