import { Outlet } from "react-router-dom";
import HomeHeader from "./HomeHeader";

export default function RouteWrapper() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}
