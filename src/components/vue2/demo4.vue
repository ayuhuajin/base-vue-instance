<template>
  <div class="demo4">
    生命周期
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'VueDemo4',
  components: {},
  data() {
    return {
      text: '生命周期'
    };
  },
  beforeCreate() {
    console.log(this.text, 'beforeCreate');
    console.log(this.$el);
  },
  created() {
    console.log(this.text, 'created');
    console.log(this.$el);
  },
  beforeMount() {
    console.log(this.text, 'beforeMount');
    console.log(this.$el);
  },
  mounted() {
    console.log(this.text, 'mounted');
    console.log(this.$el);
  },
  beforeUpdate() {
    console.log(this.text, 'beforeUpdate');
    console.log(this.$el);
  },
  updated() {
    console.log(this.text, 'updated');
    console.log(this.$el);
  },
  beforeDestroy() {
    console.log(this.text, 'beforeDestroy');
    console.log(this.$el);
  },
  destroyed() {
    console.log(this.text, 'destroyed');
    console.log(this.$el);
  },
  watch: {},
  methods: {}
});
</script>
