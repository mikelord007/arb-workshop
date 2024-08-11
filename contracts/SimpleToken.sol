pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenContract is ERC20, Ownable {
    constructor(address initialOwner) ERC20("TokenNameHere", "TokenSymbol") Ownable(initialOwner) {} //constructor initializing Token Name and Symbol while deploying

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount); // function to mint Tokens to anyone
    }
}