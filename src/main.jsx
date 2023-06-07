import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Books from "./components/Books.jsx";
import BookDetail from "./components/BookDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
        loader: () => {
          return fetch(`https://api.itbook.store/1.0/new`);
        },
      },
      {
        path: "book/:id",
        element: <BookDetail />,
        loader: ({ params }) => {
          return fetch(`https://api.itbook.store/1.0/books/${params.id}`);
        },
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  // error page
  {
    path: "/",
    element: <ErrorPage></ErrorPage>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
