export class QuickUnionUF {
  private id: number[];

  constructor(size: number) {
    this.id = [];

    for (let i = 0; i < size; i++) {
      this.id.push(i);
    }
  }

  private root(i: number): number {
    while (i != this.id[i]) {
      i = this.id[i];
    }

    return i;
  }

  public connected(p: number, q: number): boolean {
    return this.root(p) == this.root(q);
  }

  public union(p: number, q: number): void {
    const i = this.root(p);
    const j = this.root(q);
    this.id[i] = j;
  }
}
