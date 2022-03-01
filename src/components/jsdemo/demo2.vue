<template>
  <div class="demo2">
    <h3>promise async await</h3>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'jsDemo2',
  components: {},
  data() {
    return {
      userInfo: '车车'
    };
  },
  computed: {},
  watch: {},
  mounted() {
    // this.init();
    // this.getPromiseAll();
    // this.getPromiseRace();
    // this.promise1().then(res => {
    //   console.log(res, '输出this.promise1');
    // });
    let all = Promise.all([this.promise5(), this.promise6(), this.promise7]);
    all.then(res => {
      console.log(res, 789);
    });
  },
  methods: {
    init() {
      let promise = new Promise((resolve, reject) => {
        // resolve(1);
        reject(1);
      })
        .then(result => {
          console.log(result, '输出promise1');
        })
        .catch(result => {
          console.log(result, 'catch输出promise1');
        });
      console.log(promise, 7897);
    },
    promise1() {
      return new Promise((resolve, reject) => {
        resolve(1);
        // reject(1);
      });
    },
    promise2() {
      return new Promise((resolve, reject) => {
        resolve(2);
        // reject(2);
      });
    },
    promise3() {
      return new Promise((resolve, reject) => {
        // resolve(3);
        reject(3);
      });
    },
    promise4() {
      return new Promise((resolve, reject) => {
        resolve(4);
        // reject(4);
      });
    },
    promise5() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(15);
        }, 1000);
      });
    },
    // promiseall获取 异步代码获取不到里面的状态,需要用promise5 的return new Promise
    async promise6() {
      let b = '';
      setTimeout(() => {
        b = 16;
        return 16;
      }, 1000);
    },
    // promiseall 可以获取同步代码的 状态
    async promise7() {
      return 7;
    },

    // 全部完成，返回值组成一个数组，传递给p的回调函数
    // 只要之中有一个被rejected，all的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给all的回调函数。
    getPromiseAll() {
      let all = Promise.all([this.promise1(), this.promise2(), this.promise3()]);
      all
        .then(res => {
          console.log(res, '返回promiseall');
          console.log(res[0], '返回promiseall');
        })
        .catch(res => {
          console.log(res, '获取promiseAll catch');
        });
      console.log(all);
    },
    // 只要其中有一个实例率先改变状态，不管状态resolve或者reject，race的状态就跟着改变。那个率先改变的Promise实例的返回值，就传递给race的返回值。
    getPromiseRace() {
      let race = Promise.race([this.promise1(), this.promise3(), this.promise2()]);
      race
        .then(res => {
          console.log(res, '返回promiserace');
        })
        .catch(res => {
          console.log(res, '获取promiseRace catch');
        });
      console.log(race);
    }
  }
});
</script>
