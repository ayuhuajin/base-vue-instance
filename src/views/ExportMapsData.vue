<template>
  <div class="export-maps-data">
    <el-tabs type="border-card" v-model="mapName">
      <el-tab-pane label="百度地图" name="百度地图">
        <bd-map v-if="mapName == '百度地图'"></bd-map>
      </el-tab-pane>
      <el-tab-pane label="高德地图" name="高德地图">
        <gd-map v-if="mapName == '高德地图'"></gd-map>
      </el-tab-pane>
      <el-tab-pane label="测试" name="测试">
        <map-test v-if="mapName == '测试'"></map-test>
      </el-tab-pane>
      <el-tab-pane label="微信" name="微信">
        <we-chat v-if="mapName == '微信'"></we-chat>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import BdMap from '../components/maps/BdMap';
import GdMap from '../components/maps/GdMap';
import MapTest from '../components/maps/MapTest';
import WeChat from '../components/maps/WeChat';
export default Vue.extend({
  name: 'ExportMapsData',
  components: {
    BdMap,
    GdMap,
    MapTest,
    WeChat
  },
  data() {
    return {
      mapName: '测试'
    };
  },
  mounted() {},
  methods: {}
});
</script>

<style lang="scss" scoped></style>
