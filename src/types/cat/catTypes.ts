import { ID } from "../common/general";

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

export interface CatDetail {
  data: string;
}

export type CatDetailParams = ID | undefined;
export type CatDetailResponse = Promise<CatDetail | undefined>;
export type CatDetailData = { data: CatDetailResponse };

export interface CatDetailRequest {
  (catId: CatDetailParams): CatDetailResponse;
}
