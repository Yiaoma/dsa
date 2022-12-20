import { QuickUnionUF } from "../lectures/QuickUnionUF";

export class Percolation {
  private unionFind: QuickUnionUF;
  private openSitesCount: number;
  private openSites: number[] = [];
  private size: number;

  constructor(n: number) {
    const itemsCount = n * n + 2;

    this.unionFind = new QuickUnionUF(itemsCount);
    this.openSitesCount = 0;
    this.size = n;

    for (let i = 0; i < itemsCount; i++) {
      if (i === 0 || i === itemsCount - 1) {
        this.openSites.push(1);
      } else {
        this.openSites.push(0);
      }
    }
  }

  private getIndex(row: number, col: number): number {
    return row * this.size + col - this.size;
  }

  public open(row: number, col: number): void {}

  public isOpen(row: number, col: number): boolean {
    const index = row * this.size + col - this.size;

    return Boolean(this.openSites[index]);
  }

  public isFull(row: number, col: number): boolean {
    const index = row * this.size + col - this.size;

    return this.unionFind.connected(0, index);
  }

  public numberOfOpenSites(): number {
    return this.openSitesCount;
  }

  public percolates(): boolean {
    const index = this.size * this.size + 2;
    return this.unionFind.connected(0, index);
  }
}
