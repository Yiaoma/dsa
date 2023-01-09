import { binarySearch } from "../../utils/binarySearch";

export const bitonicArraySearch = (arr: number[], item: number) => {
  let middleIndex: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      middleIndex = i;
      break;
    }
  }

  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);

  // I know this is kinda redundant to sort second half but I
  // did not want to write binary search 2 times :/

  const result =
    binarySearch(firstHalf, item) ||
    binarySearch(
      secondHalf.sort((a, b) => a - b),
      item
    );

  return result;
};
