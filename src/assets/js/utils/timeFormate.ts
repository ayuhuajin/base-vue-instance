export default class {
  // 时间格式化 返回 mm-dd
  static timeformats(now: string | Date): string {
    let date: Date;
    if (typeof now == 'string') {
      date = new Date(now);
    } else {
      date = now;
    }
    return `${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${
      date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    }`;
  }
  // 时间格式化 返回 yyyy-mm-dd
  static timeformatDay(now: string | Date): string {
    let date: Date;
    if (typeof now == 'string') {
      date = new Date(now);
    } else {
      date = now;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${
      date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    }`;
  }
  // 时间格式化 返回 yyyy-mm-dd hh:mm:ss
  static timeformat(now: string | Date): string {
    let date: Date;
    if (typeof now == 'string') {
      date = new Date(now);
    } else {
      date = now;
    }
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${
      date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    }   ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    }:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`;
  }
}
