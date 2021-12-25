// 配置信息
module.exports = {
  fromDisplayText: '', // 收件箱展示的来件人名字
  fromDisplaySubText: '每日提醒', // 收件箱展示的次级标题
  user: process.env.SENDEMAIL, // 发送者邮箱
  pass: process.env.EMAILPASS, // 发送者邮箱MTP协议密码
  to: process.env.TOEMAIL, // 发送到谁，填邮箱
  weatherKey: process.env.WEATHERKEY, // 和风天气key
  location: '101220101',  // 和风天气-成都武侯区的id
  type: '0', // 和风天气-生活指数type
  tianXingKey: process.env.TIANXINGKEY, // 天行数据的key
  startDay: '2020-09-29', // 日期
}
