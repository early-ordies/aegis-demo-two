const HUB_CONTRACT_ADDRESS = "0xc88e399816D1BB6aC0fC64E1FBFcfB98cB7E98B2";
const HUB_API_URL = "http://aegis-hub.spear.technology/";
const RPC_URL = "http://ganache.spear.technology:7545/";
const AUSD_ADDRESS = "0xd1eb6c695d573C2Ae32289f9941AbbbD58BcdD25";

const nocust = getNocust();
const web3 = new Web3();
const gasPriceVal = 20;

var FROM_PUB = "";
var TO_PUB = "";

const DEFAULT_PUB = "0x67F6Dd9380A38c7E9b7973c8A7eCbB8f5BFBF89A";
const DEFAULT_PRIV = "991ddc4c9466c813583c16b8188aa1ec7fae1d809bed28134dfcb39daef77383";

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
