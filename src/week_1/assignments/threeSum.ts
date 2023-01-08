// export const threeSum = (arr: number[], sum: number) => {
//   const map = new Map<Number, Number>();

//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) map.set(arr[i], i);
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const diff = sum - (arr[i] + arr[j]);

//       if (map.has(diff) && map.get(diff) != i && map.get(diff) != j)
//         return true;
//     }
//   }

//   return false;
// };

export const threeSum = (arr: number[], sum: number) => {
  const sortedArray = arr.sort();
  const result: number[][] = [];

  for (let i = 0; i < sortedArray.length - 2; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;

    while (left < right) {
      const tempSum = sortedArray[i] + sortedArray[left] + sortedArray[right];

      if (tempSum === sum) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        break;
      }

      if (tempSum < sum) {
        left++;
        continue;
      }

      if (tempSum > sum) {
        right--;
        continue;
      }
    }
  }

  return result;
};
