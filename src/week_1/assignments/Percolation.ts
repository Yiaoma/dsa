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

  private connectSide(row: number, col: number, side: "T" | "R" | "B" | "L") {
    let nextRow: number;
    let nextCol: number;

    if (side === "T") {
      nextRow = row - 1;
      nextCol = col;

      if (nextRow === 0) {
        this.unionFind.union(nextRow, this.getIndex(row, col));
        return;
      }
    } else if (side === "R") {
      nextRow = row;
      nextCol = col + 1;

      if (nextCol > this.size) return;
    } else if (side === "B") {
      nextRow = row + 1;
      nextCol = col;

      if (nextRow === this.size + 1) {
        const bottomIndex = this.size * this.size + 1;
        this.unionFind.union(bottomIndex, this.getIndex(row, col));
        return;
      }
    } else {
      nextRow = row;
      nextCol = col - 1;

      if (nextCol === 0) return;
    }

    if (!this.isOpen(nextRow, nextCol)) return;

    this.unionFind.union(
      this.getIndex(row, col),
      this.getIndex(nextRow, nextCol)
    );
  }

  public open(row: number, col: number): void {
    if (this.isOpen(row, col)) return;

    this.connectSide(row, col, "T");
    this.connectSide(row, col, "R");
    this.connectSide(row, col, "B");
    this.connectSide(row, col, "L");

    this.openSites[this.getIndex(row, col)] = 1;
    this.openSitesCount++;
  }

  public isOpen(row: number, col: number): boolean {
    const index = this.getIndex(row, col);

    return Boolean(this.openSites[index]);
  }

  public isFull(row: number, col: number): boolean {
    const index = this.getIndex(row, col);

    return this.unionFind.connected(0, index);
  }

  public numberOfOpenSites(): number {
    return this.openSitesCount;
  }

  public percolates(): boolean {
    const bottomIndex = this.size * this.size + 1;

    return this.unionFind.connected(0, bottomIndex);
  }
}
