<template>
  <div>
    <div class="tools">
      <section>
        <h4>在线工具</h4>
        <ul>
          <li>
            <div>
              <a href="http://www.baidu.com" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>TinyPng</span>
              </a>
            </div>
            <p>超完美PNG压缩工具</p>
          </li>
          <li>
            <div>
              <a href="http://www.bitbug.net" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>比特虫</span>
              </a>
            </div>
            <p>在线制作ico图标</p>
          </li>
          <li>
            <div>
              <a href="https://browsehappy.com/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>浏览器</span>
              </a>
            </div>
            <p>在线。无忧。快升级您的浏览器吧</p>
          </li>
          <li>
            <div>
              <a href="https://compass.umeng.com/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>友盟指数</span>
              </a>
            </div>
            <p>手机</p>
          </li>
          <li>
            <div>
              <a href="http://www.browsersync.cn/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>browsersync</span>
              </a>
            </div>
            <p>浏览器同步测试工具</p>
          </li>
          <li>
            <div>
              <a href="https://github.com/imochen/hotcss" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span> 移动端解决方案</span>
              </a>
            </div>
            <p>移动端布局终极解决方案</p>
          </li>
          <li>
            <div>
              <a href="https://www.processon.com/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span> UML类图</span>
              </a>
            </div>
            <p>免费在线作图、实时协作</p>
          </li>
          <li>
            <div>
              <a href="https://md.aclickall.com/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span> markdown</span>
              </a>
            </div>
            <p>markdown排版</p>
          </li>
          <li>
            <div>
              <a href="https://u.tools/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span> Utools</span>
              </a>
            </div>
            <p>你的生产力工具集</p>
          </li>
          <li>
            <div>
              <a href="http://jsrun.pro/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>JSRUN</span>
              </a>
            </div>
            <p>JSRUN在线编辑器</p>
          </li>
          <li>
            <div>
              <a href="http://www.dooccn.com/nodejs/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>代码测试</span>
              </a>
            </div>
            <p>在线代码测试</p>
          </li>
        </ul>
      </section>
      <section>
        <h4>在线工具</h4>
        <ul>
          <li>
            <div>
              <img src="../../assets/images/icon-search.png" alt="" />
              <span>TinyPng</span>
            </div>
            <p>超完美PNG压缩工具</p>
          </li>
          <li>
            <div>
              <img src="../../assets/images/icon-search.png" alt="" />
              <span>草料二维码</span>
            </div>
            <p>国内创建二维码在线应用</p>
          </li>
          <li>
            <div>
              <img src="../../assets/images/icon-search.png" alt="" />
              <span>TinyPng</span>
            </div>
            <p>超完美PNG压缩工具</p>
          </li>
          <li>
            <div>
              <img src="../../assets/images/icon-search.png" alt="" />
              <span>TinyPng</span>
            </div>
            <p>超完美PNG压缩工具</p>
          </li>
        </ul>
      </section>
      <section>
        <h4>框架</h4>
        <ul>
          <li>
            <div>
              <a href="https://www.createjs.com/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>CreateJs</span>
              </a>
            </div>
            <p>CreateJS是基于HTML5开发的一套模块化的库和工具。</p>
          </li>
          <li>
            <div>
              <a href="https://www.fundebug.com/" target="_blank">
                <img src="../../assets/images/icon-search.png" alt="" />
                <span>FunDebug</span>
              </a>
            </div>
            <p>专业的应用错误监控平台</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  name: 'BaseTools',
  data() {
    return {
      tit: '工具'
    };
  },
  mounted() {},
  methods: {}
});
</script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.tools {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 0 30px;
}
section {
  margin-top: 30px;
  h4 {
    position: relative;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    &:after {
      content: '';
      position: absolute;
      left: -10px;
      top: 50%;
      height: 20px;
      width: 4px;
      margin-top: -10px;
      border-radius: 1px;
      background: $mainColor;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      flex: 0 0 calc(25% - 7.5px);
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 15px 15px;
      border: 1px solid #eee;
      cursor: pointer;
      background: #fff;
      transition: all 0.3s;
      &:nth-child(4n) {
        margin-right: 0px;
      }
      &:hover {
        color: $mainColor;
        box-shadow: 0 30px 28px -16px rgba(0, 0, 0, 0.26);
        transform: translate(0, -4px);
        span {
          color: $mainColor;
        }
      }
      span {
        font-size: 16px;
        color: #333;
        font-weight: bold;
      }
      img {
        width: 20px;
        margin-right: 15px;
      }
      p {
        margin-top: 5px;
        font-size: 14px;
        color: #999;
      }
    }
  }
}
</style>
