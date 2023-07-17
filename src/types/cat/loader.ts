import { ID } from "../common";
import { CatDetail, CatBreed } from "../cat";
import { LoaderFunction } from "react-router-dom";

export type CatBreedsLoaderResponse = Promise<CatBreed[] | undefined>;
export interface CatBreedsLoader extends LoaderFunction {
  (): CatBreedsLoaderResponse;
}

export type CatLoaderParams = { params: { catId: ID } };
export type CatLoaderResponse = CatDetail;
export interface CatLoader extends LoaderFunction {
  (props: CatLoaderParams): Promise<CatLoaderResponse | undefined>;
}
