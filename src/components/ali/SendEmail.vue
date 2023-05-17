<template>
  <div>
    <div>
      <el-input v-model="emailObj.from" placeholder="请输入发送邮箱"></el-input>
      <el-input v-model="emailObj.to" placeholder="请输入收件邮箱"></el-input>
      <el-input v-model="emailObj.replyTo" placeholder="请输入回件邮箱"></el-input>
      <el-input v-model="emailObj.subject" placeholder="请输入主题"></el-input>
      <el-input v-model="emailObj.text" placeholder="请输入内容"></el-input>
      <el-input v-model="emailObj.html" placeholder="请输入html"></el-input>
      <!-- <el-button @click="sendList">发送</el-button>
        <el-button @click="sendEmail">发送单个</el-button> -->
      <div id="editor" style="width:700px;height:300px;"></div>
      <el-button @click="close">关闭</el-button>
      <el-button @click="comfirm">确认</el-button>
    </div>
    <!-- <div>
      <el-upload
        class="upload-demo"
        action="/"
        :on-change="handleChange"
        :on-exceed="handleExceed"
        :on-remove="handleRemove"
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
        :auto-upload="false"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue';
import ali from '@/store/modules/ali';
import company from '@/store/modules/company';
import XLSX from 'xlsx';
import wangeditor from 'wangeditor';

export default Vue.extend({
  props: {
    emailObj: {
      type: Object
    }
  },
  data() {
    return {
      len: 0
      // emailObj: {
      //   from: 'singhai@email.wulilang.com', //发送邮箱
      //   to: '', //发往哪里
      //   subject: '', // Subject line
      //   text: '', //标题
      //   html: '', //内容
      //   replyTo: '782118880@qq.com', //custom reply address
      //   attachments: [] // 附件
      // }
    };
  },
  mounted() {
    this.createEditor();
  },
  methods: {
    // 创建编辑器
    createEditor() {
      this.editor = new wangeditor('#editor');
      this.editor.customConfig.onchange = html => {
        console.log(44546464, html);
        this.emailObj.html = html;
      };
      this.editor.create();
      this.editor.txt.html(this.emailObj.html);
    },
    sendList() {
      // this.tableData.forEach(item => {
      //   console.log(item, 1234);
      if (this.tableData && this.tableData.length > 0) {
        this.sendEmail(this.tableData[this.len].email);
      } else {
        this.$message.error('请先导入数据');
      }
      // if (item.email.length > 3) {
      //   // this.emailObj.email = item.email;
      //   this.sendEmail(item.email);
      // }
      // });
    },
    sendEmail(email) {
      console.log(email, 897989);
      this.len++;
      this.emailObj.to = email;
      if (!email || email.length < 3) {
        this.sendList();
        return;
      }

      ali.dispatch('sendEmail', this.emailObj).then(result => {
        console.log(result, 8989);
        setTimeout(() => {
          if (this.len <= 3) {
            this.sendList();
          }
        }, 1000);
      });
    },
    //上传文件时处理方法
    handleChange(file, fileList) {
      const types = file.raw.name.split('.')[1];
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types);
      console.log(fileType, 678);
      this.fileTemp = file.raw;
      if (this.fileTemp) {
        if (fileType) {
          this.excelImport();
        } else {
          this.$message({
            type: 'warning',
            message: '附件格式错误，请删除后重新上传！'
          });
        }
      } else {
        this.$message({
          type: 'warning',
          message: '请上传附件！'
        });
      }
    },
    //超出最大上传文件数量时的处理方法
    handleExceed() {
      this.$message({
        type: 'warning',
        message: '超出最大上传文件数量的限制！'
      });
      return;
    },
    //移除文件的操作方法
    handleRemove(file, fileList) {
      this.fileTemp = null;
    },
    // 导入
    excelImport() {
      let fileReader = new FileReader();
      var file = event.currentTarget.files[0];
      console.log(file, 'file');
      // 回调函数
      fileReader.onload = ev => {
        try {
          let data = ev.target.result;
          let workbook = XLSX.read(data, {
            type: 'binary'
          });
          // excel读取出的数据
          let excelData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          // 将上面数据转换成 table需要的数据
          console.log(excelData, 'excelData');
          let arr = [];
          excelData.forEach(item => {
            console.log(item, '获取item');
            let obj = {};
            obj.companyName = item['公司名称'];
            obj.operatingStatus = item['经营状态'];
            obj.legalPerson = item['法定代表人'];
            obj.registeredCapital = item['注册资本'];
            obj.paidInCapital = item['实缴资本'];
            obj.dateOfIncorporation = item['成立日期'];
            obj.approvalDate = item['核准日期'];
            obj.businessTerm = item['营业期限'];
            obj.province = item['所属省份'];
            obj.city = item['所属城市'];
            obj.county = item['所属区县'];
            obj.unifiedSocialCreditCode = item['统一社会信用代码'];
            obj.TINumber = item['纳税人识别号'];
            obj.registrationNumber = item['注册号'];
            obj.organizationCode = item['组织机构代码'];
            obj.numberOfInsured = item['参保人数'];
            obj.companyType = item['公司类型'];
            obj.industry = item['所属行业'];
            obj.NameUsedBefore = item['曾用名'];
            obj.registeredAddress = item['注册地址'];
            obj.newAddress = item['最新年报地址'];
            obj.website = item['网址'];
            obj.phone = item['电话'];
            obj.otherPhone = item['其他电话'];
            obj.email = item['邮箱'];
            obj.otherEmail = item['邮箱'];
            obj.natureOfBusiness = item['经营范围'];
            arr.push(obj);
          });
          // 导入传值,这时可传后端保存
          this.tableData = [...arr];
          console.log(this.tableData, 45678);
          this.addCompany(this.tableData);
        } catch (e) {
          window.alert('文件类型不正确！');
          return false;
        }
      };
      // 读取文件 成功后执行上面的回调函数
      fileReader.readAsBinaryString(file);
    },
    addCompany(data) {
      company.dispatch('addCompany', data).then(result => {
        console.log(result, 8989);
      });
    },
    close() {
      this.$emit('close');
    },
    comfirm() {
      console.log(this.editor, 88899);
      this.$emit('comfirm', this.emailObj);
    }
  }
});
</script>

<style lang="scss" scoped>
::v-deep .el-input {
  display: block;
  width: 300px;
  margin-top: 10px;
}
::v-deep .el-button {
  margin-top: 10px;
}
</style>
