<template>
  <div>
    <div class="name">
      嗨前端
    </div>
    <div class="author">
      作者:wsinghai
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mixin from '@/assets/js/mixin.ts';
import index from '@/store/modules/index.ts';
export default Vue.extend({
  name: 'SingHai',
  mixins: [mixin],
  props: {
    msg: String
  },
  mounted() {
    this.init();
    console.log((this as any).cname);
  },
  methods: {
    async init() {
      await index.dispatch('getAllCategory');
    }
  }
});
</script>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.name {
  @include ellipsis;
  width: 20px;
}
.red-color {
  width: 120px;
  line-height: 40px;
  color: red;
}
//占位符 顾名思义，如果不被extend引用，它是不会被编译，也就是：不会占用css文件大小。这是和继承最大区别。
%circle {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #6db88a;
}
.author {
  @extend .red-color; //这里将继承.red-color类的所有样式
  @extend %circle; //这里将继承占位符所有样式
}
</style>
