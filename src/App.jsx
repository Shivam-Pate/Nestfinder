
import { BrowserRouter ,Route,Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signout from './pages/Signout'
import Header from './commponent/Header'

function App() {
  

  return (
    <>
    
       <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-out' element={<Signout />} />
        <Route path='/about' element={<About />} />
        

      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
