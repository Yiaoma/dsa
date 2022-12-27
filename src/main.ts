import { PercolationStats } from "./week_1/assignments/PercolationStats";

const main = () => {
  const percolationStats = new PercolationStats(200, 100);

  console.log(percolationStats.mean());
  console.log(percolationStats.stddev());
  console.log(percolationStats.confidenceLo());
  console.log(percolationStats.confidenceHi());
};

main();
