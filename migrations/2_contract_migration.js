const Token = artifacts.require("./Token.sol");

const _name = "TestToken";
const _symbol = "TT";
const _decimals = 18;
const _total_supply = 1000000;

module.exports = function (deployer) {
  deployer.deploy(Token, _name, _symbol, _decimals, _total_supply);
};