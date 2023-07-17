import { useCallback, useContext, useEffect, useState } from "react";

import { CatContext } from "../App";
import { CATAPI_DEFAULT_LIMIT } from "../constants/cat";
import { getCatPageByBreed } from "../services/cat";
import { CatPageByBreed } from "../types/cat";

const usePaginatedCats = () => {
  const { catStore } = useContext(CatContext);
  const { selectedBreed, catsByBreedPage } = catStore;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CatPageByBreed[]>([]);
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
        setData((prev) => [...prev, ...nextPageRes]);
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
  };
};
export default usePaginatedCats;
