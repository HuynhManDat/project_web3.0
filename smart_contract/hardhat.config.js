require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/UFdlWHTAesXPnExReNGXFV4LZKmbpkUJ',
      accounts: ['690ac03c93845d5dde9044cac5ec12487f545a5c1091403a5fcf94dfdc9ac3ea'],
    },
  },
};