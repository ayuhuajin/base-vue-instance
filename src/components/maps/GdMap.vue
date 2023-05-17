<template>
  <div class="gd-map">
    <div>
      <el-input v-model="keyWord" placeholder="搜索示例：广州,火锅"></el-input>
      <el-button @click="searchData">搜索</el-button>
      <el-button @click="exportData">导出</el-button>
    </div>
    <div id="container" class="container"></div>
    <!-- <div id="r-result"></div> -->
    <ul class="list">
      <li v-for="(item, index) in businessData" :key="index">
        {{ item.address }}
      </li>
    </ul>
    <!-- <div id="panel" class="panel"></div> -->
    <div class="input-card" style="width: 120px">
      <button class="btn" onclick="polyEditor.open()" style="margin-bottom: 5px">开始编辑</button>
      <button class="btn" onclick="polyEditor.close()">结束编辑</button>
    </div>
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
      businessData: [],
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
      ],
      map: null,
      AMap: null
    };
  },
  mounted() {
    // 高德地图API功能
    this.loadMap();
  },
  methods: {
    // 加载地图
    loadMap() {
      gdMap().then(AMap => {
        this.AMap = AMap;
        this.map = new AMap.Map('container', {
          resizeEnable: true,
          center: [111.158728, 28.575624],
          zoom: 5
        });

        //构造折线编辑对象，并开启折线的编辑状态
        // var path = [
        //     [116.403322, 39.920255],
        //     [116.410703, 39.897555],
        //     [116.402292, 39.892353],
        //     [116.389846, 39.891365]
        // ]

        // var polygon = new AMap.Polygon({
        //     path: path,
        //     strokeColor: "#FF33FF",
        //     strokeWeight: 6,
        //     strokeOpacity: 0.2,
        //     fillOpacity: 0.4,
        //     fillColor: '#1791fc',
        //     zIndex: 50,
        // })

        // this.map.add(polygon)
        // // 缩放地图到合适的视野级别
        // this.map.setFitView([ polygon ])
        // var polyEditor = new AMap.PolyEditor(this.map, polygon)

        // polyEditor.on('addnode', function(event) {
        //     log.info('触发事件：addnode')
        // })

        // polyEditor.on('adjust', function(event) {
        //     log.info('触发事件：adjust')
        // })

        // polyEditor.on('removenode', function(event) {
        //     log.info('触发事件：removenode')
        // })

        // polyEditor.on('end', function(event) {
        //     log.info('触发事件： end')
        //     // event.target 即为编辑后的多边形对象
        // })
      });
    },
    init(excel = true) {
      let current = 1;
      let that = this;
      this.AMap.service(['AMap.PlaceSearch'], function() {
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
        // gdMap.event.addListener(placeSearch,"markerClick", function(e){
        // })
        //关键字查询
        function getSearch() {
          placeSearch.search(that.keyWord, (status, result) => {
            let count = parseInt(result.poiList.count / result.poiList.pageSize);
            if (current < count) {
              current++;
              that.businessData.push(...result.poiList.pois);
              getSearch();
            } else {
              that.businessData.push(...result.poiList.pois);
              if (!excel) {
                that.exportData();
              }
            }
            console.log(that.businessData);
          });
        }
        getSearch();
      });
    },
    // 数据搜索
    searchData() {
      this.init();
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
        export_json_to_excel(tHeader, data, `${this.keyWord}数据`);
      });
    },
    // 格式化数据
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
});
</script>

<style lang="scss" scoped>
.gd-map {
  ::v-deep #container {
    overflow: hidden;
    width: 100vw;
    height: 100vw;
    margin: 0;
    font-family: '微软雅黑';
  }
  .list {
    height: 300px;
    overflow: auto;
  }
}
</style>
