<template>
  <div class="hai-alert">
    <transition-group name="fade">
      <div class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content" :class="item.type">{{ item.content }}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>
let seed = 0;

function getUuid() {
  return 'alert_' + seed++;
}
export default {
  name: 'HaiAlert',
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(notice) {
      const name = getUuid();

      let _notice = Object.assign(
        {
          name: name
        },
        notice
      );

      this.notices.push(_notice);

      // 定时移除，单位：秒
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration);
    },
    remove(name) {
      const notices = this.notices;

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.hai-alert {
  position: fixed;
  z-index: 11;
  width: 100%;
  top: 20px;
  left: 0;
  text-align: center;
  pointer-events: none;
}

.alert-main {
  transition: all 0.3;
  .alert-content {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 3px;
    font-size: 14px;
    color: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    margin-bottom: 8px;
  }
  .alert-content.success {
    background: #67c23a;
  }
  .alert-content.normal {
    background: #909399;
  }
  .alert-content.warning {
    background: #e6a23c;
  }
  .alert-content.error {
    background: #f56c6c;
  }
}
</style>
