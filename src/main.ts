import { randomIntArray } from "./utils/randomIntArray";
import { threeSum } from "./week_1/assignments/threeSum";

const main = () => {
  const arr = randomIntArray(5);

  console.log(arr);

  console.log(threeSum(arr, 0));
};

main();
