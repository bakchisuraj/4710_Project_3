import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{infoFromGithub}from './components/Github/Github.jsx'
import Check from './components/Check/Check.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import Community from './components/Community/Community.jsx'
import Logout from './components/Logout/Logout.jsx'
import Profile from './components/Profile/Profile.jsx'
import StudentRecommendation from './components/StudentRecommendation/StudentRecommendation.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}>
          <Route path='check' element={<Check/>}/>
      </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={infoFromGithub}
      path='github' 
      element={<Github/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='logout' element={<Logout/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='feedback' element={<Feedback/>}/>
      <Route path="community" element={<Community/>} />
      <Route path="studentrecommendation" element={<StudentRecommendation/>} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
