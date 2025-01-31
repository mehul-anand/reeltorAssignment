import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Pages from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sales from "./components/Sales.jsx";
import Views from "./components/Views.jsx";
import MainBoard from "./components/MainBoard.jsx";

const { Home, Layout, Dashboard, Listings } = Pages;

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="main" element={<MainBoard />} />
          <Route path="sales" element={<Sales />} />
          <Route path="views" element={<Views />} />
        </Route>
        <Route path="listings" element={<Listings />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
