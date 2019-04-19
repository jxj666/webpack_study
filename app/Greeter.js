/*
 * @Description:
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳肖健
 * @Date: 2019-04-18 16:54:51
 * @LastEditTime: 2019-04-19 11:32:58
 */

// // *版本1
// var GreeterTime = new Date();
// var config = require("./config.json");

// module.exports = () => {
//   var greet = document.createElement(`div`);
//   greet.innerHTML = `Hi there and greetings!<br>${GreeterTime}<br>${
//     config.greetText
//   }`;
//   return greet;
// };

// // *版本2

import React, { Component } from "react";
import config from "./config.json";
import "./main.css";

class Greeter extends Component {
  render() {
    return <div>{config.greetText}</div>;
  }
}

export default Greeter;
