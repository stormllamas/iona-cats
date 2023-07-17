import { ID } from "../common/general";

// Breeds List
export type CatBreed = {
  id: string;
  name: string;
  description: string;
};

export type CatBreedsResponse = Promise<CatBreed[] | undefined>;
export type CatBreedsData = { data: CatBreedsResponse };
export interface CatBreedsRequest {
  (): CatBreedsResponse;
}

// Breeds By Page
export type CatPageByBreed = {
  id: string;
  url: string;
};

export type CatPageByBreedResponse = Promise<CatPageByBreed[] | undefined>;
export type CatPageByBreedData = { data: CatPageByBreedResponse };
export interface CatPageByBreedRequest {
  (page: number, limit: number, breed: string): CatPageByBreedResponse;
}

// Single Cat Detail
export interface CatDetail {
  data: string;
}

export type CatDetailParams = ID | undefined;
export type CatDetailResponse = Promise<CatDetail | undefined>;
export type CatDetailData = { data: CatDetailResponse };

export interface CatDetailRequest {
  (catId: CatDetailParams): CatDetailResponse;
}
