import React, { useState } from 'react'
import styled from 'styled-components'

import Menu from './Menu/Menu'
import Burger from './Burger/Burger'


function Header () {
    const [open, setOpen] = useState(false);
    return (
        <HeaderWrapper>
            <SiteTitle>TVMaze App</SiteTitle>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
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