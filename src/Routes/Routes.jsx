import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Colleges from "../Pages/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/colleges',
          element: <Colleges></Colleges>
        }
      ]
    },
  ]);