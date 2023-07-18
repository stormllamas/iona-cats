import axios from "axios";

import { CatDetailData, CatDetailRequest } from "../../types/cat";

import { CATAPI_ENDPOINT } from "../../constants/cat";

export const getCatDetail: CatDetailRequest = async (catId) => {
  const catDetail: CatDetailData = await axios.get(
    `${CATAPI_ENDPOINT}/images/${catId}`
  );
  return catDetail.data;
};
