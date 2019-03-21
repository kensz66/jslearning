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

//.slice()：从一个数组中提取相连的一串值作为新数组输出，不改变原数组
[1,2,3,4,5,6].slice(2,5); // [3,4,5]

//.splice :修改数组
从第 2 位开始删除 0 个元素，插入“drum”
节

var myFish = ["angel", "clown", "mandarin", "surgeon"];
var removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "surgeon"]
// 被删除的元素: [], 没有元素被删除

从第 2 位开始删除 0 个元素，插入“drum” 和 "guitar"
节

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除

从第 3 位开始删除 1 个元素
节

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]

从第 2 位开始删除 1 个元素，插入“trumpet”
节

var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish: ["angel", "clown", "trumpet", "surgeon"]
// 被删除的元素: ["drum"]

从第 0 位开始删除 2 个元素，插入"parrot"、"anemone"和"blue"
节

var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// 运算后的 myFish: ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// 被删除的元素: ["angel", "clown"]

从第 2 位开始删除 2 个元素
节

var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// 运算后的 myFish: ["parrot", "anemone", "sturgeon"]
// 被删除的元素: ["blue", "trumpet"]

从倒数第 2 位开始删除 1 个元素
节

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]

从第 2 位开始删除所有元素
节

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]


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
function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}
Person.prototype.greeting = function () {
  alert(this.name);
};
//Person构造函数创建完毕;

function Teacher(name, age, gender, subject) {
  Person.call(this, name,age,gender);
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
document.querySelector('div>p').textContent="abc";
document.createTextNode("createTextNode"); //定义成文本节点需用appendChild()添加到元素上。

// 多个元素的集合可以采用数组的访问方式，也可以采用item(i)方法来访问：
div=document.querySelectorAll('div');
// 可以用div[i]来访问或者用 div.item(i)来访问。



/* ==================================================

  web浏览器 操作DOM

  =================================================== */


// window对象
  //操作载入窗口的文档，存储客户端上文档的特殊数据（例如使用本地数据库或其他存储设备），为当前窗口绑定event handler，等等
  var width=window.innerWidth;
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
eldment.style.color = 'white';
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

