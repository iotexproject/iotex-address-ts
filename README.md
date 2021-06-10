# iotex-address

### Install

```js
$ npm i @iotexproject/iotex-address-ts
$ yarn add @iotexproject/iotex-address-ts

```

### Usage

```js
import { from } from "@iotexproject/iotex-address-ts";

const addr = from("0xb8744ae4032be5e5ef9fab94ee9c3bf38d5d2ae0");
console.log(addr.string());
// io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw
console.log(addr.stringEth());
// 0xb8744ae4032be5e5ef9fab94ee9c3bf38d5d2ae0

const addr2 = from("io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw");
console.log(addr2.string());
// io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw
console.log(addr2.stringEth());
// 0xb8744ae4032be5e5ef9fab94ee9c3bf38d5d2ae0
```
