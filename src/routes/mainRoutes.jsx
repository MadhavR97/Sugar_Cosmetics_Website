import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Signup from '../pages/signup'
import Login from '../pages/login'
import NewLaunch from '../pages/newLaunch'
import Pagenotfound from '../pages/pagenotfound'
import Lips from '../pages/lips'
import Eyes from '../pages/eyes'
import Face from '../pages/face'
import Nails from '../pages/nails'
import Skin from '../pages/skin'
import Gifting from '../pages/gifting'
import SugarPlay from '../pages/sugar-play'
import Offers from '../pages/offers'
import SinglePage from '../pages/singlePage'
import Cart from '../pages/cart'
import PrivateRouter from '../component/privateRouter'

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/newLaunch' element={<NewLaunch />}></Route>
        <Route path='/lips' element={<Lips />}></Route>
        <Route path='/eyes' element={<Eyes />}></Route>
        <Route path='/face' element={<Face />}></Route>
        <Route path='/nails' element={<Nails />}></Route>
        <Route path='/skin' element={<Skin />}></Route>
        <Route path='/offers' element={<Offers />}></Route>
        <Route path='/gifting' element={<Gifting />}></Route>
        <Route path='/sugar-play' element={<SugarPlay />}></Route>
        <Route path='/single-page/:id' element={<SinglePage />}></Route>
        <Route path='/cart' element={<PrivateRouter><Cart /></PrivateRouter>}></Route>
        <Route path='*' element={<Pagenotfound />}></Route>
      </Routes>
    </>
  )
}

export default MainRoutes
