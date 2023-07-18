export interface CatContextType {
  catStore: {
    selectedBreed: string;
    catsByBreedPage: number;
    endOfCatsByBreedPage: boolean;
  };
  updateSelectedBreed: (a: string) => void;
  updateCatsByBreedPage: (a: number) => void;
  updateEndOfCatsByBreedPage: (a: boolean) => void;
}
