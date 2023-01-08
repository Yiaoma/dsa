import { randomIntFromInterval } from "./randomIntFromInterval";

export const randomIntArray = (
  size: number,
  min: number = -10,
  max: number = 10
) => {
  const arr: number[] = [];

  for (let i = 0; i < size; i++) {
    arr.push(randomIntFromInterval(min, max));
  }

  return arr;
};
