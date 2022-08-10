class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min
        this.right = max
    }

    guess() {
        return this.guessNumber = Math.round((this.left + this.right)/2)
    }

    lower() {
        const mid = Math.round((this.left + this.right)/2)
        this.setRange(this.left, this.guessNumber)
    }
    
    greater() {
        const mid = Math.round((this.left + this.right)/2)
        this.setRange(this.guessNumber, this.right)
    }
}

module.exports = GuessingGame;
