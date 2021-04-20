require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hope area off tragic educate ranch remember social hidden clock forward six'; 
let testAccounts = [
"0x592318b2606ec3015d23cbfe40d1c53b0032df6e6ebe93626646bc5f25c65fc7",
"0x0a6dff7474055891ae39b78411b3821a070ebcac18d611af7c4b121a52faad51",
"0x23dacb89d58dc21b04392e3907389714aebdf0552609b5ac5b36cdaaf4c4ee1d",
"0xf8d3050f9239e3c99d9018d76561cfefc09f1101ea4321e58d83db1e45503f16",
"0xd21020db5eb92a6e43997644909578d98f5237d3d9265b27e30593ed98bbf38c",
"0x25798d791a20b8e9e272568b2e61c122a6d60288dfdb83dbbcfbcf0020c83221",
"0xaa3ffc02c31c396d3c37e4926f7802ae6343bbe1f9d15780cb48ac1888341613",
"0x55478de41d84092c520c9764f6384b817714b5f736ab218e8ae03aae8fd796a8",
"0xf1c2b2306c379882039070aa920a3453bf0fb057d143ac683342b610f1740152",
"0x347e0b47d8defedadaa01cf5ad6a9eabbbe2c896a3ce6ff116d8d3cf9cb07726"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


