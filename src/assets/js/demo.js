//这里用bsc 链举例子
//加载web3的库
var Web3 = require('web3');

//创建 rpc 连接字符串
var rpcstring = 'https://bsc-dataseed1.defibit.io/';
//创建ws连接字符串
//var wstring = 'wss://bsc-ws-node.nariox.org:443';

//var wscweb3 = new Web3(new Web3.providers.WebsocketProvider(wstring ));
var rpcweb3 = new Web3(new Web3.providers.HttpProvider(rpcstring));
web3 = rpcweb3;

export async function getBNBBalance(address) {
  let result = await web3.eth.getBalance(address);
  //由于使用的是大数模式，小数点有18位，所以获得的balance 要除以10^18次方才是正确的数据
  //或者使用自带的转换工具
  let balance = web3.utils.fromWei(result.toString(10), getweiname());
  //打印结果
  console.log('地址:' + address + '有' + balance + '个BNB');
  return balance;
}

// getBNBBalance('0xfD0b05fFB3c9d91a6f11d9e4442233162002208A');

function getweiname(tokendecimals = 18) {
  let weiname = 'ether';
  switch (tokendecimals) {
    case 3:
      weiname = 'Kwei';
      break;
    case 6:
      weiname = 'mwei';
      break;
    case 9:
      weiname = 'gwei';
      break;
    case 12:
      weiname = 'microether ';
      break;
    case 15:
      weiname = 'milliether';
      break;
    case 18:
      weiname = 'ether';
      break;
  }
  return weiname;
}
