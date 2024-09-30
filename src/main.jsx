import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Series from "./pages/series/Series.jsx";
import Favoritos from "./pages/favoritos/Favoritos.jsx";
import NotFound from "./pages/notFound/notFound.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/series",
    element: <Series />,
  },
  {
    path: "/favoritos",
    element: <Favoritos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
