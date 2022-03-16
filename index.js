async function main() {
    const {createAlchemyWeb3} = require('@alch/alchemy-web3');
    const web3 = createAlchemyWeb3("https://eth-rinkeby.alchemyapi.io/v2/JWHGKfH8skHs7Ko95Vz0DJ8h3YEQyBBG");
    const blockNumber = await web3.eth.getBlockNumber();
    console.log("the lastest block number is " + blockNumber);
}
main();