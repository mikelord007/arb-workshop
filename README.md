##Commands to run:

- Clone the repo: `git clone https://github.com/mikelord007/arb-workshop.git arb-workshop-clone`
- Change directory to the clone: `cd arb-workshop-clone`
- Open up VS code in there: `code .`
- Install dependencies: `npm i`
- To create a local testnet chain, run hardhat node in another terminal : `npx hardhat node`
- deploy to local testnet: `npx hardhat ignition deploy ./ignition/modules/SimpleToken.js --network localhost`

# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
