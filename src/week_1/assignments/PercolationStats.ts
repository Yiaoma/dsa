import { Percolation } from "./Percolation";
import { randomIntFromInterval } from "../../utils/randomIntFromInterval";

export class PercolationStats {
  public fractions: number[];
  private CONFIDENCE_95 = 1.96;

  constructor(n: number, trials: number) {
    this.fractions = [];

    for (let i = 0; i < trials; i++) {
      const percolation = new Percolation(n);

      while (!percolation.percolates()) {
        const row = randomIntFromInterval(1, n);
        const col = randomIntFromInterval(1, n);

        percolation.open(row, col);
      }
      this.fractions[i] = percolation.numberOfOpenSites() / (n * n);
    }
  }

  public mean(): number {
    let sum = 0;

    for (let i = 0; i < this.fractions.length; i++) {
      sum += this.fractions[i];
    }

    return sum / this.fractions.length;
  }

  public stddev(): number {
    let sum = 0;

    for (let i = 0; i < this.fractions.length; i++) {
      sum += Math.pow(this.fractions[i] - this.mean(), 2);
    }

    return Math.sqrt(sum / (this.fractions.length - 1));
  }

  public confidenceLo(): number {
    return (
      this.mean() -
      (this.CONFIDENCE_95 * this.stddev()) / Math.sqrt(this.fractions.length)
    );
  }

  public confidenceHi(): number {
    return (
      this.mean() +
      (this.CONFIDENCE_95 * this.stddev()) / Math.sqrt(this.fractions.length)
    );
  }
}
