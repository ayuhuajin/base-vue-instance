<template>
  <div class="add-blog">
    <div class="title">增加文章</div>
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
  .title {
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    font-size: 20px;
    background: white;
  }
}
</style>
