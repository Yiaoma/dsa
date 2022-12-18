export class CanonicalElement {
  private network: number[] = [];
  private canonical: number[] = [];
  private size: number[] = [];

  constructor(size: number) {
    for (let i = 0; i < size; i++) {
      this.network[i] = i;
      this.canonical[i] = i;
      this.size[i] = 1;
    }
  }

  private root(p: number): number {
    while (p !== this.network[p]) {
      this.network[p] = this.network[this.network[p]];
      p = this.network[p];
    }

    return p;
  }

  public find(p: number): number {
    return this.canonical[this.root(p)];
  }

  public union(p: number, q: number): void {
    const pRoot = this.root(p);
    const qRoot = this.root(q);

    if (pRoot === qRoot) return;

    if (this.size[pRoot] < this.size[qRoot]) {
      this.network[pRoot] = qRoot;
      this.size[qRoot] += this.size[pRoot];
      this.canonical[qRoot] = Math.max(
        this.canonical[pRoot],
        this.canonical[qRoot]
      );
    } else {
      this.network[qRoot] = pRoot;
      this.size[pRoot] += this.size[qRoot];
      this.canonical[pRoot] = Math.max(
        this.canonical[pRoot],
        this.canonical[qRoot]
      );
    }
  }
}
