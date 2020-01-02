<template>
  <div>
    <div class="ui-frame">
      <no-data :haveData="noData" :messages="noMsg"></no-data>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import NoData from '@/components/frondEnd/common/NoData';
export default Vue.extend({
  name: 'UiFrame',
  components: { NoData },
  data() {
    return {
      noData: true,
      noMsg: '框架暂未开放，敬请期待'
    };
  },
  mounted() {},
  methods: {}
});
</script>
