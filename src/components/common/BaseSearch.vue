<template>
  <div class="base-search">
    <input type="text" v-model="value" @input="search()" placeholder="请输入搜索内容" />
    <span class="input-img" @click="search($event)"></span>
  </div>
</template>

<script>
import Bus from '@/assets/js/bus';
import { throttle, debounce } from '@/assets/js/utils/util';
export default {
  name: 'BaseSearch',
  props: {
    dialogInfo: {
      type: Object,
      require: true,
      dialogWidth: {
        default: '10.8rem'
      }
    }
  },
  data() {
    return {
      value: ''
    };
  },
  watch: {},
  methods: {
    // 节流函数
    // search: throttle(function() {
    //   console.log(this.value);
    //   Bus.$emit('search', this.value);
    // }, 1000),
    // 防抖函数
    search: debounce(function() {
      console.log(this.value);
      Bus.$emit('search', this.value);
    }, 500)
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.base-search {
  position: relative;
  input {
    width: 200px;
    padding-left: 20px;
    border: 1px solid #ddd;
    border-radius: 20px;
    line-height: 36px;
    font-size: 14px;
    color: #333;
    @include placeHolderColor(#333, 24px);
  }
  .input-img {
    position: absolute;
    width: 30px;
    height: 30px;
    margin-left: -40px;
    margin-top: 4px;
    cursor: pointer;
    background: url('../../assets/images/icon-search.png') no-repeat center center;
    background-size: 24px 24px;
  }
}
</style>
