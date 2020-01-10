<template>
  <ul class="tree-item">
    <li v-for="item in treeList" :key="item.id">
      <hai-check-box v-model="item.checkd" :label="item.name" @onChange="checkedAll(item, item.checkd)">{{
        item.name
      }}</hai-check-box>
      <tree-item v-if="item.list" :treeList="item.list"> </tree-item>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    treeList: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    checkedAll(item, checked) {
      console.log(item, checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.tree-item {
  padding: 0px 20px;
}
</style>
