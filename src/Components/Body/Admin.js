import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import styled from 'styled-components'

function Admin () {
    const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    return !user.username && location.pathname !== '/' ? navigate('/') : user.role !== 'admin' ? navigate('/search') : null
  }, [location, navigate, user])
    
  return (
        <Message>Hello! Welcome to the ADMIN PAGE</Message>
    )
}

const Message = styled.h2`
    color: #000000;
    text-align: center;
`

export default Admin