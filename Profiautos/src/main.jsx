import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//1 Configurando router

import { createBrowserRouter,RouterProvider} from 'react-router-dom'

import Home from './routes/Home.jsx'
import Presenca from './routes/Presenca.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

// const router = createBrowserRouter([{
//   path:'/',
//   element:<Home/>
// },
// {
//   path:'presenca',
//   element:<Presenca/>
// }])

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Home/>,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'presenca',
      element: <Presenca />
    }
  ]
},
{
  path:'presenca',
  element:<Presenca/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
