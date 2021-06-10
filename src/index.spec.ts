import { from } from "./index";

const address = {
  "0x": "0xb8744ae4032be5e5ef9fab94ee9c3bf38d5d2ae0",
  io: "io1hp6y4eqr90j7tmul4w2wa8pm7wx462hq0mg4tw",
};

test("from", () => {
  expect(from(address["0x"]).string()).toBe(address.io);
  expect(from(address.io).stringEth()).toBe(address["0x"]);
});
