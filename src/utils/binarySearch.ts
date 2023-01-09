export const binarySearch = (arr: number[], target: number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

    if (arr[middleIndex] === target) {
      return true;
    } else if (arr[middleIndex] < target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return false;
};
