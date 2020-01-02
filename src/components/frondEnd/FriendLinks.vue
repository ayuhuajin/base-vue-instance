<template>
  <div>
    <div class="friend-links">
      <no-data :haveData="noData" :messages="noMsg"></no-data>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import NoData from '@/components/frondEnd/common/NoData';
export default Vue.extend({
  name: 'FriendLinks',
  components: { NoData },
  data() {
    return {
      noData: true,
      noMsg: '暂未添加友情链接'
    };
  },
  mounted() {},
  methods: {}
});
</script>
