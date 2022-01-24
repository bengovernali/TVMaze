import React, { useState } from 'react'
import styled from 'styled-components'

import { useSelector } from 'react-redux'

import Menu from './Menu/Menu'
import Burger from './Burger/Burger'


function Header () {
    const [open, setOpen] = useState(false);
    const user = useSelector((state) => state.user.user)
    return (
        <HeaderWrapper>
            <SiteTitle>TVMaze App</SiteTitle>
            { !!user.username ? <Burger open={open} setOpen={setOpen}/> : null}
            { !!user.username ? <Menu open={open} setOpen={setOpen}/> : null}
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    background-color: #001011;
    color: #FFFFFF;
    align-items: center;
    z-index: 99;
`

const SiteTitle = styled.h1`
    margin-left: 20px;
`

export default Header