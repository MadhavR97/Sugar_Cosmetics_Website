import React, { useState } from 'react'
import Cart from '../pages/cart'
import Login from '../pages/login'

function PrivateRouter({ children }) {

  let [LoginData, setLoginData] = useState(JSON.parse(localStorage.getItem('isLoggedIn')) || false)

  return (
    <div>
      {LoginData ? <Cart /> : <Login />}
    </div>
  )
}

export default PrivateRouter
