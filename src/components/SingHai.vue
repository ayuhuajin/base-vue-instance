<template>
  <div>
    <div class="name">
      嗨前端
    </div>
    <div class="author">
      作者:wsinghai
    </div>
    <el-button>按钮</el-button>
    <div ref="parameterLine" class="line" style="height: 26vh;width:99%"></div>
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
    this.parameterLine();
  },
  methods: {
    async init() {
      await index.dispatch('getAllCategory');
    },
    parameterLine() {
      this.$nextTick(() => {
        let myChart: any = (this as any).$echarts.init(this.$refs.parameterLine);
        myChart.clear();
        myChart.showLoading({
          text: '数据获取中',
          textColor: '#fff',
          effect: 'whirling',
          maskColor: 'rgba(255, 255, 255, 0)'
        });
        setTimeout(function() {
          myChart.hideLoading();
        }, 500);

        myChart.setOption({
          grid: {
            left: '39px',
            right: '1%',
            top: '12%',
            bottom: '26%'
          },
          tooltip: {
            show: true,
            trigger: 'axis'
          },
          color: ['#729EFF', '#009944', '#FEC400'],
          legend: {
            show: true,
            data: ['111', '222']
          },
          xAxis: {
            type: 'category',
            data: [1, 1, 1, 1, 2]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Forest',
              type: 'bar',
              barGap: 0,
              data: [320, 332, 301, 334, 390]
            },
            {
              name: 'Steppe',
              type: 'bar',
              data: [220, 182, 191, 234, 290]
            }
          ]
        });

        window.addEventListener('resize', function() {
          myChart.resize();
        });
      });
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
