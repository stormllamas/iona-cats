import { CatBreedsLoader, CatLoader } from "../types/cat";

import { getCatBreeds, getCatDetail } from "../services/cat";

export const catLoader: CatLoader = async ({ params }) => {
  try {
    const catDetail = await getCatDetail(params.catId);
    if (!catDetail) return;
    return catDetail;
  } catch (error) {
    console.error("catLoader error", error)
    return {
      id: "",
      url: "",
    }
  }
};

export const catBreedsLoader: CatBreedsLoader = async () => {
  const catBreeds = await getCatBreeds();
  if (!catBreeds) return;
  return catBreeds;
};
