const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  //deploy the contract
  const TokenContract = m.contract("TokenContract", [
    "0xAf6776B942e16cAb86A6836A0927bf60D5900dbf", //make this address contract owner
  ]);

  return { TokenContract };
});
