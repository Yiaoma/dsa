import { CanonicalElement } from "./week_1/assignments/CanonicalElement";

const main = () => {
  const canonicalElement = new CanonicalElement(10);

  canonicalElement.union(0, 9);
  canonicalElement.union(2, 6);

  console.log(canonicalElement);
};

main();
