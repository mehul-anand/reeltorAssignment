import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Pages from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sales from "./components/Sales.jsx";

const { Home, Layout, Dashboard, Listings } = Pages;

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="sales" element={<Sales />} />
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
