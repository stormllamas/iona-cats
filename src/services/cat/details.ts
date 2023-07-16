import axios from "axios";

import { CATAPI_ENDPOINT } from "../../constants/cat";
import { CatDetailRequest, CatDetailData } from "../../types/cat";

export const getCatDetail: CatDetailRequest = async (catId) => {
  const catDetail: CatDetailData = await axios.get(
    `${CATAPI_ENDPOINT}/${catId}`
  );
  return catDetail.data;
};
