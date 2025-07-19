import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'

import Default from './Utility/Layouts/Default'
import NotFound from './Utility/NotFound'
import AddTrip from './Pages/Form/AddTrip'
import ListDisplay from './Pages/WishList/ListDisplay'
import Country from './Pages/Suggestion/Country'
import LocalWish from './Pages/LocalWish/LocalWish'
import AddTripPage from './Pages/Form/AddTripPage'
import DisplayList from './Pages/WishList/DisplayList'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace/>
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/wishlist',
        element: <DisplayList/>
      },
      {
        path: '/Suggestion',
        element: <Country/>
      },
      
      {
        path: '/LocalWish',
        element: <LocalWish/>
      },
      {path:"/add-trip", element:<AddTripPage/>},
      { path: "*", element: <NotFound/> },
    ]
  }
])

const App = () => {
  return <RouterProvider router={Routes} />
}

export default App
