import { Route, Routes } from "react-router-dom";
import { List } from "react-content-loader";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../../pages/Home")); //Lazy loading
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage")); //Lazy loading

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<List />}>
              <Home />
            </Suspense>
          }
        />
        {/**Rendered in outlet component of main layout */}
        <Route
          path="/details/:coinId"
          element={
            <Suspense fallback={<div>Loading Coin Details...</div>}>
              <CoinDetailsPage />
            </Suspense>
          }
        />{" "}
      </Route>
    </Routes>
  );
}
export default Routing;
