import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News";
import LoginLayout from "../Layout/LoginLaout/LoginLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Terms from "../Terms/Terms";

const router= createBrowserRouter([
  {
    path:'/',
    element:<Navigate to='/category/0'></Navigate>

  },
  {
    
      path:'/',
      element:<LoginLayout></LoginLayout>,
      children:[
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'terms',
          element:<Terms></Terms>
        },
        
      ]
  },

    {
      path: "category",
      element:<Main></Main>,
      children:[
       
        {
          path:':id',
          element:<Category></Category>,
          loader:({params})=>fetch(`https://the-dragon-server-roksana-barna.vercel.app/categories/${params.id}`)
      }
      ]
    },
    {
      
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
          {
            path:':id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=>fetch(`https://the-dragon-server-roksana-barna.vercel.app/news/${params.id}`)
      }

          
        ]
    

    }
  ]);
  export default router;