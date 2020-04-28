let that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this;
        this.main = document.querySelector(id);
        console.log(this.main);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        console.log(this.sections);
        /*初始化绑定事件*/
        this.init();
    }

    init() {
        // init 初始化操作让相关元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            /*this.lis[i].onclick = function () {
                console.log(this.index)     // 这里的this指向绑定事件的对象lis[i], 而不是Tab的实例对象
            }*/
            this.lis[i].onclick = this.toggleTab;
        }
    }

    toggleTab() {
        console.log(this.index);
        that.clearClass();
        this.className = 'tab_head_active';
        that.sections[this.index].className = 'tab_body_active';
    }

    clearClass(){
        for (let i =0;i<this.lis.length;i++){
            this.lis[i].className = '';
            this.sections[i].className ='';
        }
    }

    addTab() {
    }

    removeTab() {
    }

    edit_Tab() {
    }
}

new Tab('#tab');