import { useCallback, useState } from "react";
import { DEFAULT_CAT_STORE_VALUE } from "../constants/catStore";

const useCatStore = () => {
  const [catStore, setCatStore] = useState(DEFAULT_CAT_STORE_VALUE);

  const updateSelectedBreed = useCallback((selectedBreed: string) => {
    setCatStore((prev) => ({
      ...prev,
      catsByBreedPage: 1,
      selectedBreed,
    }));
  }, []);

  const updateCatsByBreedPage = useCallback((catsByBreedPage: number) => {
    setCatStore((prev) => ({
      ...prev,
      catsByBreedPage,
    }));
  }, []);

  const updateEndOfCatsByBreedPage = useCallback(
    (endOfCatsByBreedPage: boolean) => {
      setCatStore((prev) => ({
        ...prev,
        endOfCatsByBreedPage,
      }));
    },
    []
  );

  return {
    catStore,
    updateSelectedBreed,
    updateCatsByBreedPage,
    updateEndOfCatsByBreedPage,
  };
};

export default useCatStore;
