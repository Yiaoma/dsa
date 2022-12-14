export class QuickFindUF {
  private id: number[];

  constructor(size: number) {
    this.id = [];

    for (let i = 0; i < size; i++) {
      this.id.push(i);
    }
  }

  public connected(p: number, q: number): boolean {
    return this.id[p] === this.id[q];
  }

  public union(p: number, q: number): void {
    const pid = this.id[p];
    const qid = this.id[q];

    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
  }
}
