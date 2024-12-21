import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar /> {/**shared UI we want to have accross pages  */}
      <Outlet /> {/**pages are rendered in place of this outlet */}
    </>
  );
}
export default MainLayout;
