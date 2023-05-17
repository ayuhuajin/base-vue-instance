<template>
  <div class="bd-map">
    <div>
      <el-input v-model="keyWord" placeholder="搜索示例：广州,火锅"></el-input>
      <el-button @click="searchData">搜索</el-button>
      <el-button @click="exportData">导出</el-button>
    </div>
    <div id="container"></div>
    <div id="r-result"></div>
    <ul class="list">
      <li v-for="(item, index) in businessData" :key="index">
        {{ item.address }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'BdMap',
  data() {
    return {
      keyWord: '餐饮',
      businessData: [],
      //导出excel 表头
      tableTitleData: [
        {
          label: '省份',
          prop: 'province'
        },
        {
          label: '城市',
          prop: 'city'
        },
        {
          label: '名称',
          prop: 'title'
        },
        {
          label: '地址',
          prop: 'address'
        },
        {
          label: '电话号码',
          prop: 'phoneNumber'
        }
      ],
      // 表格数据
      tableData: [],
      map: null
    };
  },
  mounted() {
    // 百度地图API功能
    var map = new BMapGL.Map('container');
    let point = map.getCenter();
    console.log(point, 778878);
    map.centerAndZoom(new BMapGL.Point(), 11);
    var geolocation = new BMapGL.Geolocation();
    geolocation.getCurrentPosition(
      function(r) {
        // 这里对状态进行了判断   BMAP_STATUS_SUCCESS就代表检索成功
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMapGL.Marker(r.point);
          map.addOverlay(mk);
          // 定位到当前地点
          map.panTo(r.point);
          // r里面包括了一些详细的地址信息和经度纬度的值还有这里需要的point属性，里面也含有经度纬度的值，所以直接调用r.point获取到当前位置
          console.log(r);
        } else {
          alert('failed' + this.getStatus());
        }
      },
      { enableHighAccuracy: true }
    );

    map.enableScrollWheelZoom();
    this.map = map;
    // var local = new BMapGL.LocalSearch(map, {
    //   renderOptions:{map: map,panel: "r-result"}
    // });
  },
  methods: {
    init() {
      let businessData = [];

      var options = {
        onSearchComplete: results => {
          var totalPages = results.getNumPages();
          var currPage = results.getPageIndex(); // 获取当前是第几页数据
          //  console.log(results.getResults().Br,88888);
          // results.getResults().Br
          //  console.log(local.gotoPage(2),results,1234);
          // local.gotoPage(2);
          if (currPage < totalPages - 1) {
            local.gotoPage(currPage + 1);
            // console.log(results.getCurrentNumPois(),8898989,local.getResults().Br);
            for (var i = 0; i < results.getCurrentNumPois(); i++) {
              businessData.push(results.getPoi(i));
            }
            // businessData.push(...local.getResults().Br)
            // ResultArray.push(...local1.getResults().Br);
            // local1.gotoPage(currPage + 1); // 遍历到最后一页之后不再进行下一页搜索，此时，已经获取到全部的搜索结果，
            // console.log(local1.getResults());
            console.log(businessData, 444444);
          } else {
            console.log('jies');
            console.log(results.getCurrentNumPois(), 5555555);
            for (var i = 0; i < results.getCurrentNumPois(); i++) {
              businessData.push(results.getPoi(i));
            }
            console.log(businessData, 66666);

            this.businessData = businessData;

            // businessData.push(...results.getCurrentNumPois()._pois)
          }
          // 判断状态是否正确
          if (local.getStatus() == BMAP_STATUS_SUCCESS) {
            var s = [];
            // for (var i = 0; i < results.getCurrentNumPois(); i ++){
            //   s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
            // }
            console.log(results, 67890);

            // document.getElementById("r-result").innerHTML = s.join("<br/>");
          }
        }
      };
      var local = new BMapGL.LocalSearch(this.map, options, 1000);
      local.search(this.keyWord);
    },
    // 数据搜索
    searchData() {
      this.init();
    },
    // 导出
    exportData() {
      console.log('导出');
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
    }
  }
});
</script>

<style lang="scss" scoped>
.bd-map {
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
