import "./App.css";
import Home from "./components/Home";
import Register from "./components/Register";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalLayout from "./layouts/GlobalLayout";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login";
import Album from "./components/Products";




function App() {
  const router = createBrowserRouter([
    {
      path: "/", // The path to match
      element: <GlobalLayout />, // The element to render
      errorElement: <ErrorPage />, // The element to render when an error occurs
      children: [
        {
          index: true, // The index route
          element: <Home />, // The element to render
        },
        {
          path: "register", // The path to match
          element: <Register />,
        },
        {
          path: "login", // The path to match
          element: <Login />,
        },
        {
          path: "design packages", // The path to match
          element: <Album />,
        },
       
       
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
