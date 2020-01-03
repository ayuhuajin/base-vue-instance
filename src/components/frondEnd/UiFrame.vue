<template>
  <div class="ui-frame">
    <base-demo></base-demo>
  </div>
</template>

<script>
import Vue from 'vue';
import BaseDemo from '@/components/singhai-ui/Demo/BaseDemo';
export default Vue.extend({
  name: 'UiFrame',
  components: { BaseDemo },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
});
</script>

<style lang="scss" scoped>
.ui-frame {
  max-width: 1200px;
  min-height: calc(100vh - 150px);
  margin: 20px auto;
  border-radius: 4px;
  background: #fff;
}
</style>
