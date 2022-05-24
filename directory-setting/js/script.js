import { aData } from "./module/a.js";
console.log(aData);

import bData from "./module/b.js";
console.log(bData);
// * ↑ 큰 파일을 관리할 때 매우 많이 사용하는 방식

import {
  cFunc,
  testVariable,
  moduleConnect
} from "./module/c.js";

console.log(cFunc(1,2,3)); // [1,2,3]
console.log(testVariable); // 1
console.log(moduleConnect) // "this is connection"