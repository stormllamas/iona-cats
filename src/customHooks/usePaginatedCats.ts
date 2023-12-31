import { useCallback, useContext, useEffect, useState } from "react";

import { CatBreed } from "../types/cat";

import { CATAPI_DEFAULT_LIMIT } from "../constants/cat";

import { getCatPageByBreed } from "../services/cat";

import { returnUniqueArray } from "../utils/common/general";

import { CatContext } from "../App";

const usePaginatedCats = () => {
  const { catStore, updateEndOfCatsByBreedPage } = useContext(CatContext);
  const { selectedBreed, catsByBreedPage } = catStore;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CatBreed[]>([]);
  const [error, setError] = useState<unknown>();

  const fetchBreedPage = useCallback(async () => {
    setLoading(true);
    try {
      const nextPageRes = await getCatPageByBreed(
        catsByBreedPage,
        CATAPI_DEFAULT_LIMIT,
        selectedBreed
      );
      if (nextPageRes?.length) {
        setData((prev) => {
          const uniqueArray = returnUniqueArray<CatBreed>(prev, nextPageRes);
          if (prev.length === uniqueArray.length) {
            updateEndOfCatsByBreedPage(true);
          } else {
            updateEndOfCatsByBreedPage(false);
          }

          return uniqueArray;
        });
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [selectedBreed, catsByBreedPage]);

  useEffect(() => {
    if (catsByBreedPage && selectedBreed) {
      fetchBreedPage();
    }
  }, [selectedBreed, catsByBreedPage, fetchBreedPage]);

  return {
    loading,
    data,
    error,
    setData,
  };
};
export default usePaginatedCats;
