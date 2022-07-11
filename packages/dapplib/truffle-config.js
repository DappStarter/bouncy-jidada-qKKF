require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune shoulder name release pitch method good another army gesture'; 
let testAccounts = [
"0x19beabafd464b399f4b8286119f2aa45fcc48a5bd96315a183f1f60a883c214f",
"0xed6c6f13d402eedadfb2ca6eb905eef1cf54f2014162d3597e5705a3c04dd037",
"0x03c72c9bea774c36759df2d5ca8d7229a4e476302a11636f2b74c9c59b124a15",
"0x4329361b799be8c7822873701f1a2ac2429b891691512207da7a670d018f086a",
"0x6f449366708b3b0c6e20ed95cabce59a4d965712ede3d41f5acb12786437b0b6",
"0x5b7e06877543a9b34a89c62afde994db702df001ba912cde24d281c945df88d4",
"0x99badf0ae5b52f573fb2971ca3aceb17e8009be36c0b4080d1bc51ccce7db0f9",
"0x8d6ae9f7a44ff0c320d935d346111aa9694b4c72bad9c75d4589298b829c8e05",
"0x669224edb8b56d1643a38990c7939d64466c1e2f83f7d29c0c0a392577877802",
"0xaa5d8d1f56af9cb494b1f98c6d1b3481d60183a287a85ffaa2dd4931a80d628f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

