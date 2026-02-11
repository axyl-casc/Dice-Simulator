class Dice {
  constructor(min = 1, max = 6) {
    this.min = Number(min);
    this.max = Number(max);

    if (!Number.isInteger(this.min) || !Number.isInteger(this.max) || this.min > this.max) {
      throw new Error('Dice requires integer bounds where min <= max.');
    }
  }

  roll() {
    const span = this.max - this.min + 1;
    return Math.floor(Math.random() * span) + this.min;
  }
}

window.Dice = Dice;
