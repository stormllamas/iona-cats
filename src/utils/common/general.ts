import { CatBreed } from "../../types/cat";

export const returnUniqueArray = <T extends CatBreed>(a: T[], b: T[]) => {
  const uniqueArray: T[] = [];
  b.forEach((cat) => {
    if (a.findIndex((c) => c.id === cat.id) === -1) {
      uniqueArray.push(cat);
    }
  });
  return [...a, ...uniqueArray];
};
