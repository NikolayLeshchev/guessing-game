class GuessingGame {
  constructor() {
    this.max = 0;
    this.min = 0;
    this.aver = 0;
  }

  setRange(min, max) {
    this.max = max;
    this.min = min;
    this.aver = max;
  }

  guess() {
    return (this.aver = Math.ceil((this.min + this.max) / 2));
  }

  lower() {
    this.max = this.aver;
  }

  greater() {
    this.min = this.aver;
  }
}

module.exports = GuessingGame;
