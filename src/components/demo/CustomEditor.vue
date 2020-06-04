<template>
  <div class="custom-editor">
    <div class="subject-tinymce">
      <vue-ueditor-wrap
        @ready="ready"
        ref="shortAnswerEditor"
        v-model="shortAnswerEditorContent"
        :destroy="false"
        :config="config"
        @beforeInit="addCustomUI"
      ></vue-ueditor-wrap>
    </div>
  </div>
</template>

<script>
// 微信登录需要服务号与微信认证？？？
import Vue from 'vue';
import VueUeditorWrap from 'vue-ueditor-wrap';
import md5 from 'md5';
export default Vue.extend({
  components: {
    VueUeditorWrap
  },
  data() {
    return {
      data: '123',
      shortAnswerEditorContent: '',
      config: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: '60%',
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: '../../../UEditor/'
      }
    };
  },
  created() {
    // this.init();
  },
  methods: {
    ready(editorInstance) {
      // console.log(`实例${editorInstance.key}已经初始化:`, editorInstance)
    },
    // 7. 借助 beforeInit 钩子，你可以实现对 UEditor 的二次开发，会在 scripts 加载完毕之后、编辑器初始化之前触发，以 编辑器 id 和 配置参数 作为入参
    addCustomUI(editorId, editorConfig) {
      // console.log(editorId + '的配置参数是:', JSON.stringify(editorConfig, null, 2))
      console.log(123, 234234);

      var domUtils = window.UE.dom.domUtils;
      // 1. 自定义按钮
      window.UE.registerUI(
        'gapfilling-button' + editorId,
        function(editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function() {
              var t = domUtils.getElementsByTagName(editor.document, 'span', 'gapfilling-span');
              var i = new Date().getTime();
              if (window.performance && typeof window.performance.now === 'function') {
                i += performance.now();
              }
              var e = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(e) {
                var t = (i + Math.random() * 16) % 16 | 0;
                i = Math.floor(i / 16);
                return (e === 'x' ? t : (t & 3) | 8).toString(16);
              });
              var n = t.length + 1;
              var r = 'gapfilling-span ' + md5(e);
              editor.execCommand(
                'inserthtml',
                '<span style="color:red !important" class="' + r + '">' + n + '</span>',
                true
              );
            }
          });
          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '插入填空题标识',
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules: "background-image: url('/gapfilling.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: () => {
              // 这里可以不用执行命令，做你自己的操作也可
              console.log(123123);
              editor.execCommand(uiName);
            }
          });
          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener('selectionchange', function() {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });
          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        65 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );
    },
    questionItemReset(content) {
      let spanRegex = new RegExp(
        '<span style="color:red !important" class="gapfilling-span (.*?)">(.*?)<\\/span>',
        'g'
      );
      let _this = this;
      let newFormItem = [];
      let gapfillingItems = [];
      var score = 0;
      if (content !== null) {
        gapfillingItems = content.match(spanRegex);
      }
      if (gapfillingItems === null) {
        // this.$message.error('请插入填空')
        return false;
      }
      gapfillingItems.forEach(function(span, index) {
        let pairRegex = /<span style="color: red !important" class="gapfilling-span (.*?)">(.*?)<\/span>/;
        pairRegex.test(span);
        newFormItem.push({ prefix: RegExp.$2, itemId: RegExp.$1, content: '', score: 1 });
      });
      const fillVacants = Object.assign({}, newFormItem);
      _this.subjectInfo.fillVacants = JSON.stringify(fillVacants);
      newFormItem.forEach(function(item) {
        _this.subjectInfo.items.some((oldItem, index) => {
          if (oldItem.itemId === item.itemId) {
            item.content = oldItem.content;
            item.score = oldItem.score;
            return true;
          }
        });
        score = score + item.score;
      });
      _this.subjectInfo.score = score;
      _this.subjectInfo.items = newFormItem;
      _this.subjectInfo.fillVacants = JSON.stringify(newFormItem);
      return true;
    }
  }
});
</script>
<style lang="scss">
.gapfilling-span {
  color: red !important;
  border-bottom: 1px solid red !important;
  font-size: 21px !important;
  margin: 0 12px !important;
  width: 40px !important;
}
</style>
gapfilling-spa
