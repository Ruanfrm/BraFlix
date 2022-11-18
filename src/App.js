import { createBrowserRouter } from "react-router-dom"

import Home from './pages/home'
import Login from "./pages/login"
import Admin from "./pages/admin"
import Error from "./pages/error"
import Networks from "./pages/networks"
import Contact from "./pages/contact"
import Filmes from "./pages/filmes"
import AdminMovie from "./pages/adminMovie"
import Serie from "./pages/series"
import AdminSerie from "./pages/adminSerie"
import Details from "./pages/details"

import Privete from "./routes/privete"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, 
  {
    path: '/login',
    element: <Login/>

  },
  {
    path: '/admin',
    element:<Privete> <Admin/>  </Privete>
  },
  {
    path: "*",
    element: <Error/>
  },
  {
    path: "/admin/social",
    element:<Privete> <Networks/> </Privete> 
  },
  {
  path: "/contact",
  element: <Contact/>
},
{
  path: "/movie",
  element: <Filmes/>
},
{
  path: "/movie/admin",
  element:<Privete><AdminMovie/></Privete> 
},
{
  path: "/serie",
  element:<Serie/> 
},
{
  path: "/serie/admin",
  element:<Privete><AdminSerie/></Privete> 
},
{
  path: "/details/:id",
  element: <Details/>
}
])

export {router};