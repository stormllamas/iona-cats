import { ID } from "../common/general";

export interface CatDetail {
  data: string;
}

export type CatDetailParams = ID | undefined;
export type CatDetailResponse = Promise<CatDetail | undefined>;
export type CatDetailData = { data: CatDetailResponse };

export interface CatDetailRequest {
  (catId: CatDetailParams): CatDetailResponse;
}
