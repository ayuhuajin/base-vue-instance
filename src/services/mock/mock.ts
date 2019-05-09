/**
 * @file 定义模拟数据
 * @author WQH
 * @date 2019-04-23 15:00
 * @tips 请求有带参数时，请把接口url写为正则匹配，否则匹配不到就报错（Mock.mock('此处为正则'）
 * @website  http://mockjs.com/       http://mockjs.com/examples.html
 */

import Mock from 'mockjs';
var Random = Mock.Random; //声明mock的Random 方法
Mock.setup({
  // 表示响应时间介于 1000 和 3000 毫秒之间，默认值是'10-100'。
  timeout: '100-1000'
});

//post 请求demo
Mock.mock(/(\/api\/postRequest\/demo)/, 'post', (req: any, res: any, content: any) => {
  console.log(req, res, content); // url、type 和 body 三个属性
  return Mock.mock({
    Message: 'Success',
    Result: 0,
    Rmark: '@paragraph',
    mtime: '@datetime', //随机生成日期时间
    score: '@natural(1, 800)', //随机生成1-800的数字
    charter: /[a-z]{2}[A-Z]{2}[0-9]/, //返回正则匹配的随机字符串
    nickname: '@cname', //随机生成中文名字,
    email: '@email',
    url: '@url',
    address: '@county(true)',
    number: /^1[0-9]{10}$/, //用正则匹配1开头的11位数字的手机号
    'phone|1': ['13531544954', '13632250649', '15820292420', '15999905612'], //在数组中随机找一个
    'mobile|188.8': 188,
    'string|10': '*',
    'Images|1-3': [Random.image('200x100')], // 随机生成图片
    'sex|1': [0, 1],
    'specData|1-10': [],
    'dataList|1-10': [
      {
        'id|+1': 1, // 属性 id 是一个自增数，起始值为 1，每次增 1
        'data|1-10': [
          {
            name: '张三'
          }
        ]
      }
    ]
  });
});

/************************************** mock 数据开始 *********************************/
