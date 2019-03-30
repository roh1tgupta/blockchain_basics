class Block {

    constructor() {
        this.index = 0;
        this.previousHash = "";
        this.hash = "";
        this.nonce = 0;
        this.transactions = [];
        console.log('block is created');
     }

    addTransaction(transaction) {
        this.transactions.push(transaction)
    }
    
    get key() {
        console.log('entered in getkey')
        return JSON.stringify(this.transactions) + this.index + this.previousHash + this.nonce
    }

}

module.exports = Block

