import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Router.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
