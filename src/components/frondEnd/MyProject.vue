<template>
  <div>
    <div class="project">
      <no-data :haveData="noData" :messages="noMsg"></no-data>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import NoData from '@/components/frondEnd/common/NoData';
export default Vue.extend({
  name: 'MyProject',
  components: { NoData },
  data() {
    return {
      noData: true,
      noMsg: '项目暂未开放，敬请期待'
    };
  },
  mounted() {},
  methods: {}
});
</script>
