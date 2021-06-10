# iotex-address

### Install

```js
$ npm i @iotexproject/iotex-address-ts
$ yarn add @iotexproject/iotex-address-ts

```

### Usage

```js
import { from } from "@iotexproject/iotex-address-ts";

const 0xAddress = from("0xb8744ae4032be5e5ef9fab94ee9c3bf38d5d2ae0");
console.log(0xAddress.string());
// io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw


const ioAddress = from("io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw");
console.log(ioAddress.stringEth());
// 0xb8744ae4032be5e5ef9fab94ee9c3bf38d5d2ae0
```
