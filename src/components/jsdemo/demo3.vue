<template>
  <div class="demo3">
    <h3>async awiat</h3>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'jsDemo3',
  components: {},
  data() {
    return {
      text: 'async awiat'
    };
  },
  computed: {},
  watch: {},
  mounted() {
    // https://segmentfault.com/a/1190000007535316
    // this.init();
    // this.awaitDemo();
    this.awaitDemo2();
  },
  methods: {
    async async1() {
      return 123;
    },
    test1() {
      console.log(1);
      // return 1;
    },
    // async 函数返回的是一个 Promise 对象。 async 函数没有返回值，又该如何？很容易想到，它会返回 Promise.resolve(undefined)。
    init() {
      async function testAsync() {
        console.log(111);
        return 'hello async';
      }
      const result = testAsync();
      const result1 = this.async1();
      console.log(result, result1, '加了async 的函数返回什么');
      Promise.all([result, result1]).then(res => {
        console.log(res[0], res[1], '获取返回值');
      });
    },
    // 它等的实际是一个返回值。注意到 await 不仅仅用于等 Promise 对象，
    // 它可以等任意表达式的结果，所以，await 后面实际是可以接普通函数调用或者直接量
    async awaitDemo() {
      let result = await this.async1();
      let result1 = await this.test1();
      console.log(result, result1, '获取await返回值');
    },
    // 上面已经说明了 async 会将其后的函数（函数表达式或 Lambda）
    // 的返回值封装成一个 Promise 对象，而 await 会等待这个 Promise 完成，并将其 resolve 的结果返回出来。
    async awaitDemo2() {
      // 不用 async await
      function takeLongTime() {
        return new Promise(resolve => {
          setTimeout(() => resolve('long_time_value'), 1000);
        });
      }

      takeLongTime().then(v => {
        console.log('got', v);
      });
      // 使用async await
      function takeLongTime1() {
        return new Promise(resolve => {
          setTimeout(() => resolve('long_time_value'), 1000);
        });
      }

      async function test() {
        const v = await takeLongTime1();
        console.log(v);
      }

      test();
    }
  }
});
</script>
