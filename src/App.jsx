import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'

import Default from './Utility/Layouts/Default'
import NotFound from './Utility/NotFound'
import AddTrip from './Pages/Form/AddTrip'
import ListDisplay from './Pages/WishList/ListDisplay'

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
        element: <ListDisplay/>
      },
      {path:"/add-trip", element:<AddTrip/>},
      { path: "*", element: <NotFound/> },
    ]
  }
])

const App = () => {
  return <RouterProvider router={Routes} />
}

export default App
