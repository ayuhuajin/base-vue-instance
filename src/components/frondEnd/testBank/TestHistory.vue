<template>
  <div class="test-history">
    <ul v-if="list.length">
      <li @click="gotoResult(item)" v-for="(item, index) in list" :key="index">
        <div>
          <p>{{ item.name }}</p>
          <span>{{ item.endTime }}</span>
        </div>
        <div class="score">{{ item.score }}分</div>
      </li>
    </ul>
    <div v-if="nodata" class="nodata">
      <img src="../../../assets/images/nodata.png" alt="" />
      <p>暂无历史数据</p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'TestHistory',
  data() {
    return {
      list: [{ name: '第一次测试', endTime: '2020-10-29', score: 120 }],
      nodata: false
    };
  },
  head() {
    return {
      title: '历史测试记录'
    };
  },
  created() {
    this.getHistory();
  },
  mounted() {},
  methods: {
    getHistory() {
      if (this.list.length > 0) {
        this.nodata = false;
      } else {
        this.nodata = true;
      }
    },
    gotoResult(item) {
      this.$router.push({
        name: 'testResult'
      });
    }
  }
});
</script>
<style lang="scss" scoped>
.test-history {
  ul {
    padding: 15px;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4vw;
    padding: 4vw 8vw 4vw 4vw;
    box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, 0.08);
    border-radius: 1.3333vw;
    background-size: 1.4667vw 2.9333vw;
    .score {
      font-size: 4.8vw;
      color: #fc3851;
    }
    > div {
      p {
        margin-bottom: 1.3333vw;
        font-size: 4vw;
        font-weight: bold;
        color: #333;
      }
      span {
        font-size: 3.2vw;
        color: #999;
      }
    }
  }
}
.nodata {
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  img {
    width: 100px;
    height: 66px;
  }
  p {
    margin-top: 5px;
    font-size: 16px;
    color: #666;
  }
}
</style>
