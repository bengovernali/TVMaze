import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'

import { setUser } from '../../store/features/user/userSlice'

import BodyWrapper from '../StyledComponents/BodyWrapper'
import SubmitButton from '../StyledComponents/SubmitButton'

const users = [
    {
        username: 'mikewasowski',
        password: 'codingiscool',
        role: 'admin',
        name: 'Mike Wasowski'
    },
    {
        username: 'elemin',
        password: 'ontheroadagain',
        role: 'user',
        name: 'Andre Smith'
    }
]

function Login () {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loggedInUser = useSelector((state) => state.user.user)

    let navigate = useNavigate()

    const dispatch = useDispatch()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = users.find(user => user.username === username)
        if (!!user) {
            if (user.password === password) {
                dispatch(setUser(user))
                navigate('/search')
            } else {
                alert('Username and/or password incorrect!')
            }
        } else {
            alert('Username and/or password incorrect!')
        }
    }

    useEffect(() => {
        return !!loggedInUser.username ? navigate('/search') : null
    }, [loggedInUser, navigate])
    
    return (
        <BodyWrapper>
           <LoginForm>
                <InputField placeholder='username' value={username} onChange={handleUsernameChange} />
                <InputField placeholder='password' value={password} onChange={handlePasswordChange} type='password'/>
                <SubmitButton disabled={username.length === 0 || password.length === 0 ? true : false} onClick={handleSubmit}>Submit</SubmitButton>
            </LoginForm> 
        </BodyWrapper>
    )
}

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputField = styled.input`
    max-width: 80%;
    height: 2rem;
    border-radius: 2em;
    margin: 20px;
    padding: 0 20px;
`

export default Login