<template>
  <div>
    <section class="name">
      嗨前端
    </section>
    <section class="author">
      作者:wsinghai
    </section>
    <!-- 饿了吗框架 -->
    <section>
      <el-button>按钮</el-button>
    </section>
    <section class="switch">
      开关
    </section>
    <div :class="$style['module-test']">
      module 样式测试
    </div>
    <!-- echart 曲线图 -->
    <section ref="parameterLine" class="line" style="height: 200px;width:400px"></section>
    <!-- 高德地图 -->
    <section id="container" class="container" style="height:200px;width:400px;border:1px solid #dfe1e6;"></section>
    <section style="width:200px;height:200px;">
      <!-- <live-video :key="1" :url="videoUrl" :index="1"></live-video> -->
    </section>
    <div class="border-1px">wsianghia</div>
    <section>
      <div id="editor" style="min-width:700px;max-width:1200px;margin: 0 auto;"></div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LiveVideo from '@/components/common/LiveVideo.vue';
import About from '@/views/About.vue';
import mixin from '@/assets/js/mixin.ts';
import index from '@/store/modules/index.ts';
import gdMap from '@/plugins/gdMaps.ts';
import wangeditor from 'wangeditor';

export default Vue.extend({
  name: 'SingHai',
  mixins: [mixin],
  components: {
    // LiveVideo,
  },
  data() {
    return {
      videoUrl:
        '//alhlsgw.lechange.com:9001/LCO/3E00EBAPAZ76A22/0/1/20170925133417/dev_20170925133417_itq70exptp5sa470.m3u8'
    };
  },
  mounted() {
    console.log(this.$style);
    this.init();
    this.parameterLine();
    // 加载地图
    this.loadMap();
    this.createEditor();
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
    // echart曲线图
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
    },
    // 创建编辑器
    createEditor() {
      // var E = window.wangEditor;
      var editor = new wangeditor('#editor');
      // 或者 var editor = new E( document.getElementById('editor') )
      editor.create();
    }
  }
});
</script>
<style lang="scss" module>
// 通过module作用的style将会重新命名为：文件名_原style名_不定后缀。
.module-test {
  color: blue;
}
.test {
  color: red;
}
</style>
<style lang="scss" scoped>
@import '@/assets/css/base.scss';
.name {
  @include ellipsis;
  width: 40px;
}
.switch {
  @include switch;
  // background: url('../assets/images/icon_back.png')
}
.border-1px {
  // width: 100px;
  margin-left: 40px;
  margin-bottom: 20px;
  line-height: 40px;
  text-align: center;
  @include border-1px(1px, solid, red, all);
}
.red-color {
  width: 120px;
  line-height: 40px;
  color: red;
}
//占位符 顾名思义，如果不被extend引用，它是不会被编译，也就是：不会占用css文件大小。这是和继承最大区别。
%circle {
  border-radius: 5px;
  width: 120px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #6db88a;
}
.author {
  @extend .red-color; //这里将继承.red-color类的所有样式
  @extend %circle; //这里将继承占位符所有样式
}
// video
.video-plugin {
  height: 100%;
}
</style>
