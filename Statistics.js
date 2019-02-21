// create Statistics class
class Statistics {
    constructor() {
        this.gameResults = [];
    }
    //     this.gameResults = [{
    //             win: true,
    //             bid: 2
    //         },
    //         {
    //             win: false,
    //             bid: 10,
    //         },
    //         {
    //             win: false,
    //             bid: 1000,
    //         }
    //     ];
    // }

    //  method: add game to statistics
    AddGameToStatistict(win, bid) {
        // create a single game result object
        let gameResult = {
            win: win,
            bid: bid,
        }
        // add game object to gameResults array
        this.gameResults.push(gameResult);
    }

    // method: show game statistics
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses];
    }

}