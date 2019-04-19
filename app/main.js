/*
 * @Description:
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @LastEditors: 靳肖健
 * @Date: 2019-04-18 16:55:03
 * @LastEditTime: 2019-04-19 11:52:32
 */
// // *版本1
// const greeter = require("./Greeter.js");
// document.querySelector("#root").appendChild(greeter());

// *版本2
import React from "react";
import { render } from "react-dom";
import Greeter from "./Greeter";
import "./main.css";

render(<Greeter />, document.getElementById("root"));
