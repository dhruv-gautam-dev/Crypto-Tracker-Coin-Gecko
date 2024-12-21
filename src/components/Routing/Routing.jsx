import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/**Rendered in outlet component of main layout */}
        <Route path="/details/:coinId" element={<CoinDetailsPage />} />{" "}
      </Route>
    </Routes>
  );
}
export default Routing;
