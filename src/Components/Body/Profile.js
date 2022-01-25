import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

function Profile () {
    const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    return !user.username && location.pathname !== '/' ? navigate('/') : null
  }, [location, navigate, user])
    
  return (
        <Message>This is where the user's profile would go!</Message>
    )
}

const Message = styled.h2`
    color: #000000;
    text-align: center;
`

export default Profile