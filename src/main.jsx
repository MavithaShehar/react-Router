import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import UseState from './pages/UseState.jsx'
import ConditionalRendering from './pages/ConditionalRendering.jsx'
import RestOperator from './pages/RestOperator.jsx'
import SpreadOperator from './pages/SpreadOperator.jsx'
import UseRef from './pages/UseRef.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/useState",
    element:  <UseState/>,
  },
  {
    path: "/conditionalRendering",
    element:  <ConditionalRendering/>,
  },
  {
    path: "/about",
    element:  <About />,
  },
  {
    path: "/contact",
    element:  <Contact />,
  },
  {
    path: "/restOperator",
    element:  <RestOperator />,
  },
  {
    path: "/spreadOperator",
    element:  <SpreadOperator />,
  },
  {
    path: "/useRef",
    element:  <UseRef />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
