import { useLoaderData } from "react-router-dom";
import { HomeLoaderResult } from "./homeLoader";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  console.log(featuredPackages);

  return <div>HomePage</div>;
}

export default HomePage;
