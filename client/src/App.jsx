
import { BrowserRouter ,Route,Routes } from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Header from './component/Header'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import PrivateRoute from './component/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'

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
        <Route path='/listing/:listingId' element={<Listing />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile/>}/>
         <Route path='/create-listing' element={<CreateListing/>}/>
         <Route path='/update-listing/:listingId' element={<UpdateListing />}/>
        </Route>
        

      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App
