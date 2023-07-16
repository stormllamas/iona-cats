import { getCatDetail } from "../services/cat";
import { CatLoader } from "../types/cat";

export const loader: CatLoader = async ({ params }) => {
  const catDetail = await getCatDetail(params.catId);
  if (!catDetail) return;
  console.log("catDetail", catDetail);
  return catDetail;
};
