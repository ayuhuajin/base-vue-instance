<template>
  <div class="demo-item">
    <h3>Button 按钮</h3>
    <blockquote class="desc">
      <slot name="desc"></slot>
    </blockquote>
    <template>
      <h4>示例</h4>
      <slot name="example"></slot>
    </template>
    <table>
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
          <th>是否必传</th>
        </tr>
      </thead>
      <tbody v-if="params.length != 0">
        <tr v-for="(item, index) in params" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.desc }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.default }}</td>
          <td>{{ item.isMust }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DemoItem',
  props: {
    params: {
      type: Array
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../assets/common';
.demo-item {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 4px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  }
  h3 {
    font-size: 18px;
    color: #333;
  }
  .desc {
    margin-top: 10px;
    padding: 10px 15px;
    border-left: 5px solid $mainColor;
    border-radius: 4px;
    overflow: hidden;
    color: #fff;
    background: $secondaryColor;
  }
  h4 {
    font-size: #333;
    line-height: 40px;
  }
  table {
    margin-top: 20px;
    width: 100%;
    border: 1px solid #eee;
    border-radius: 4px;
    text-align: left;
    th {
      padding-left: 15px;
      border-right: 1px solid #eee;
      line-height: 36px;
      color: #333;
      font-weight: bold;
      background: #c5e8ff;
    }
    td {
      padding-left: 20px;
      border: 1px solid #e9e9e9;
      line-height: 40px;
      color: #333;
    }
  }
}
</style>
