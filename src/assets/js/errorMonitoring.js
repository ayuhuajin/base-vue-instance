// https://github.com/happylindz/blog/issues/5
// onerror 主要是来捕获预料之外的错误，而 try-catch 则是用来在可预见情况下监控特定的错误，两者结合使用更加高效。
// window.onerror 函数只有在返回 true 的时候，异常才不会向上抛出，否则即使是知道异常的发生控制台还是会显示 Uncaught Error: xxxxx。
/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
window.onerror = function(msg, url, row, col, error) {
  console.log('错误', {
    msg,
    url,
    row,
    col,
    error
  });
  return true;
};

// 网络请求异常    由于网络请求异常不会事件冒泡，因此必须在捕获阶段将其捕捉到才行
// 由于网络请求异常不会冒泡，因此必须在capture阶段捕获才可以。
// 但还有一个问题是这种方式无法精确判断异常的HTTP状态是404还是500等，因此还是要配合服务端日志来排查分析才可以。
window.addEventListener(
  'error',
  (msg, url, row, col, error) => {
    console.log('404错误', msg, url, row, col, error);
    return true;
  },
  true
);

// 所以如果你的应用用到很多的 Promise 实例的话，特别是你在一些基于 promise 的异步库比如 axios 等一定要小心，
// 因为你不知道什么时候这些异步请求会抛出异常而你并没有处理它，所以你最好添加一个 Promise 全局异常捕获事件 unhandledrejection。
window.addEventListener('unhandledrejection', function(e) {
  e.preventDefault();
  console.log('promise错误', e.reason);
  return true;
});
