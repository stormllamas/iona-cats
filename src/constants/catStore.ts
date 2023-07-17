export const DEFAULT_CAT_STORE_VALUE = {
  selectedBreed: "",
  catsByBreedPage: 1,
  endOfCatsByBreedPage: false,
};

export const DEFAULT_CAT_CONTEXT_VALUE = {
  catStore: DEFAULT_CAT_STORE_VALUE,
  updateSelectedBreed: (breed: string) => {
    console.log(breed);
  },
  updateCatsByBreedPage: (page: number) => {
    console.log(page);
  },
  updateEndOfCatsByBreedPage: (bool: boolean) => {
    console.log(bool);
  },
};
