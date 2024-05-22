import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Middle from './components/Middle';
import Search from './components/Search';
import Contact from './components/Contact';
import About from './components/About';
import Offer from './components/Offer';
import Help from './components/Help';
import Account from './components/Account';
import { Outlet } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App=()=>{
  return <div className='app'>
    <Navbar/>
    <Outlet/>
    {/* <Footer/> */}
  </div>
}
// const ways=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<App/>
//     },
//     {
//       path:'/search',
//       element:<Search/>
//     },
//     {
//       path:'/contact',
//       element:<Contact/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//     {
//       path:'/help',
//       element:<Help/>
//     },
//     {
//       path:'/offers',
//       element:<Offer/>
//     },
//   ]
// )
const ways=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element:<Middle/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/help',
          element:<Help/>
        },
        {
          path:'/offers',
          element:<Offer/>,
        },
        {
          path:'/search',
          element:<Search/>
        },
      ]
    },
    {
      path:'/account',
      element:<Account/>
    }

    
  ]
)




const box=document.getElementById('container')
const root=ReactDOM.createRoot(box)
root.render(<RouterProvider router={ways}/>)
