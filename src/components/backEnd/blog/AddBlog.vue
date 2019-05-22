<template>
  <div class="add-blog">
    <div>增加文章</div>
    <base-form></base-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BaseForm from '@/components/common/BaseForm.vue';
export default Vue.extend({
  name: 'AddBlog',
  components: {
    BaseForm
  },
  data() {
    return {
      title: '增加'
    };
  },
  mounted() {},
  methods: {}
});
</script>
<style lang="scss" scoped>
.add-blog {
  background: white;
}
</style>
