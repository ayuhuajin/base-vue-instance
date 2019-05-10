<template>
  <div>
    <div class="name">
      嗨前端
    </div>
    <div class="author">
      作者:wsinghai
    </div>
    <!-- 饿了吗框架 -->
    <el-button>按钮</el-button>
    <!-- echart 曲线图 -->
    <div ref="parameterLine" class="line" style="height: 200px;width:400px"></div>
    <!-- 高德地图 -->
    <div id="container" class="container" style="height:200px;width:400px;border:1px solid #dfe1e6;"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import mixin from '@/assets/js/mixin.ts';
import index from '@/store/modules/index.ts';
import gdMap from '@/plugins/gdMaps.ts';
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
    // 加载地图
    this.loadMap();
  },
  methods: {
    async init() {
      await index.dispatch('getAllCategory');
    },
    // 加载地图
    loadMap() {
      gdMap().then(
        AMap => {
          let that = this;
          console.log('地图加载成功');
          let map = new (AMap as any).Map('container', {
            resizeEnable: true,
            center: [111.158728, 28.575624],
            zoom: 5
          });
          // 地理编码，地址编经纬度
          (AMap as any).plugin('AMap.Geocoder', function() {
            var geocoder = new (AMap as any).Geocoder({
              // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
              batch: true
            });
            let addresses: any = ['厦门市集美区杏林湾营运中心'];
            let markers: any = [];
            geocoder.getLocation(addresses, function(status: any, result: any) {
              if (status === 'complete' && result.geocodes.length) {
                //批量 生成点标记
                for (let i = 0; i < result.geocodes.length; i += 1) {
                  var marker = new (AMap as any).Marker({
                    map: map,
                    position: result.geocodes[i].location,
                    icon: new (AMap as any).Icon({
                      //自定义图标
                      image:
                        'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                      size: new (AMap as any).Size(52, 52), //图标大小
                      imageSize: new (AMap as any).Size(18, 26)
                    })
                  });
                  // 设置鼠标悬浮 标记点说明
                  marker.setTitle(`公司`);
                  // marker.setLabel({
                  //   offset: new (AMap as any).Pixel(15, 15),
                  //   content: '定位名称'
                  // });
                  markers.push(marker);
                }
                map.add(markers); // 添加标记
                // map.setFitView(markers); // 自适应(setFitView)部分Marker显示
              }
            });
          });
        },
        e => {
          console.log('地图加载失败', e);
        }
      );
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
