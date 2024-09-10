import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Main from './Components/main/Main.jsx'
import About from './Components/about/About.jsx'
import Services from './Components/Service/Service.jsx'
import Contact from './Components/Contect/Contact.jsx'
import User from './Components/User/User.jsx'
import Linkedin from './Components/Linkedin/Linkedin.jsx'

// const router = createBrowserRouter([
//   {
//     path: '',
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Main />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "services",
//         element: <Services />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App />}>
      <Route path='/' element={<Main />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User/>} />
      <Route path='linkedin' element={<Linkedin/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
