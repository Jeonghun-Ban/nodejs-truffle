require("dotenv").config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        process.env.DEV_MNEMONIC,
        "https://ropsten.infura.io/v3/" + process.env.INFURA_PROJECT_ID
      ),
      network_id: 3,
      gas: 4700000
    }
  }
}
