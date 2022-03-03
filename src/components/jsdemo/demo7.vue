<template>
  <div class="demo7">
    <h3>this</h3>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'jsDemo7',
  components: {},
  data() {
    return {
      text: 'this'
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.init();
    // this.changeThisPoint();
  },
  methods: {
    init() {
      // 1.普通函数调用 此时 this 指向 window
      function foo() {
        console.log(this, '普通函数调用');
      }
      foo();
      // 2.构造对象函数调用 此时 this 指向 实例对象
      function Person(age, name) {
        this.age = age;
        this.name = name;
        console.log(this);
      }
      var p1 = new Person('18', 'wang');
      var p2 = new Person('19', 'li');
      console.log(p1, p2, '构造函数调用');
      // 3.对象方法调用 此时 this 指向 该方法所属的对象
      var obj = {
        fn: function() {
          console.log(this); //obj
        }
      };
      obj.fn();
      // 注意  如果fn函数不作为obj的一个属性被调用，会是什么结果呢？
      var fn1 = obj.fn;
      fn1();
      // 如上代码，如果fn函数被赋值到了另一个变量中，并没有作为obj的一个属性被调用，那么this的值就是window，this.x为undefined。

      // 4. 在构造函数的prototype中，this代表着什么
      function Fn() {
        this.name = '车车';
        this.year = '2022';
      }
      Fn.prototype.getName = function() {
        console.log(this.name, '获取prototype this', this);
      };
      var f1 = new Fn();
      f1.getName();
      // 如上代码，在Fn.prototype.getName函数中，this指向的是f1对象。因此可以通过this.name获取f1.name的值。
      // 其实，不仅仅是构造函数的prototype，即便是在整个原型链中，this代表的也都是当前对象的值。
      const bar = function() {
        console.log(this, arguments);
      };
      Function.prototype.message = function() {
        console.log(this, 'bar.message 里面的this');
      };
      bar.prototype.name = 'bar';
      bar.message();
      // 5.settimeOut this
      setTimeout(function() {
        console.log(this, 'setTimeOUt this 指向');
      });
    },
    //apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
    //apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
    //apply 、 call 两者都可以利用后续参数传参； 但是传参的方式不一样，apply是数组，call是正常传参形式
    //bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
    // 改变this指向的 方法
    changeThisPoint() {
      // 1. call
      var lisi = { names: 'lisi' };
      var zs = { names: 'zhangsan' };
      function f(age) {
        // console.log(this.names);
        console.log(age, 'call');
      }
      f(23); //undefined
      //将f函数中的this指向固定到对象zs上；
      f.call(zs, 32); //zhangsan

      // 2.apply
      var lisi1 = { name: 'lisi' };
      var zs1 = { name: 'zhangsan' };
      function f1(age, sex) {
        console.log(this.name + age + sex, 'apply');
      }
      //将f函数中的this指向固定到对象zs上；
      f1.apply(zs1, [23, 'nan']);

      // 3.bind
      var a = {
        user: '追梦',
        fn: function() {
          console.log(this.user, '输出user');
        }
      };
      var b = a.fn;
      var c = b.bind(a);
      c();
    }
  }
});
</script>
