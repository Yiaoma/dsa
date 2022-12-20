import { Percolation } from "./week_1/assignments/Percolation";

const main = () => {
  const percolation = new Percolation(3);

  percolation.open(1, 1);

  console.log(percolation);
};

main();
