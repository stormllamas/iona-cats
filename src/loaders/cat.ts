import { CatBreedsLoader, CatLoader } from "../types/cat";

import { getCatBreeds, getCatDetail } from "../services/cat";

export const catLoader: CatLoader = async ({ params }) => {
  const catDetail = await getCatDetail(params.catId);
  if (!catDetail) return;
  return catDetail;
};

export const catBreedsLoader: CatBreedsLoader = async () => {
  const catBreeds = await getCatBreeds();
  if (!catBreeds) return;
  return catBreeds;
};
