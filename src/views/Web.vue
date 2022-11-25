<template>
  <div class="web3">
    <el-button @click="linkWallet">连接</el-button>
    <el-button @click="getBalance">获取</el-button>
    <div class="transate">
      <div class="account">
        <el-input v-model="to" />
        <el-input v-model="from" />
      </div>
      <el-button @click="transToken">转</el-button>
    </div>
    <div>
      <el-input v-model="contractAddress" />
      <el-button @click="linkContract">合同</el-button>
    </div>
    <el-button @click="getEth">获取账户信息</el-button>
    <el-button @click="approve">授权</el-button>
    <el-button @click="getApproveBalance">获取授权金额</el-button>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import Web3 from 'web3'
import abi from '../assets/js/ABI.js'
export default Vue.extend({
  components: {},
  data() {
    return {

      // https://goerli.infura.io/v3/
      // id:5,
      contractAddress:'',
      address:'0x25Bf2A6EB6bdc3419017d7df8A2b06711c64a53c',
      address2:'0xD1012c6Ff813767276b4b44734AE5536749Ec783',
      web3:null,
      wallet:'',
      from: "",
      to: ""
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init(){
      window.addEventListener('load',async()=>{
        let web3Provider
        if (window.ethereum) {
        web3Provider = window.ethereum;

        try {
          // window.ethereum.enable();
          const accounts =  window.ethereum.send(
            "eth_requestAccounts"
          );
          console.log(accounts ,'账号信息');
        // setError(null);
        } catch (error) {
          // setError("Unable to connect to Metamask");
          // alert("用户取消授权");
          return;
        }
      } else if (window.web3) {

        web3Provider = window.web3.currentProvider;
        console.log("web3.currentProvider:");
        console.log(window.web3.currentProvider);
      } else {
        web3Provider = new window.Web3.providers.HttpProvider("https://goerli.infura.io/v3/");
        console.log("https://http-testnet.hecochain.com");
      }
      this.web3 = new Web3(web3Provider);
      })
    },
    // 获取账户信息
    async getEth(){
      console.log(window.web3.currentProvider,5678);
      let web3 = new Web3(window.web3.currentProvider)
      let fromAddress = await web3.eth.getAccounts()
      console.log(fromAddress,'fromAddress');
    },
    // 连接合约
    linkContract(){

    },
    // 连接钱包
    linkWallet() {
      console.log("连接");
    },
    // 转账
    transToken(){
      let value = this.web3.utils.toWei('1','ether')
      var message = {from:this.address,to:this.address2,value:value}
      this.web3.eth.sendTransaction(message,(err,res)=>{
        var output = ''
        if(!err){
          output+=res
          console.log(res);
        }else {
          output = "error" +err
        }
        console.log("转账",output);
      })
    },
    // 获取余额
    async getBalance(){
      let result =  await this.web3.eth.getBalance(this.address);
      let result2 =  await this.web3.eth.getBalance(this.address2);
      console.log(result/Math.pow(10,18),result2/Math.pow(10,18),9999);
    },
    async approve(){
      if(window.web3){
        let web3 = new Web3(window.web3.currentProvider)
        let ethContract = new web3.eth.Contract(abi,'0xc04C56C496E72E420722AE7AE40f1f752ABa897B')
        console.log(4564777,ethContract);
        let str =  await ethContract.methods.kkk().call()
        console.log(str,99999);

        // 授权数量
        // let amount = 100*Math.pow(10,18)
        // let toAddress = "dddddd"
        // 小狐狸账户
        // let fromAddress = await web3.eth.getAccounts()
        // ethContract.methods.approve(toAddress,amount+'').send({from:fromAddress[0]})
      }
    },
    getApproveBalance(){
      // if(window.web3){
      //   let web3 = new Web3(window.web3.currentProvider)
      //   let fromAddress = await web3.eth.getAccounts()
      //   let ethContract = new Web3.eth.Contract(this.abi,'dddddddd')
      //   let toAddress = "dddddd"
      //   let balance = await ethContract.methods.allowance(fromAddress,toAddress).call()
      //   ethContract.methods.approve(toAddress,amount+'').send({from:fromAddress[0]})
      // }
      console.log("授权金额");
    }
  },
});
</script>

<style lang="scss" scoped>
.web3 {
  padding: 20px;
  color: #666;
  .transate {
    margin: 20px 0;
    .account {
      margin-bottom: 10px;
      .el-input {
        width: 500px;
        margin-top: 10px;
      }
    }
  }
}
</style>
