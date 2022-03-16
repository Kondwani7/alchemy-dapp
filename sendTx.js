async function main(){
    require('dotenv').config()
    const {API_KEY, PRIVATE_KEY} = process.env;
    const {createAlchemyWeb3} = require('@alch/alchemy-web3');
    const web3 = createAlchemyWeb3(API_KEY)
    const myAddress = process.env.ADDRESS_1;
    // one off encrpyted signature attached to a block created from a transaction
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest');

    const transaction = {
        'to': process.env.ADDRESS_2,
        'value' : 100,
        'maxPriorityFeePerGas': 1000000108,
        'nonce': nonce,
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash){
        if(!error) {
            console.log("🎉 The hash of your transaction is: ", hash)
        }else{
            console.log("error with your transaction", error);
        }
    })
}

main()