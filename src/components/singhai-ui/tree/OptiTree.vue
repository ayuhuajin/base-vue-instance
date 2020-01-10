<template>
  <ul class="tree-item">
    <li
      v-for="item in treeList"
      :key="item.id"
      :style="{
        marginLeft: `${item.level * 20}px`
      }"
    >
      <hai-check-box v-model="item.checkd" :label="item.name" @onChange="checkedAll(item, item.checkd)">{{
        item.name
      }}</hai-check-box>
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
      console.log(this.treeList);
      console.log(item);
      let kk = this.treeList.filter(m => {
        return m.parent == item.parent;
      });
      kk.forEach(m => {
        m.checkd = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.tree-item {
  padding: 0px 20px;
}
</style>
