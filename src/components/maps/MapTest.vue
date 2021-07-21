<template>
  <div class="map-test">
    <div>
      <el-input v-model="keyWord" placeholder="搜索示例：广州,火锅"></el-input>
      <el-button @click="searchData2(polygonArr)">搜索</el-button>
      <el-button @click="exportData">导出</el-button>
    </div>
    <div class="input-card" style="width: 120px">
      <button class="btn" @click="rectOpem()" style="margin-bottom: 5px">开始编辑</button>
      <button class="btn" @click="closeOpem()" style="margin-bottom: 5px">结束编辑</button>
      <button class="btn" @click="drawRectangle()" style="margin-bottom: 5px">绘制矩形</button>
      <button class="btn" @click="drawPolygon()" style="margin-bottom: 5px">绘制多边形</button>
      <button class="btn" @click="searchData()" style="margin-bottom: 5px">搜索</button>
      <button class="btn" @click="searchData2(polygonArr)" style="margin-bottom: 5px">搜索2</button>
      <button class="btn" @click="clearPolygon()" style="margin-bottom: 5px">移除多边形</button>
      <button class="btn" @click="clearDraw()" style="margin-bottom: 5px">关闭绘图</button>
      <button class="btn" @click="getLngLat()" style="margin-bottom: 5px">获取中心点</button>
    </div>
    <div id="container" class="container" ref="SelectMap"></div>
    <div id="result"></div>
    <div id="result1" style="display:none"></div>

    <ul class="list">
      <li v-for="(item, index) in businessData" :key="index">
        <span>{{ item.address }}</span> <span @click="addFriend">{{ item.tel }}</span>
      </li>
    </ul>
    <!-- <span @click="addFriend">234234</span> -->
  </div>
</template>

<script>
import Vue from 'vue';
import gdMap from '@/plugins/gdMaps.ts';
export default Vue.extend({
  name: 'GdMap',
  data() {
    return {
      keyWord: '餐饮',
      map: null,
      AMap: null,
      rectangleEditor: null,
      polygonArr: [],
      overlays: [],
      numCount: 0,
      businessData: [],
      placeSearch: null,
      //导出excel 表头
      tableTitleData: [
        {
          label: '省份',
          prop: 'pname'
        },
        {
          label: '城市',
          prop: 'cityname'
        },
        {
          label: '名称',
          prop: 'name'
        },
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '电话号码',
          prop: 'tel'
        },
        {
          label: '分类',
          prop: 'type'
        }
      ]
    };
  },
  mounted() {
    // 高德地图API功能
    this.loadMap();
  },
  methods: {
    // 编辑矩形
    rectOpem() {
      // var rectangleEditor = new AMap.RectangleEditor(map, rectangle)
      this.rectangleEditor.open();
    },
    // 结束编辑矩形
    closeOpem() {
      this.rectangleEditor.close();
    },
    // 关闭绘图
    clearDraw() {
      this.mouseTool.close(true);
    },
    // 清空地图上绘制的多边形
    clearPolygon() {
      this.map.remove(this.overlays);
      this.overlays = [];
      // console.log("yichu");
      // this.$refs["SelectMap"].clearPolygon();
      // this.map.remove(this.polygonArr);
      // this.polygonArr = [];
    },
    // 绘画矩形
    drawRectangle() {
      this.mouseTool.rectangle({
        strokeColor: 'red',
        strokeOpacity: 0.5,
        strokeWeight: 6,
        fillColor: 'blue',
        fillOpacity: 0.5,
        strokeStyle: 'solid'
      });
      // var rectangleEditor = new AMap.RectangleEditor(map, rectangle)
      // let kk = new this.AMap.Bounds(117.23424,34.3333)
      // console.log(kk.getCenter(),77777);
      // this.rectangleEditor.on('adjust', function(event) {
      //     console.log(888);
      // })

      // this.rectangleEditor.on('end', function(event) {
      //   console.log(888);
      //     // event.target 即为编辑后的矩形对象
      // })
    },
    // 绘制多边形
    drawPolygon() {
      let that = this;
      this.mouseTool.polygon({
        strokeColor: '#FF33FF',
        strokeOpacity: 1,
        strokeWeight: 6,
        fillColor: '#1791fc',
        fillOpacity: 0.4,
        // 线样式还支持 'dashed'
        strokeStyle: 'solid'
        // strokeStyle是dashed时有效
        // strokeDasharray: [30,10],
      });
      // this.mouseTool.on('draw', function(event) {
      //   // event.obj 为绘制出来的覆盖物对象
      //   // that.polygonArr = []
      //   console.log('覆盖物对象绘制完成',event)
      // })
    },
    // 获取经纬度中心
    getLngLat() {
      this.rectangle.getBounds();
      console.log('zhongxin');
    },
    // 加载地图
    loadMap() {
      gdMap().then(AMap => {
        this.AMap = AMap;
        let that = this;
        this.map = new AMap.Map('container', {
          resizeEnable: true,
          // center: [111.158728, 28.575624],
          zoom: 12
          // autoFitView: true
        });
        // console.log(this.map.getZoom(),777888);

        //自适应中心点、展示所有标记点--核心代码
        // var newCenter = this.map.setFitView();
        // newCenter.getCenter();
        AMap.plugin(
          [
            'AMap.InfoWindow',
            'AMap.ContextMenu',
            'AMap.Heatmap',
            'AMap.MouseTool',
            'AMap.RangingTool',
            'AMap.CircleEditor',
            'AMap.PolyEditor',
            'AMap.ToolBar',
            'AMap.Scale',
            'AMap.OverView',
            'AMap.MapType',
            'AMap.Geolocation',
            'AMap.RectangleEditor'
          ],
          function() {
            that.map.addControl(new AMap.ToolBar());
            that.map.addControl(new AMap.Scale());
            that.map.addControl(new AMap.RectangleEditor());
            that.map.addControl(new AMap.MouseTool());
          }
        );
        that.mouseTool = new AMap.MouseTool(this.map);
        // 监听绘图完成
        that.overlays = [];
        that.mouseTool.on('draw', function(event) {
          // event.obj 为绘制出来的覆盖物对象
          // that.polygonArr = []
          that.overlays.push(event.obj);
          // console.log('绘图',event.obj.Ce.path)
          let list = event.obj.Ce.path;
          let polyArr = [];
          list.forEach(ele => {
            polyArr.push([ele.lng, ele.lat]);
          });
          that.polygonArr = polyArr;
          // var rectangle = new AMap.Rectangle({
          //     strokeColor:'red',
          //     strokeWeight: 6,
          //     strokeOpacity:0.5,
          //     strokeDasharray: [30,10],
          //     // strokeStyle还支持 solid
          //     strokeStyle: 'dashed',
          //     fillColor:'blue',
          //     fillOpacity:0.5,
          //     cursor:'pointer',
          //     zIndex:50,
          // })
          that.rectangleEditor = new AMap.RectangleEditor(that.map, event.obj);
          // console.log(that.rectangleEditor,7878);
        });

        // 点击地图
        // that.map.on("click", function(e) {
        //   console.log(e.lnglat.getLng() + "," + e.lnglat.getLat());
        //   let lng = e.lnglat.getLng()
        //   let lat = e.lnglat.getLat()
        //   console.log(lng,lat,888999);
        //   that.polygonArr.push([lng,lat])
        // });

        // that.rectangleEditor = new AMap.RectangleEditor(this.map);
        that.PolyEditor = new AMap.PolyEditor(this.map);

        // 设置矩形
        // var southWest = new AMap.LngLat(116.356449, 39.859008)
        // var northEast = new AMap.LngLat(116.417901, 39.893797)

        // var bounds = new AMap.Bounds(southWest, northEast)

        // var rectangle = new AMap.Rectangle({
        //     bounds: bounds,
        //     strokeColor:'red',
        //     strokeWeight: 6,
        //     strokeOpacity:0.5,
        //     strokeDasharray: [30,10],
        //     // strokeStyle还支持 solid
        //     strokeStyle: 'dashed',
        //     fillColor:'blue',
        //     fillOpacity:0.5,
        //     cursor:'pointer',
        //     zIndex:50,
        // })

        // rectangle.setMap(this.map)
        // // 缩放地图到合适的视野级别
        // this.map.setFitView([ rectangle ])

        // that.rectangleEditor = new AMap.RectangleEditor(this.map, rectangle)
        // console.log(23333);
        // that.rectangleEditor.on('adjust', function(event) {
        //    console.log('触发事件：adjust',event.target)
        //    console.log(rectangle.getBounds().northeast.lat,rectangle.getBounds().northeast.lng,8889999);
        // })

        // that.rectangleEditor.on('end', function(event) {
        //   console.log('触发事件： end',event)
        // })
      });
    },
    searchData() {
      let that = this;
      this.AMap.service(['AMap.PlaceSearch'], function() {
        var placeSearch = new AMap.PlaceSearch({
          //构造地点查询类
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          city: '010', // 兴趣点城市
          citylimit: true, //是否强制限制在设置的城市内搜索
          map: that.map, // 展现结果的地图实例
          panel: 'result', // 结果列表将在此容器中进行展示。
          autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        });
        //多边形查
        that.polygonArr = [
          //多边形覆盖物节点坐标数组
          [116.403322, 39.920255],
          [116.410703, 39.897555],
          [116.402292, 39.892353],
          [116.389846, 39.891365]
        ];

        var polygon = new AMap.Polygon({
          path: that.polygonArr, //设置多边形边界路径
          strokeColor: '#FF33FF', //线颜色
          strokeOpacity: 0.2, //线透明度
          strokeWeight: 3, //线宽
          fillColor: '#1791fc', //填充色
          fillOpacity: 0.35 //填充透明度
        });
        placeSearch.searchInBounds('酒店', polygon);
      });
    },
    searchData2(path) {
      console.log('插件的第二种用法', path);
      this.businessData = [];
      let that = this;
      this.AMap.plugin(['AMap.PlaceSearch', 'AMap.Polygon'], function() {
        that.map.addControl(new AMap.Polygon());
        that.map.addControl(new AMap.PlaceSearch());
      });
      that.placeSearch = new AMap.PlaceSearch({
        //构造地点查询类
        pageSize: 50, // 单页显示结果条数
        pageIndex: 1, // 页码
        city: '010', // 兴趣点城市
        citylimit: true, //是否强制限制在设置的城市内搜索
        map: that.map, // 展现结果的地图实例
        panel: 'result1', // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      });
      // console.log(that.polygonArr,777888)
      var polygon = new AMap.Polygon({
        path: path, //设置多边形边界路径
        strokeColor: '#FF33FF', //线颜色
        strokeOpacity: 0.2, //线透明度
        strokeWeight: 3, //线宽
        fillColor: '#1791fc', //填充色
        fillOpacity: 0.35 //填充透明度
      });
      // placeSearch.searchInBounds('酒店', polygon);
      that.placeSearch.searchInBounds(that.keyWord, polygon, function(status, result) {
        // 搜索成功时，result即是对应的匹配数据
        if (status == 'complete' && result.poiList.count > 800) {
          that.splitLat(path);
        } else {
          // that.numCount = that.numCount + 1
          that.getSearch(polygon, 1);
        }
      });
    },
    getSearch(polygon, current) {
      // let current = 1;
      let that = this;
      //构造地点查询类
      var placeSearch = new AMap.PlaceSearch({
        pageSize: 50, // 单页显示结果条数
        pageIndex: current, // 页码
        city: '010', // 兴趣点城市
        citylimit: false, //是否强制限制在设置的城市内搜索
        map: that.map, // 展现结果的地图实例
        // panel: "panel", // 结果列表将在此容器中进行展示。
        autoFitView: true // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
      });

      placeSearch.searchInBounds(that.keyWord, polygon, (status, result) => {
        if (status !== 'complete') return;
        console.log(result.poiList.count, 'count数');
        let count = Math.ceil(result.poiList.count / result.poiList.pageSize);
        if (current < count) {
          current++;
          that.businessData.push(...result.poiList.pois);
          console.log(current + 'ci进来');

          that.getSearch(polygon, current);
        } else {
          that.businessData.push(...result.poiList.pois);
          console.log(current);
        }
        console.log(that.businessData);
      });
    },
    // 分割经纬度成4个 经纬度范围
    splitLat(path) {
      // lat 维度  lng 经度
      let arr = [];

      // arr.forEach((arr)=>{
      //   arr
      // })
      let centerLat = (path[0].lat + path[2].lat) / 2;
      let centerLng = (path[0].lng + path[2].lng) / 2;
      // path.forEach(ele => {
      //   arr.push([ele.lat,ele.lng])
      // });
      arr.push([
        [path[0].lng, path[0].lat],
        [centerLng, path[0].lat],
        [centerLng, centerLat],
        [path[0].lng, centerLat]
      ]);
      arr.push([
        [centerLng, path[1].lat],
        [path[1].lng, path[1].lat],
        [path[1].lng, centerLat],
        [centerLng, centerLat]
      ]);
      arr.push([
        [centerLng, centerLat],
        [path[2].lng, centerLat],
        [path[2].lng, path[2].lat],
        [centerLng, path[2].lat]
      ]);
      arr.push([
        [path[3].lng, centerLat],
        [centerLng, centerLat],
        [centerLng, path[3].lat],
        [path[3].lng, path[3].lat]
      ]);

      arr.forEach(item => {
        this.searchData2(item);
      });
    },
    // 导出
    exportData() {
      if (this.businessData && this.businessData.length == 0) {
        this.init(false);
        return;
      }
      // 导出表格的表头设置
      let allColumns = this.tableTitleData;
      var columnNames = [];
      var columnValues = [];
      for (var i = 0; i < allColumns.length; i++) {
        columnNames[i] = allColumns[i].label;
        columnValues[i] = allColumns[i].prop;
      }
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../assets/js/excel/Export2Excel');
        const tHeader = columnNames;
        const filterVal = columnValues;
        const list = this.businessData;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '数据');
      });
    },
    // 格式化数据
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    // 添加好友
    addFriend() {
      alert(123);
      console.log('添加好友');
      window.location.href = 'weixin://';
    }
  }
});
</script>

<style lang="scss" scoped>
.map-test {
  /deep/ #container {
    overflow: hidden;
    width: 100vw;
    height: 100vw;
    margin: 0;
    font-family: '微软雅黑';
  }
  .list {
    height: 300px;
    overflow: auto;
    li {
      display: flex;
    }
  }
}
</style>
