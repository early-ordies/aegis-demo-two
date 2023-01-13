const HUB_CONTRACT_ADDRESS = "0xe263C67c412A374Ea24eC7075C3DdbdC89b1e381";
const HUB_API_URL = "http://aegis-hub.spear.technology/";
const RPC_URL = "http://ganache.spear.technology:7545/";
const AUSD_ADDRESS = "0x549BD80b7666e689b8f28FD554a66dC382E2388F";

const nocust = getNocust();
const web3 = new Web3();
const gasPriceVal = 20;

var FROM_PUB = "";
var TO_PUB = "";

const DEFAULT_PUB = "0xa68A0cA55aD5A74FE185d76D523c218328Bf72c6";
const DEFAULT_PRIV = "42e067fc9e7a52c640b1be90e50c7a908c7d8ac19d07ccb1dafc9293256ecc4b";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function init() {
    await nocust.init({
        contractAddress: HUB_CONTRACT_ADDRESS,
        operatorUrl: HUB_API_URL,
        rpcUrl: RPC_URL
    });
}

init();
