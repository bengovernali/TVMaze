import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

function Profile () {
    const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    return !user.username && location.pathname !== '/' ? navigate('/') : null
  }, [location, navigate, user])
    
  return (
        <h1>PROFILE PAGE</h1>
    )
}

export default Profile