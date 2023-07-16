import axios from "axios";

import { CATAPI_ENDPOINT } from "../../constants/cat";
import { CatBreedsRequest, CatBreedsData } from "../../types/cat";

export const getCatBreeds: CatBreedsRequest = async () => {
  const catBreeds: CatBreedsData = await axios.get(`${CATAPI_ENDPOINT}/breeds`);
  return catBreeds.data;
};
