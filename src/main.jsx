import React, { lazy , Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'; 
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
//import About from './components/About.jsx';
import Error from './components/Errorr.jsx';
import Body from './components/Body.jsx';
import Menu from './components/Menu.jsx';
import Shimmer from './components/Shimmer.jsx';
//lazy loading
const About=lazy(()=>import("./components/About.jsx"));

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"",
                element:<Body/>
            },
            {
                path:"about",
                element:<Suspense fallback={<Shimmer/>}>
                    <About/>
                </Suspense>,
            },
            {
                path:"/rest/:id",
                element:<Menu/>,
        
            }
            

        ]

        
    },
   

]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}></RouterProvider>);
