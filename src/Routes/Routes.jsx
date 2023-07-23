import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
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
        },
        {
          path: "allCollege/:id",
          element: (
                  <CollegeDetails></CollegeDetails>
          ),
          loader: ({ params }) =>
              fetch(`http://localhost:5000/allCollege/${params.id}`, {
                  method: "GET",
                  headers: {
                      "Content-Type": "application/json",
                  },
              }),
      },
      ]
    },
  ]);