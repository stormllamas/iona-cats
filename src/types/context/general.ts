export interface CatContextType {
  catStore: {
    selectedBreed: string;
    catsByBreedPage: number;
  };
  updateSelectedBreed: (a: string) => void;
}
