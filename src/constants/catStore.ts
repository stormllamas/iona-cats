export const DEFAULT_CAT_STORE_VALUE = {
  selectedBreed: "",
  catsByBreedPage: 1,
};

export const DEFAULT_CAT_CONTEXT_VALUE = {
  catStore: DEFAULT_CAT_STORE_VALUE,
  updateSelectedBreed: (breed: string) => {
    console.log(breed);
  },
};
