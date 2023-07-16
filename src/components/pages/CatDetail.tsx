import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { CatLoaderResponse } from "../../types/cat";

const CatDetail = () => {
  const catDetail = useLoaderData() as CatLoaderResponse;

  useEffect(() => {
    console.log("catDetail", catDetail);
  }, [catDetail]);

  return (
    <header className="section-header">
      {/* {catDetail ? parser.parseFromString(catDetail, "text/html") : ""} */}
      <h1>CatDetails</h1>
    </header>
  );
};

export default CatDetail;
