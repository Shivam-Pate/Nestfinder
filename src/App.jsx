
import { BrowserRouter ,Route,Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Header from './component/Header'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import PrivateRoute from './component/PrivateRoute'

function App() {
  

  return (
    <>
    
       <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
        </Route>
        

      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
