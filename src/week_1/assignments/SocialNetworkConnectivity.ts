export class SocialNetworkConnectivity {
  private network: number[] = [];
  private size: number[] = [];
  private notConnectedCount: number;

  constructor(size: number) {
    this.notConnectedCount = size - 1;

    for (let i = 0; i < size; i++) {
      this.network.push(i);
      this.size.push(1);
    }
  }

  private root(p: number): number {
    while (p !== this.network[p]) {
      this.network[p] = this.network[this.network[p]];

      p = this.network[p];
    }

    return p;
  }

  public allConnected(): boolean {
    return this.notConnectedCount === 0;
  }

  public union(p: number, q: number): void {
    const pRoot = this.root(p);
    const qRoot = this.root(q);

    if (pRoot === qRoot) return;

    if (this.size[pRoot] < this.size[qRoot]) {
      this.network[pRoot] = qRoot;
      this.size[qRoot] += this.size[pRoot];
    } else {
      this.network[qRoot] = pRoot;
      this.size[pRoot] += this.size[qRoot];
    }

    this.notConnectedCount--;
  }

  public connected(p: number, q: number): boolean {
    return this.root(p) === this.root(q);
  }
}
