
// https://eth-goerli.g.alchemy.com/v2/0MyLZH-nEnHiCGbSbXtNA_6dMUqBLWap

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    georli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/0MyLZH-nEnHiCGbSbXtNA_6dMUqBLWap',
      accounts: ['fd0a3ab31d9239caadeb9ebda1d8886b341410544f754841326462ad560a1098'],//private key of metamsk 
    },
  },
};