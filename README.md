# iotex-address

### Install

```js
$ npm i @iotexproject/iotex-address-ts
$ yarn add @iotexproject/iotex-address-ts

```

### Usage

```js
import { fromEthereum } from "@iotexproject/iotex-address-ts";

const address = fromEthereum("0xB8744aE4032Be5E5ef9FaB94ee9C3bf38D5D2AE0");
console.log(address.string());
```
