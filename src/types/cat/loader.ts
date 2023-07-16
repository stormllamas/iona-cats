import { ID } from "../common";
import { CatDetail } from "../cat";
import { LoaderFunction } from "react-router-dom";

export type CatLoaderParams = { params: { catId: ID } };
export type CatLoaderResponse = CatDetail | undefined;
export interface CatLoader extends LoaderFunction {
  (props: CatLoaderParams): Promise<CatLoaderResponse>;
}
