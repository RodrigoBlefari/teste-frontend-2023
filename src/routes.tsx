import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import paths from "./constants/paths";

const Home = lazy(() =>
  import("./pages/Home/Home").then(({ Home }) => ({
    default: Home,
  }))
);

export function AppRoutes() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path={paths.home} element={<Home></Home>}></Route>
      </Routes>
    </Suspense>
  );
}
