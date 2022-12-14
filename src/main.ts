import { QuickFindUF } from "./QuickFindUF";

const main = () => {
  const unionFind = new QuickFindUF(5);

  unionFind.union(0, 1);
  console.log(unionFind.connected(0, 1));
};

main();
