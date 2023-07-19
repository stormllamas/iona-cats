import { ID } from "../common/general";

// Breeds List
export type CatBreed = {
  id: string;
  name: string;
  description: string;
  origin: string;
  temperament: string;
  url: string;
};

export type CatBreedsResponse = Promise<CatBreed[] | undefined>;
export type CatBreedsData = { data: CatBreedsResponse };
export interface CatBreedsRequest {
  (): CatBreedsResponse;
}

// Breeds By Page
export type CatPageByBreedResponse = Promise<CatBreed[] | undefined>;
export type CatPageByBreedData = { data: CatPageByBreedResponse };
export interface CatPageByBreedRequest {
  (page: number, limit: number, breed: string): CatPageByBreedResponse;
}

// Single Cat Detail
export interface CatDetail {
  id: string;
  url: string;
  breeds?: CatBreed[];
}

export type CatDetailParams = ID | undefined;
export type CatDetailResponse = Promise<CatDetail>;
export type CatDetailData = { data: CatDetailResponse };

export interface CatDetailRequest {
  (catId: CatDetailParams): CatDetailResponse;
}
