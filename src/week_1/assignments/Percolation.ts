export class Percolation {
  constructor(n: number) {}

  public open(row: number, col: number): void {}

  public isOpne(row: number, col: number): boolean {
    return false;
  }

  public isFull(row: number, col: number): boolean {
    return false;
  }

  public numberOfOpenSites(): number {
    return 1;
  }

  public percolates(): boolean {
    return false;
  }
}
