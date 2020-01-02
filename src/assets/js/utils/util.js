export class pp {
  static throttle(fn, delay = 500) {
    let canRun = true;
    return function() {
      // 这里其实是使用了闭包的原理，函数内部保存使用了函数外部的变量。
      if (!canRun) return;
      canRun = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        canRun = true;
      }, delay);
    };
  }
  static debounce() {
    console.log('防抖');
  }
  test() {
    console.log('test');
  }
}
/**
 * 节流函数
 * desc 
 * dd: throttle(() => {
      console.log('操作');
    }, 2000),
 * @param {Function} fn 节流函数
 * @param {Number} delay 微秒
 *
 */
export function throttle(fn, delay) {
  var last = 0;
  return function() {
    var now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, arguments);
      last = now;
    }
  };
}

/**
 * 防抖
 * desc
 * kk: debounce(() => {
      console.log(3333);
    }, 2000),
 * @param {Function} fn
 * @param {Number} delay
 */
export function debounce(fn, delay) {
  var timer;
  return function() {
    var self = this,
      argumentsBySelf = arguments;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(self, argumentsBySelf);
    }, delay);
  };
}

/**
 * @param 获取test 数据
 */
export function test() {
  console.log('test');
}

/**
 * 日期转换为指定格式的字符串
 * @param {date} date 日期
 * @param {string} fmt 日期格式 yyyy-MM-dd HH:mm:ss
 */
export function dataFormat(date, fmt) {
  if (!date || !fmt) {
    return '';
  }
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}
