<template>
  <div class="company-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div>
        <span>查找</span>
        <el-input v-model="keyword" placeholder="请输入查找内容"></el-input>
      </div>
      <div>
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
          <!-- <div slot="tip" class="el-upload__tip">只 能 上 传 xlsx / xls 文 件</div> -->
        </el-upload>
        <el-button @click="sendList">发送</el-button>
        <el-button type="primary" @click="search">导入</el-button>
        <el-button type="primary" @click="search">导出</el-button>
        <el-button type="primary" @click="search">查询</el-button>
        <el-button @click="handleAdd" type="warning">增加</el-button>
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="companyData" @selectChange="handleSelectionChange">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="companyName" label="公司名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="operatingStatus" label="经营状态" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="legalPerson" label="法人" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="registeredCapital" label="注册资本" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="paidInCapital" label="实缴资本" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="dateOfIncorporation" label="成立日期" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="approvalDate" label="核准日期" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="businessTerm" label="营业期限" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="province" label="所属省份" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="city" label="所属城市" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="county" label="所属区县" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="unifiedSocialCreditCode" label="统一社会信用代码" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="TINumber" label="纳税人识别号" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="registrationNumber" label="注册号" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="organizationCode" label="组织机构代码" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="numberOfInsured" label="参保人数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="companyType" label="公司类型" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="industry" label="所属行业" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="NameUsedBefore" label="曾用名" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="registeredAddress" label="注册地址" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="newAddress" label="最新年报地址" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="website" label="网址" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="phone" label="电话" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="otherPhone" label="其他电话" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="email" label="邮箱" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="otherEmail" label="其他邮箱" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="natureOfBusiness" label="经营范围" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="remark" label="备注" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="sendNum" label="发送次数" show-overflow-tooltip> </el-table-column>
      <el-table-column label="操作" align="center" width="240">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
          <span class="content-detail" @click="companyDetail(scope.row._id)">详情</span>
          <span class="content-detail" @click="sendSingleEmail(scope.row._id)">发送</span>
        </template>
      </el-table-column>
    </base-table>
    <!-- 弹窗 -->
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showDialog" @closeDialog="closeDialog">
      <div class="bank">
        <span>公司名称</span>
        <el-input v-model="companyItem.companyName" placeholder="请输入商品名称"></el-input>
        <span>经营状态</span>
        <el-input v-model="companyItem.operatingStatus" placeholder="请输入经营状态"></el-input>
        <span>法人</span>
        <el-input v-model="companyItem.legalPerson" placeholder="请输入商品内容"></el-input>
        <span>注册资本</span>
        <el-input v-model="companyItem.registeredCapital" placeholder="请输入注册资本"></el-input>
        <span>实缴资本</span>
        <el-input v-model="companyItem.paidInCapital" placeholder="请输入实缴资本"></el-input>
        <span>成立日期</span>
        <el-input v-model="companyItem.dateOfIncorporation" placeholder="请输入成立日期"></el-input>
        <span>核准日期</span>
        <el-input v-model="companyItem.approvalDate" placeholder="请输入核准日期"></el-input>
        <span>营业期限</span>
        <el-input v-model="companyItem.businessTerm" placeholder="请输入营业期限"></el-input>
        <span>所属省份</span>
        <el-input v-model="companyItem.province" placeholder="请输入所属省份"></el-input>
        <span>所属城市</span>
        <el-input v-model="companyItem.city" placeholder="请输入所属城市"></el-input>
        <span>所属区县</span>
        <el-input v-model="companyItem.county" placeholder="请输入所属区县"></el-input>
        <span>统一社会信用代码</span>
        <el-input v-model="companyItem.unifiedSocialCreditCode" placeholder="请输入统一社会信用代码"></el-input>
        <span>纳税人识别号</span>
        <el-input v-model="companyItem.TINumber" placeholder="请输入纳税人识别号"></el-input>
        <span>注册号</span>
        <el-input v-model="companyItem.registrationNumber" placeholder="请输入注册号"></el-input>
        <span>组织机构代码</span>
        <el-input v-model="companyItem.organizationCode" placeholder="请输入组织机构代码"></el-input>
        <span>参保人数</span>
        <el-input v-model="companyItem.numberOfInsured" placeholder="请输入参保人数"></el-input>
        <span>公司类型</span>
        <el-input v-model="companyItem.companyType" placeholder="请输入公司类型"></el-input>
        <span>所属行业</span>
        <el-input v-model="companyItem.industry" placeholder="请输入所属行业"></el-input>
        <span>曾用名</span>
        <el-input v-model="companyItem.NameUsedBefore" placeholder="请输入曾用名"></el-input>
        <span>注册地址</span>
        <el-input v-model="companyItem.registeredAddress" placeholder="请输入注册地址"></el-input>
        <span>最新年报地址</span>
        <el-input v-model="companyItem.newAddress" placeholder="请输入最新年报地址"></el-input>
        <span>网址</span>
        <el-input v-model="companyItem.website" placeholder="请输入网址"></el-input>
        <span>电话</span>
        <el-input v-model="companyItem.phone" placeholder="请输入电话"></el-input>
        <span>其他电话</span>
        <el-input v-model="companyItem.otherPhone" placeholder="请输入其他电话"></el-input>
        <span>邮箱</span>
        <el-input v-model="companyItem.email" placeholder="请输入邮箱"></el-input>
        <span>其他邮箱</span>
        <el-input v-model="companyItem.otherEmail" placeholder="请输入其他邮箱"></el-input>
        <span>经营范围</span>
        <el-input v-model="companyItem.natureOfBusiness" placeholder="请输入经营范围"></el-input>
        <span>备注</span>
        <el-input v-model="companyItem.remark" placeholder="请输入备注"></el-input>
        <span>发送次数</span>
        <el-input v-model="companyItem.sendNum" placeholder="请输入经营范围"></el-input>
      </div>
      <div>
        <span class="save" @click="handleSave()">保存</span>
        <span class="cancel" @click="closeDialog">取消</span>
      </div>
    </base-dialog>
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showSendDialog" @closeDialog="closeDialog">
      <send-email :emailObj="emailObj" @close="showSendDialog = false" @comfirm="comfirm"></send-email>
    </base-dialog>
    <!-- 分页 -->
    <page-change :pageInfo="pageInfo"></page-change>
  </div>
</template>

<script>
import Vue from 'vue';
import MainHeader from '@/components/common/MainHeader.vue';
import PageChange from '@/components/common/PageChange.vue';
import BaseTable from '@/components/common/BaseTable.vue';
import BaseDialog from '@/components/common/BaseDialog.vue';
import BaseUpload from '@/components/common/BaseUpload.vue';
import timeFormate from '@/assets/js/utils/timeFormate.ts';
import SendEmail from '@/components/ali/SendEmail.vue';
import company from '@/store/modules/company';
import ali from '@/store/modules/ali';
import XLSX from 'xlsx';

import mixin from '@/assets/js/mixin.ts';
export default Vue.extend({
  name: 'CompanyList',
  mixins: [mixin],
  components: {
    MainHeader,
    BaseTable,
    PageChange,
    BaseDialog,
    SendEmail
  },
  data() {
    return {
      title: '',
      keyword: '',
      companyName: '',
      // 分页设置
      pageInfo: {
        pageNumber: 1, // 当前页数
        totalPages: 0, // 总页数
        pageFunc: this.initData, // 当前页数需要调用的函数
        pageSize: 10, // 当前页数
        class: 'pageClass'
      },
      uploadInfo: {
        uploadURl: 'http://10.123.61.205:12306/upload/2',
        hide: false,
        uploadClass: 'uploadClass',
        desc: '',
        fileList: []
      },
      companyData: [],
      // 弹窗设置
      dialogInfo: {
        visible: true,
        titleName: '添加公司',
        dialogWidth: '800px',
        activeClass: 'user-dialog'
      },
      showDialog: false,
      showSendDialog: false,
      companyItem: {
        companyName: '',
        operatingStatus: '',
        legalPerson: '',
        registeredCapital: '',
        paidInCapital: '',
        dateOfIncorporation: '',
        approvalDate: '',
        businessTerm: '',
        province: '',
        city: '',
        county: '',
        unifiedSocialCreditCode: '',
        TINumber: '',
        registrationNumber: '',
        organizationCode: '',
        numberOfInsured: '',
        companyType: '',
        industry: '',
        NameUsedBefore: '',
        registeredAddress: '',
        newAddress: '',
        website: '',
        phone: '',
        otherPhone: '',
        email: '',
        otherEmail: '',
        natureOfBusiness: '',
        remark: '',
        sendNum: ''
      },
      // 邮件发送格式
      emailObj: {
        from: 'singhai@email.wulilang.com', //发送邮箱
        to: '', //发往哪里
        subject: '', // Subject line
        text: '', //标题
        html: '', //内容
        replyTo: '782118880@qq.com', //custom reply address
        attachments: [] // 附件
      }
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    formateTime(obj) {
      if (obj.time) {
        return timeFormate.timeformatDay(obj.time);
      }
    },
    async initData() {
      let result = await company.dispatch('getCompanyList', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber
        // title: this.name
      });
      this.companyData = result.data;
      console.log(result, 999);
    },
    // 查询
    search() {
      console.log('查询');
    },
    sendSingleEmail() {
      if (!this.emailObj.subject) {
        this.showSendDialog = true;
      }
      console.log(111112);
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
            obj.remark = '';
            obj.sendNum = 0;
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
    handleSelectionChange(item) {
      console.log(item, 999888);
    },
    handleSave() {
      console.log(this.companyItem, 88899999);
      if (!this.companyItem._id) {
        company.dispatch('addCompany', this.companyItem).then(result => {
          this.initData();
          this.$message.success('添加公司成功');
          this.showDialog = false;
        });
      } else {
        this.companyItem.id = this.companyItem._id;
        company.dispatch('updateCompany', this.companyItem).then(result => {
          this.initData();
          this.$message.success('编辑公司成功');
          this.showDialog = false;
        });
      }
    },
    companyDetail(item) {
      this.showDialog = true;
    },
    // 关闭弹窗
    closeDialog() {
      this.showDialog = false;
    },
    // 新增商品
    handleAdd() {
      this.showDialog = true;
      // this.$router.push({
      //   name: 'AddCompany'
      // });
    },
    // 编辑公司
    handleEdit(id) {
      console.log('编辑');
      this.uploadInfo.fileList[0] = {};
      company.dispatch('CompanyView', id).then(result => {
        this.companyItem = result[0];
        console.log(result[0], 99999);
        this.showDialog = true;
      });
    },
    // 删除商品
    handleDelete(id) {
      company.dispatch('delCompany', { id: id }).then(() => {
        this.$message.success('删除成功');
        this.initData();
      });
    },
    comfirm(obj) {
      console.log(obj, 8989);
    }
  }
});
</script>
<style lang="scss" scoped>
.company-list {
}
</style>
