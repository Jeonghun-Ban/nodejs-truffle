pragma solidity ^0.5.2;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol';
import 'openzeppelin-solidity/contracts/token/ERC20/ERC20.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';


contract Token is ERC20, ERC20Detailed, Ownable {
  constructor (string memory name, string memory symbol, uint8 decimals, uint256 totalSupply)
  public
  ERC20Detailed(name, symbol, decimals){
    _mint(owner(), totalSupply * 10**uint(decimals));
  }
}