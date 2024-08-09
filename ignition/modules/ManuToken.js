const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Token", (m) => {
  const lock = m.contract("Manu", [
    "0xAf6776B942e16cAb86A6836A0927bf60D5900dbf",
  ]);

  return { lock };
});
