import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";

function DetailsPage() {
  const { details } = useLoaderData() as DetailsLoaderResult;

  return (
    <div>
      {details.name} - {details.description}
    </div>
  );
}

export default DetailsPage;
