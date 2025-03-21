import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root() {
  return (
    <div className="container mx-auto lg:px-20">
      <Header />
      <Outlet />
    </div>
  );
}

export default Root;
