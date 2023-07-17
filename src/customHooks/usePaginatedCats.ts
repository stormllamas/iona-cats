import { useCallback, useContext, useEffect, useState } from "react";

import { CatContext } from "../App";
import { CATAPI_DEFAULT_LIMIT } from "../constants/cat";
import { getCatPageByBreed } from "../services/cat";
import { CatPageByBreed } from "../types/cat";

const usePaginatedCats = () => {
  const { catStore } = useContext(CatContext);
  const { selectedBreed, catsByBreedPage } = catStore;

  const [data, setData] = useState<CatPageByBreed[]>([]);

  const fetchBreedPage = useCallback(async () => {
    const nextPageRes = await getCatPageByBreed(
      catsByBreedPage,
      CATAPI_DEFAULT_LIMIT,
      selectedBreed
    );
    if (nextPageRes?.length) {
      setData((prev) => [...prev, ...nextPageRes]);
    }
  }, [selectedBreed, catsByBreedPage]);

  useEffect(() => {
    if (catsByBreedPage && selectedBreed) {
      fetchBreedPage();
    }
    console.log("selectedBreed", selectedBreed);
    console.log("catsByBreedPage", catsByBreedPage);
  }, [selectedBreed, catsByBreedPage]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);
};
export default usePaginatedCats;
