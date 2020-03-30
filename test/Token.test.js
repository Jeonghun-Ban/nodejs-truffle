const { BN } = require('openzeppelin-test-helpers');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const Token = artifacts.require('Token');


contract('Token', ([owner, investor]) => {

    const _name = "TestToken";
    const _symbol = "TT";
    const _decimals = new BN(18);
    const _total_supply = new BN(1000000);

    beforeEach(async () => {
        this.token = await Token.new(_name, _symbol, _decimals, _total_supply, {
            from: owner
        });
    })
  
    describe('properties test', () => {
        it('has a name', async() => {
            expect(await this.token.name()).to.deep.equal(_name);
        })
        it('has a symbol', async() => {
            expect(await this.token.symbol()).to.deep.equal(_symbol);
        })
        it('has 18 decimals', async () => {
            expect(await this.token.decimals()).to.be.bignumber.equal(_decimals);
        })
        it('has total supply', async () => {
            const totalSupply = '1000000000000000000000000';
            expect(await this.token.totalSupply()).to.be.bignumber.equal(totalSupply);
        })
    })

    describe('transaction test', () => {
        it('assigns the initial total supply to the creator', async () => {
            const totalSupply = await this.token.totalSupply();
            const ownerBalance = await this.token.balanceOf(owner);
            expect(ownerBalance).to.be.bignumber.equal(totalSupply);
        })
        it('transfer token to the investor', async () => {
            const value = '1024';
            await this.token.transfer(investor, value, { from: owner });
            const investorBalance = await this.token.balanceOf(investor);
            expect(investorBalance).to.be.bignumber.equal(value);
        })
    })
  })