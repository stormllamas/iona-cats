import axios from "axios";

import {
  CatBreedsData,
  CatBreedsRequest,
  CatPageByBreedData,
  CatPageByBreedRequest,
} from "../../types/cat";

import { CATAPI_DEFAULT_LIMIT, CATAPI_ENDPOINT } from "../../constants/cat";

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
    `${CATAPI_ENDPOINT}/images/search?page=${page}&limit=${limit}&breed_id=${breed}`
  );
  return catBreeds.data;
};
