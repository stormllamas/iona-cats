import axios from "axios";

import { CATAPI_DEFAULT_LIMIT, CATAPI_ENDPOINT } from "../../constants/cat";
import {
  CatBreedsRequest,
  CatPageByBreedRequest,
  CatBreedsData,
  CatPageByBreedData,
} from "../../types/cat";

export const getCatBreeds: CatBreedsRequest = async () => {
  const catBreeds: CatBreedsData = await axios.get(`${CATAPI_ENDPOINT}/breeds`);
  return catBreeds.data;
};

export const getCatPageByBreed: CatPageByBreedRequest = async (
  page,
  limit = CATAPI_DEFAULT_LIMIT,
  breed
) => {
  const catBreeds: CatPageByBreedData = await axios.get(
    `${CATAPI_ENDPOINT}/images/search?page=${page}&limit=${limit}&breed=${breed}`
  );
  return catBreeds.data;
};
