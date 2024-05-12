import React from 'react'
import Main from './main'
import Login from './login'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "login.html",
          element: <Login />,
        },
      ],
    },
  ]);

class App extends React.Component{
    render(){
        return(
            <RouterProvider router={router} />
        )
    }
}

export default App