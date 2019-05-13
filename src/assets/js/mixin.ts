import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      cname: '嗨前端'
    };
  },
  watch: {},
  computed: {},
  created() {
    console.log('mixin-created', this.cname);
  },
  mounted() {
    console.log('mixin-mounted', this.cname);
  },
  methods: {}
});
