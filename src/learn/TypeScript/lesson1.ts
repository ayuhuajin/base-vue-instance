// https://www.tslang.cn/docs/handbook/basic-types.html   ts基础教学
// 布尔值
let isDone: boolean = false;
// 数字
let count: number = 7;
// 字符串
let cname: string = 'wsinghai';
// 数组
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list: number[] = [1, 2, 3];
// 第二种方式是使用数组泛型，Array<元素类型>：
let listName: Array<number> = [4, 5, 6];
// Any
let notSure: any = 4;
// void 表示没有类型   当函数没有返回值
function warnUser(): void {
  console.log('This is my warning message');
}

// 类型断言 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;
// 另一个为as语法：
{
  let someValue: any = 'this is a string';
  let strLength: number = (someValue as string).length;
}
