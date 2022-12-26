import { Percolation } from "./week_1/assignments/Percolation";

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const main = () => {
  const n = 1000;

  const percolation = new Percolation(n);

  const startTime = new Date().getTime();

  while (!percolation.percolates()) {
    const randomRow = randomIntFromInterval(1, n);
    const randomCol = randomIntFromInterval(1, n);

    percolation.open(randomRow, randomCol);
  }

  const endTime = new Date().getTime();

  console.log(percolation);

  console.log("Time Complexity: ", endTime - startTime);
};

main();
