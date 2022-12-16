export class QuickUnionUF {
  private id: number[];
  private sz: number[];

  constructor(size: number) {
    this.id = [];
    this.sz = [];

    for (let i = 0; i < size; i++) {
      this.id.push(i);
      this.sz.push(1);
    }
  }

  private root(i: number): number {
    while (i != this.id[i]) {
      this.id[i] = this.id[this.id[i]];
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

    if (i == j) return;

    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
  }
}
