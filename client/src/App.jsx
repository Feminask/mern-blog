import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'
import { Footer } from 'flowbite-react'
import FooterCom from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'

function App() {
  return (
<>
     <BrowserRouter >
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
      <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      <Route element={<PrivateRoute></PrivateRoute>}>      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Route>
      <Route element={<OnlyAdminPrivateRoute></OnlyAdminPrivateRoute>}>  
          <Route path='/create-post' element={<CreatePost></CreatePost>}></Route>
          <Route path='/update-post/:postId' element={<UpdatePost />} />
      </Route>

      <Route path='/projects' element={<Projects></Projects>}></Route>
      <Route path='/post/:postSlug' element={<PostPage></PostPage>}></Route>

     </Routes>
     <FooterCom></FooterCom>
     </BrowserRouter>
  
</>  )
}

export default App
