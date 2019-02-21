class Game {
    constructor(start) {

        // create instance of needed classes
        this.stats = new Statistics();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.starGame.bind(this));
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBet = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render()

    }
    // method to display all the informations about the game
    render(
        colors = ['gray', 'gray', 'gray'],
        money = this.wallet.getWalletValue(),
        result = "",
        stats = [0, 0, 0],
        wonMoney = 0,
        bid = 0
    ) {

        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        });

        this.spanWallet.textContent = money;

        if (result) {
            result = `You won ${wonMoney} $.`;
        } else if (!result && result !== "") {
            result = `You lost ${bid} $.`;
        }

        this.spanResult.textContent = result;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];

        // clean input  afater each game
        this.inputBet.value = "";
    }

    starGame() {

        // check input value
        if (this.inputBet.value < 1) return alert("You need to bet more!");
        const bid = Math.floor(this.inputBet.value);

        // check if user can play with the bid he placed
        if (this.wallet.checkCanPlay(bid)) {
            return alert("You do't have enough money or wrong value was passed! ")
        }

        //  upate wallet value
        this.wallet.changeWallet(bid, '-');

        // create a new instance of draw class
        this.draw = new Draw();

        // get draw result and assign in to the value
        const colors = this.draw.getDrawResult();

        // check game result based on created colors from getDdrawResult method
        const win = Result.checkWinner(colors);
        console.log(win)

        // update wallet value
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);

        //  update the statistics
        this.stats.AddGameToStatistict(win, bid);

        // render games informations
        this.render(colors, this.wallet.getWalletValue(),
            win,
            this.stats.showGameStatistics(),
            wonMoney,
            bid
        )
    }
}