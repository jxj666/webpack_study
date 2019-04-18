/*
 * @Description:
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳肖健
 * @Date: 2019-04-18 16:54:51
 * @LastEditTime: 2019-04-18 16:59:27
 */
var GreeterTime = new Date();

module.exports = () => {
  var greet = document.createElement(`div${GreeterTime}`);
  greet.textContent = "Hi there and greetings!";
  return greet;
};
