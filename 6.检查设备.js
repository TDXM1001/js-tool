// 使用navigator.userAgent 判断是移动设备还是电脑设备：

// 运行环境为浏览器
const judgeDeviceType =
  () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(navigator.userAgent) ? 'Mobile' : 'PC';

judgeDeviceType()  // PC | Mobile