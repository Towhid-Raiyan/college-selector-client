import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Admission from "../Pages/Admission/Admission";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";
import Colleges from "../Pages/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
        path: "/allCollege/:id",
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
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      }
    ]
  },
]);