import { useContext, useEffect } from "react";

import { CatContext } from "../App";

const usePaginatedCats = () => {
  const { catStore } = useContext(CatContext);
  const { selectedBreed } = catStore;

  useEffect(() => {
    console.log("selectedBreed", selectedBreed);
  }, [selectedBreed]);
};
export default usePaginatedCats;
