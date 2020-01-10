<template>
  <div class="hai-tree">
    <div class="tree-title">
      <hai-check-box :label="'全选'" :name="'all'">全选</hai-check-box>
      <span>树形结构</span>
    </div>
    <div class="tree-content">
      <tree-item :treeList="list"></tree-item>
      <!-- <opti-tree :treeList="depList"></opti-tree> -->
    </div>
  </div>
</template>

<script>
import TreeItem from './TreeItem';
import OptiTree from './OptiTree';
export default {
  name: 'HaiTree',
  components: {
    TreeItem,
    OptiTree
  },
  data() {
    return {
      list: [
        {
          level: 1,
          id: 1,
          checkd: true,
          name: '一年级',
          list: [
            {
              level: 2,
              parent: 1,
              checkd: false,
              id: 16,
              name: '二级'
            },
            {
              level: 2,
              parent: 1,
              checkd: false,
              id: 15,
              name: '二级'
            },
            {
              level: 2,
              parent: 1,
              checkd: false,
              id: 14,
              name: '二级'
            },
            {
              level: 2,
              parent: 1,
              checkd: false,
              id: 13,
              name: '二级',
              list: [
                {
                  level: 3,
                  parent: 2,
                  id: 2,
                  name: '班级'
                },
                {
                  level: 3,
                  parent: 2,
                  id: 22,
                  name: '班级444'
                }
              ]
            }
          ]
        },
        {
          level: 1,
          id: 28,
          checkd: true,
          name: '二年级',
          list: [
            {
              level: 2,
              parent: 1,
              checkd: false,
              id: 55,
              name: '二级'
            }
          ]
        },
        {
          level: 1,
          checkd: false,
          id: 18,
          name: '三年级'
        },
        {
          level: 1,
          checkd: false,
          id: 24,
          name: '四年级'
        },
        {
          level: 1,
          checkd: false,
          id: 23,
          name: '三年级'
        }
      ],
      arr: [1, [2, 3, [5, 6], 6], 7],
      depList: []
    };
  },
  mounted() {
    this.flatDeep(this.list, 'list');
    console.log(this.depList);
    this.calcTime();
  },
  methods: {
    // 递归提取对象
    flatDeep(array, node) {
      array.forEach(element => {
        this.depList.push(element);
        if (element[node] && element[node].length > 0) {
          this.flatDeep(element[node], node);
        }
      });
    },
    // 计算js脚本执行时间
    calcTime() {
      console.time('testForEach');
      let sum;
      for (var i = 0; i < 10000; i++) {
        sum = sum + i;
      }
      console.timeEnd('testForEach');
    }
  }
};
</script>

<style lang="scss" scoped>
.hai-tree {
  width: 500px;
  border: 1px solid #eee;
  border-radius: 4px;
  .tree-title {
    display: flex;
    align-items: center;
    padding: 0 15px;
    line-height: 40px;
    background: #f7f7f7;
    & > span {
      margin-left: 15px;
    }
  }
  .tree-content {
    max-height: 400px;
    padding: 20px 0;
    overflow: auto;
  }
}
</style>
