var evUtil = {
  //添加句柄
  addHandler: function (event, type, handler) {
    if (event.addEventListener) {
      event.addEventListener(type, handler, false);
    } else if (event.attachEvent) {
      event.attachEvent('on' + type, handler)
    } else {
      event['on'+type] = handler;
    }
  },
  // 删除事件句柄
  removeHandler: function (event, type, handler) {
    if (event.removeEventListener) {
      event.removeEventListener(type, handler, false);
    } else if (event.detachEvent) {
      event.detachEvent('on' + type, handler)
    } else {
      event['on' + type] = null;
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
    return event.target || event.scrElevent;
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