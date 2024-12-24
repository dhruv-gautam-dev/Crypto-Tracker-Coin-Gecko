import { Route, Routes } from "react-router-dom";
import { List } from "react-content-loader";
import MainLayout from "../../pages/Layout";
import { lazy, Suspense } from "react";
import CustomErrorBoundary from "../ErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../../pages/Home")); //Lazy loading
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailsPage")); //Lazy loading

function Routing() {
  return (
    <CustomErrorBoundary>
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
              <Suspense fallback={<List />}>
                <CoinDetailsPage />
              </Suspense>
            }
          />{" "}
        </Route>
      </Routes>
    </CustomErrorBoundary>
  );
}
export default Routing;
