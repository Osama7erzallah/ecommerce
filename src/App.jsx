import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react";
import Layout from "./layouts/Layout.jsx";
import Register from "./components/web/register/Register.jsx";
import Login from "./components/web/login/Login.jsx";
import Home from "./components/web/home/Home.jsx";
import Categories from "./components/web/categories/Categories.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import HomeDashboard from './components/dashboard/home/Home.jsx';
import CategoriesDashboard from './components/dashboard/categories/Categories.jsx'

export default function App() {


  const [user, setUser] = useState(null);

const saveUser = () =>{
  const token = localStorage.getItem("token")
  const decoded = jwtDecode(token);
  setUser(decoded);

}
  useEffect( ()=>{
if(localStorage.getItem('token'))
saveUser();

  },[])

  // const saveCurrentUser = () => {
  //   const token = localStorage.getItem("userToken");
  //   const decoded = jwtDecode(token);
  //   setUser(decoded);
  // console.log('user' )
  //   console.log(user)

  // }


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} />,
      children: [
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login saveUser={saveUser} setUser={setUser} />
        },
        {
          index:true,
          element: <Home />
        },
        {
          path: 'categories',
          element: <Categories />
        },
        {
          path: '*',
          element: <h2>page not found --- web</h2>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [{
        path: 'home',
        element: <HomeDashboard />
      }
        , {
        path: 'categories',
        element: <CategoriesDashboard />
      },
      {
        path: '*',
        element: <h2>page not found --- dashboard</h2>
      }
      ]

    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}


