class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue', 'yellow'];
        let _results = this.drawResult()
        this.getDrawResult = () => _results;
    }

    drawResult() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            let index = Math.floor(Math.random() * this.options.length);
            let color = this.options[index];
            colors.push(color);

        }
        return colors;
    }

}