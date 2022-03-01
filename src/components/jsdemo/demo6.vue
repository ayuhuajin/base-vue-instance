<template>
  <div class="demo6">
    <h3>解构赋值</h3>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'jsDemo6',
  components: {},
  data() {
    return {
      text: '解构赋值'
    };
  },
  computed: {},
  watch: {},
  mounted() {
    // https://juejin.cn/post/7016520448204603423?utm_source=gold_browser_extension
    // https://www.cnblogs.com/koto/p/5865064.html
    // this.init();
    this.objDeconstruction();
  },
  methods: {
    init() {
      // 1.数组解构
      let [a, b, c] = [1, 2, 3];
      console.log(a, b, c);
      // 2.解构赋值允许使用默认值。
      let [d, e = 10, f = 10] = [4, 5];
      console.log(d, e, f);
      //3. 函数传参解构：
      let arr = ['我是字符窜', 'app', '3'];
      function fn([a, b, c]) {
        console.log(a, b, c); //我是字符窜 app 3
      }
      fn(arr);
      // 剩余运算符
      let [g, ...h] = [3, 4, 5, 6, 7];
      console.log(g, h);
    },
    // 对象解构
    objDeconstruction() {
      let obj = { foo: 'aaa', bar: 'bbb' };
      let { foo, bar } = obj;
      console.log(foo, bar, '输出foo，bar');
      // 服务端返回的数据对象中的属性名不是我想要的，这样取值
      let obj1 = { a: 1, b: 2, c: 3, d: 4 };
      let { a: mockA } = obj1;
      console.log(mockA, '模拟a');
      // ES6的解构赋值虽然好用。但是要注意解构的对象不能为undefined、null。否则会报错，故要给被解构的对象一个默认值。
      const { a, b, c, d, e } = obj || {};
    }
  }
});
</script>
