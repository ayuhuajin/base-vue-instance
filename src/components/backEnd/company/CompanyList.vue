<template>
  <div class="company-list">
    <!-- 头部 -->
    <main-header :titleName="title">
      <div class="search">
        <div>
          <span>查找</span>
          <el-input v-model="keyword" placeholder="请输入查找内容"></el-input>
        </div>
        <div>
          <el-button @click="sendEmailBySelect">发送</el-button>
          <el-upload
            class="upload-demo"
            action="/"
            :on-change="handleChange"
            :on-exceed="handleExceed"
            :on-remove="handleRemove"
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
            :auto-upload="false"
          >
            <el-button type="primary">导入</el-button>
          </el-upload>
          <el-button @click="vertifyEmail">验证</el-button>
          <el-button @click="emailVertify">验证邮箱</el-button>
          <el-button type="primary" @click="exportText">导出</el-button>
          <el-button type="primary" @click="search">查询</el-button>
          <el-button @click="handleAdd" type="warning">增加</el-button>
        </div>
      </div>
      <div class="filter">
        <el-select v-model="isSend" clearable placeholder="请选择">
          <el-option v-for="item in isSendOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="haveWebsite" clearable placeholder="请选择">
          <el-option v-for="item in haveWebsiteOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="havePhone" clearable placeholder="请选择">
          <el-option v-for="item in havePhoneOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="haveEmail" clearable placeholder="请选择">
          <el-option v-for="item in haveEmailOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="emailValid" clearable placeholder="请选择">
          <el-option v-for="item in emailValidOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="emailCheck" clearable placeholder="请选择">
          <el-option v-for="item in emailCheckOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </main-header>
    <!-- 表格 -->
    <base-table :tableData="companyData" @selectChange="handleSelectionChange" @selectAll="selectFilterAll">
      <el-table-column :selectable="selectable" type="selection" width="55"> </el-table-column>
      <el-table-column prop="companyName" label="名称" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="website" label="网址" show-overflow-tooltip>
        <template slot-scope="scope">
          <span @click="jumpWebsite(scope)" style="cursor:pointer;color:#409eff">{{ scope.row.website }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="emailValid" label="是否有效" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-switch
            @change="changeSwitch(scope.row)"
            v-model="scope.row.emailValid"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="emailCheck" label="是否验证过" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="cursor:pointer;color:#409eff">{{ scope.row.emailCheck ? '是' : '否' }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="phone" label="电话" show-overflow-tooltip> </el-table-column> -->
      <el-table-column prop="email" label="邮箱" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="remark" label="备注" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="sendNum" label="发送次数" show-overflow-tooltip> </el-table-column>
      <el-table-column prop="clickWebsite" label="是否点击" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="cursor:pointer;color:#409eff">{{ scope.row.clickWebsite ? '是' : '否' }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="operatingStatus" label="经营状态" show-overflow-tooltip> </el-table-column>
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
      <el-table-column prop="sendNum" label="发送次数" show-overflow-tooltip> </el-table-column> -->
      <el-table-column label="操作" align="center" width="240">
        <template slot-scope="scope">
          <span class="content-edit" @click="handleEdit(scope.row._id)">编辑</span>
          <span class="content-delete" @click="handleDelete(scope.row._id)">删除</span>
          <span class="content-detail" @click="companyDetail(scope.row._id)">详情</span>
          <span class="content-detail" @click="sendSingleEmail(scope.row)">发送</span>
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
    <base-dialog :dialogInfo="dialogInfo" :showDialog="showSendDialog" @closeDialog="showSendDialog = false">
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
import { email } from '@/assets/js/emailTemplate';
import mixin from '@/assets/js/mixin.ts';
import index from '@/store/modules';
import Axios from 'axios';
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
      len: 0,
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
        companyId: '',
        from: 'singhai@email.wulilang.com', //发送邮箱
        to: '', //发往哪里
        // subject: '您的公司仅差一个官网,让您的官网赋能商业',
        subject: '',
        text: '', //标题
        // html:
        //   '{{address}}<p>一个精致的门面是吸引用户的基础</p><p>1.树立企业品牌的形象</p><p>2.提升企业信誉</p><p>3.品牌推广功能</p><p>4.产品展示功能</p><p>5.传播企业文化</p><p>6.网上销售功能</p><p>7.发布资讯</p><p>8.扩展销售渠道，可利用企业网站进行更好的宣传，以便获得更多的潜在用户群体的关注</p><p><a href="http://shijue.show?id={{id}}" target="_blank">http://shijue.show</a><br></p>', //内容
        html: email,
        replyTo: '782118880@qq.com', //custom reply address
        attachments: [
          {
            filename: 'contact.JPG',
            content: '方式',
            path: 'http://shijue.show/img/qrcode3.png'
          }
        ] // 附件
      },
      isSendOptions: [
        {
          value: true,
          label: '已发送'
        },
        {
          value: false,
          label: '未发送'
        }
      ],
      haveWebsiteOptions: [
        {
          value: true,
          label: '有网址'
        },
        {
          value: false,
          label: '无网址'
        }
      ],
      havePhoneOptions: [
        {
          value: true,
          label: '有电话'
        },
        {
          value: false,
          label: '无电话'
        }
      ],
      haveEmailOptions: [
        {
          value: true,
          label: '有邮箱'
        },
        {
          value: false,
          label: '无邮箱'
        }
      ],
      emailValidOptions: [
        {
          value: true,
          label: '邮箱有效'
        },
        {
          value: false,
          label: '邮箱失效'
        }
      ],
      emailCheckOptions: [
        {
          value: true,
          label: '邮箱验证'
        },
        {
          value: false,
          label: '邮箱未验证'
        }
      ],
      tableTitleData: [
        {
          label: '邮箱',
          prop: 'email'
        }
      ],
      isSend: null,
      haveWebsite: null,
      havePhone: null,
      haveEmail: null,
      emailValid: null,
      emailCheck: null,
      emailList: [],
      emailFilterList: []
    };
  },
  async mounted() {
    this.initData();
  },
  methods: {
    // 判断是否可选中
    selectable(row, index) {
      return true;
      // if (row.email && row.email.length > 3 && !row.emailCheck) {
      //   return true;
      // } else {
      //   return false;
      // }
    },
    // 更改开关
    changeSwitch(row) {
      console.log(row, 76897);
      company.dispatch('updateSwitch', { id: row._id, emailValid: row.emailValid }).then(result => {
        this.$message.success('发送成功');
      });
    },
    async initData() {
      let result = await company.dispatch('getCompanyList', {
        pageSize: this.pageInfo.pageSize,
        pageNumber: this.pageInfo.pageNumber,
        isSend: this.isSend,
        haveWebsite: this.haveWebsite,
        havePhone: this.havePhone,
        haveEmail: this.haveEmail,
        emailValid: this.emailValid,
        emailCheck: this.emailCheck
      });
      this.companyData = result.data;
      this.pageInfo.totalPages = result.total;
    },
    // 查询
    search() {
      this.initData();
    },
    // 验证邮箱有效性
    vertifyEmail() {
      let arr = [];
      this.emailList.forEach(item => {
        arr.push(item.companyName);
      });
      company.dispatch('vertifyEmailBatch', arr).then(result => {
        console.log(result, 8989);
      });
    },
    sendSingleEmail(obj) {
      this.emailObj.html = email;
      this.emailObj.html = this.emailObj.html.replace(/{{address}}/, obj.companyName);
      this.emailObj.html = this.emailObj.html.replace(/{{id}}/, obj._id);
      if (!this.emailObj.subject) {
        this.showSendDialog = true;
        return;
      }

      this.emailObj.email = obj.email;
      this.emailObj.to = obj.email;
      this.emailObj.companyId = obj._id;
      ali.dispatch('sendEmail', this.emailObj).then(result => {
        this.$message.success('发送成功');
        this.initData();
      });
    },
    emailVertify() {
      let arr = [];
      this.emailList.forEach((item, index) => {
        // if (item.email) {
        //   arr.push({
        //     id: item._id,
        //     email: item.email
        //   });
        // }
        company.dispatch('vertifyEmailByDetective', item).then(result => {
          // this.$message.success('验证');
          // this.initData();
        });
        // Axios.get(
        //   `https://api.mail-verifier.xyz/?cmd=verify&key=8680244EB6827DFE5A11F7A1A0BCF9DA&email=${item.email}`
        // ).then(async result => {});
      });
    },
    // 批量发送
    sendEmailBySelect() {
      this.emailObj.html = email;
      if (!this.emailObj.subject) {
        this.showSendDialog = true;
        return;
      }
      if (this.emailFilterList && this.emailFilterList.length > 0) {
        this.sendEmail(this.emailFilterList[this.len]);
      } else {
        this.$message.error('请先选择需要发送的邮箱');
      }
    },
    sendEmail(obj) {
      console.log(obj, 99999);
      if (this.len >= this.emailFilterList.length) {
        this.$message.success('发送成功');
        // this.initData();
        this.len = 0;
        return;
      }
      this.emailObj.html = this.emailObj.html.replace(/{{address}}/, obj.companyName);
      this.emailObj.html = this.emailObj.html.replace(/{{id}}/, obj._id);

      this.len++;
      this.emailObj.to = obj.email;
      this.emailObj.companyId = obj._id;
      if (!obj.email || obj.email.length < 3) {
        this.sendEmailBySelect();
        return;
      }

      console.log(this.emailObj, 999999);
      ali.dispatch('sendEmail', this.emailObj).then(result => {
        setTimeout(() => {
          if (this.len <= this.emailFilterList.length) {
            this.sendEmailBySelect();
          } else {
            // this.initData();
          }
        }, 1000);
      });
    },
    sendList() {
      // this.tableData.forEach(item => {
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
    jumpWebsite(scope) {
      var reg = new RegExp('http');
      var str = scope.row.website;
      if (reg.test(str)) {
        window.open(scope.row.website);
      } else {
        window.open(`http://${scope.row.website}`);
      }
    },
    exportText() {
      let arr = '';
      this.emailList.forEach(item => {
        arr = arr + item.email + '\r';
      });
      const filename = parseInt(Math.random() * 1000000000);
      const qhyhLog = arr; // 需要导出的字符串
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(qhyhLog));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    },

    // 导出
    excelExport() {
      // 导出表格的表头设置
      let allColumns = this.tableTitleData;
      var columnNames = [];
      var columnValues = [];
      for (var i = 0; i < allColumns.length; i++) {
        columnNames[i] = allColumns[i].label;
        columnValues[i] = allColumns[i].prop;
      }
      require.ensure([], () => {
        const { export_json_to_excel } = require('../../../assets/js/excel/Export2Excel');
        const tHeader = columnNames;
        const filterVal = columnValues;
        const list = this.emailList;
        const data = this.formatJson(filterVal, list);
        export_json_to_excel(tHeader, data, '学生管理');
      });
    },
    // 格式化数据
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    //上传文件时处理方法
    handleChange(file, fileList) {
      const types = file.raw.name.split('.')[1];
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types);
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
      // 回调函数
      fileReader.onload = async ev => {
        try {
          let data = ev.target.result;
          let workbook = XLSX.read(data, {
            type: 'binary'
          });
          // excel读取出的数据
          let excelData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
          // 将上面数据转换成 table需要的数据
          let arr = [];
          excelData.forEach(item => {
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
            obj.sendContent = '';
            obj.clickWebsite = false;
            obj.sendNum = 0;
            obj.isSend = false;
            obj.emailValid = true; //是否有效
            obj.emailCheck = false; // 是否验证
            obj.haveWebsite = item['网址'] == '-' ? false : true;
            obj.havePhone = item['电话'] == '-' ? false : true;
            obj.haveEmail = item['邮箱'] == '-' ? false : true;
            arr.push(obj);
          });
          // 导入传值,这时可传后端保存
          this.tableData = [...arr];
          await this.addCompany(this.tableData);
          setTimeout(() => {
            this.initData();
          }, 1000);
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
        this.$message.success('添加公司成功');
      });
    },
    selectFilterAll(list) {
      this.emailFilterList = list;
      console.log(list, 12345);
    },
    handleSelectionChange(item) {
      this.emailList = item;
      console.log(item, 999888);
    },
    handleSave() {
      if (!this.companyItem._id) {
        company.dispatch('addCompany', [this.companyItem]).then(result => {
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
      this.uploadInfo.fileList[0] = {};
      company.dispatch('CompanyView', id).then(result => {
        this.companyItem = result[0];
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
      this.showSendDialog = false;
      this.$message.success('模板保存成功');
    }
  }
});
</script>
<style lang="scss" scoped>
.company-list {
  /deep/ .searchOption {
    display: block;
  }
  .search {
    display: flex;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .filter {
    margin-top: 20px;
  }
}
</style>
