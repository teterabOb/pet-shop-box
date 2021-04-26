var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'token resemble sauce rare kitchen rent lumber sketch notice mixture liar gather';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
    networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten:{
      provider: function(){
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/e10063f3ab8c4dff9b2fa292ad2560ef");
      },
      network_id: 3,
    },
    develop: {
      port: 8545
    }
  }
};
