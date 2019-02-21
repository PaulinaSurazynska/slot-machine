class Wallet {
    constructor(money) {
        let _money = money;

        // get current wallet value
        this.getWalletValue = () => _money;

        // check if user can play
        this.checkCanPlay = (value) => {
            if (value >= _money) return true;
            return false;
        }

        // change wallet value
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("wrong type of action. Sorry! Try again!")
                }
            } else {
                throw new Error("wrong type of input. Sorry! Try again!");
            }
        }
    }
}

const wallet = new Wallet(200)