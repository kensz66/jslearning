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
doucument.addEventListener(DOMContentLoaded, function () { });
// DOMContentLoaded

input.focus()  //定位光标

//生成随机数
num = Math.floor(Math.random() * 100);//生产一个0-99的数值,包括1和9[(函数floor()]


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
var status = (a >= 18) ? 'adult' : 'minor';   //三元条件运算符其实是一个值

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



  //>>>>>>>>>>>>>>>>>instanceof 判断对象的类型(如 Date, Array, Number, Math等等...)
  // 注意区别数据类型和对象类型
  var theDay = new Date(1995, 12, 17);
  if (theDay instanceof Date) {
    // statements to execute
  }

//=================== this 基本表达式  =======================
// this在一个方法中,一般是代表正在调用该方法的那个对象(哪个调用了this所在位置的方法,哪个就是this代表的对象).


// >>>>>>>>>>>>>>>>>>>>>>>>>>   super左值表达式  >>>>>>>>>>>>>>>>>>
